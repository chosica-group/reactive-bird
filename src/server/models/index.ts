// require('dotenv').config();
// const fs = require('fs');
// const path = require('path');
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   dialect: 'postgres',
//   logging: false
// });
// const db = {};
// // fs
// //   .readdirSync(__dirname)
// //   .filter((file) => (file.indexOf(".") !== 0) && (file !== 'index.js'))
// //   .forEach((file) => {
// //     const model = require(path.join(__dirname, file))(sequelize);
// //     db[model.name] = model;
// //   });
// console.log(path.join(__dirname), 'path');
// Object.keys(db).forEach(function(modelName) {
//   if ('associate' in db[modelName]) {
//     db[modelName].associate(db);
//   }
// });
// // db.topics.hasMany(db.comments, { foreignKey: { allowNull: false }, onDelete: 'cascade' });
// // db.comments.belongsTo(db.topics);
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// export { db };
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { Comments } from './comments';
import { Topics } from './topics';

const sequelizeOptions: SequelizeOptions = {
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  dialect: 'postgres',
};

// Создаем инстанс Sequelize
export const sequelize = new Sequelize(sequelizeOptions);

// // Инициализируем модели
export async function createComment() {
  return Comments.create({ id: 1, comment: 'wehdioewhdowehdowe' });
}
export async function getCommentById(id: number) {
  return Comments.findOne({ where: { id } });
}
sequelize.addModels([Topics, Comments]);

export async function dbConnect() {
  try {
    await sequelize.authenticate(); // Проверка аутентификации в БД
    await sequelize.sync(); // Синхронизация базы данных
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export const initDB = async () => {
  await dbConnect();
  await createComment();
  const findedComment = await getCommentById(1);
  // Выводим в консоль найденный коммент
  console.log('Finded comment: ', findedComment);
};

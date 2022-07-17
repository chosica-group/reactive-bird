const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(`${process.env.DRIVER}://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`, {logging: false});
const db = {};

fs
  .readdirSync(__dirname)
  .filter((file: string) => (file.indexOf(".") !== 0) && (file !== 'index.ts'))
  .forEach((file: string) => {
    const model = sequelize.import(path.join(__dirname, file));
    // @ts-ignore
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  // @ts-ignore
  if ('associate' in db[modelName]) {
    // @ts-ignore
    db[modelName].associate(db);
  }
});

// ----- SEQUELIZE ASSOCIATIONS -----
// --- OFFICES WITH ROOMS ---
// @ts-ignore
db.topics.hasMany(db.comments, { foreignKey: { allowNull: false }, onDelete: 'cascade' });
// @ts-ignore
db.comments.belongsTo(db.topics);

// @ts-ignore
db.sequelize = sequelize;
// @ts-ignore
db.Sequelize = Sequelize;

export { db };

import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { Topics } from './topics';
import { Comments } from './comments';
import { SiteTheme } from './site-theme';
import { UserTheme } from './user-theme';
import { SiteThemeService } from 'server/services/site-theme';
import { lightTheme, darkTheme } from './theme-data';

const sequelizeOptions: SequelizeOptions = {
  host: !process.env.NODE_ENV || process.env.NODE_ENV === 'production' ? 'postgres' : 'localhost', // если локально запуск - ставить localhost
  // host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'magus-malawi-gush',
  database: 'chosica',
  dialect: 'postgres',
};
const siteThemeService = new SiteThemeService();
export const sequelize = new Sequelize(sequelizeOptions);

sequelize.addModels([Topics, Comments, UserTheme, SiteTheme]);

Topics.hasMany(Comments, { as: 'comments', foreignKey: { name: 'topicId' } });
Comments.belongsTo(Topics, { as: 'topic' });

export async function dbConnect() {
  try {
    await Topics.sync();
    await Comments.sync();
    await UserTheme.sync();
    await SiteTheme.sync();

    await sequelize.authenticate(); // Проверка аутентификации в БД
    await sequelize.sync(); // Синхронизация базы данных
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export const initDB = async () => {
  await dbConnect();
  await siteThemeService.create(lightTheme);
  await siteThemeService.create(darkTheme);
};

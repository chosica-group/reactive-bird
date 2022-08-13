import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { Comments } from './comments';
import { Topics } from './topics';

const sequelizeOptions: SequelizeOptions = {
  host: !process.env.NODE_ENV || process.env.NODE_ENV === 'production' ? 'postgres' : 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'magus-malawi-gush',
  database: 'chosica',
  dialect: 'postgres',
};

const sequelize = new Sequelize(sequelizeOptions);
sequelize.addModels([Topics, Comments]);

Topics.hasMany(Comments, { as: 'comments', foreignKey: { name: 'topicId' } });
Comments.belongsTo(Topics, { as: 'topic' });

export default sequelize;


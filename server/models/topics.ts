import { Sequelize, DataTypes } from 'sequelize';

module.exports = (sequelize: Sequelize) =>
  sequelize.define('topics', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    timestamps: false
  });

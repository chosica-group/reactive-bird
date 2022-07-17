import { Sequelize, DataTypes } from 'sequelize';

module.exports = (sequelize: Sequelize) =>
  sequelize.define('comments', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    timestamps: false
  });

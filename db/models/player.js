'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    static associate({ Game, Favorite, Comment }) {
      this.hasMany(Game, { foreignKey: 'player_id' });
      this.hasMany(Favorite, { foreignKey: 'player_id' });
      this.hasMany(Comment, { foreignKey: 'player_id' });
    }
  }
  Player.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      age: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      avatar: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Player',
    }
  );
  return Player;
};

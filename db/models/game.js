'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate({ Player, Favorite, Comment }) {
      this.belongsTo(Player, { foreignKey: 'player_id' });
      this.hasMany(Favorite, { foreignKey: 'game_id' });
      this.hasMany(Comment, { foreignKey: 'game_id' });
    }
  }
  Game.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      adult: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      player_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Players',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Game',
    }
  );
  return Game;
};

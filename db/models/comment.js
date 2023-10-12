'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ Player, Game }) {
      this.belongsTo(Player, { foreignKey: 'player_id' });
      this.belongsTo(Game, { foreignKey: 'game_id' });
    }
  }
  Comment.init(
    {
      text: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      player_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Players',
          key: 'id',
        },
      },
      game_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Games',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Comment',
    }
  );
  return Comment;
};

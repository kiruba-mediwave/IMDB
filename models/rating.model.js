module.exports = (sequelize, Sequelize) => {
  const Rating = sequelize.define("rating", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    user: {
      type: Sequelize.UUID,
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    movie: {
      type: Sequelize.UUID,
    },

    createdByUser: {
      type: Sequelize.UUID,
      references: {
        model: "users",
        key: "id",
      },
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  });

  // Movie.associate = function (models) {
  //     Movie.belongsTo(models.user, {
  //         foreignKey: "createdByUser",
  //         as: "createdUserInfo",
  //     });
  // };

  return Rating;
};

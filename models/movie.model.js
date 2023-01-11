module.exports = (sequelize, Sequelize) => {
    const Movie = sequelize.define("movie", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      genre: {
        type: Sequelize.STRING
      },
      language: {
        type: Sequelize.STRING
      },
      yearOfRelease: {
        type: Sequelize.INTEGER,
        allowNull: false
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
  
    return Movie;
  };
  

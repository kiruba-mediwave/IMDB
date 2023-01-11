const { user, movie } = require("../models");

const createMovie = (moviePayload) => {
  return movie.create(moviePayload);
};

const getMovieInfo = ({ movieId }) => {
  return movie.findOne({
    where: {
      id: movieId,
    },
    include: [
      {
        model: user,
        as: "createdUserInfo",
      },
    ],
    // attributes: ['id', 'name', 'genre', 'language']
  });
};

module.exports = {
  createMovie,
  getMovieInfo,
};

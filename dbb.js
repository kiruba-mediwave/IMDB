const { users, movies, ratings } = require("./models");

const findUser = ({ username, userId }) => {
  return users.find((u) => u.username === username || u.id === userId);
};

const findMovieInfo = ({ movieId }) => {
  const movie = movies.find((m) => m.id === movieId);
  if (movie) {
    const user = findUser({ userId: movie.createdByUser });
    movie.createdByUser = user;
  }

  movie.rating = findRating({ movieId });
  return movie;
};

const findRating = ({ movieId }) => {
  return rating.findAll({
    where: {
      movie: movieId,
    },
  });
};

module.exports = {
  findUser,
  findMovieInfo,
  findRating,
};

const { rating } = require("../models");

const createRating = (ratingPayload) => {
  return rating.create(ratingPayload);
};

const getAllRating = ({ movieId }) => {
  return rating.findAll({
    where: {
      movie: movieId,
    },
    attributes: ["id", "rating"],
  });
};
module.exports = {
  createRating,
  getAllRating,
};

require("dotenv").config();
const { createMovie, getMovieInfo } = require("./controllers/movie.controller");
const {
  createRating,
  getAllRating,
} = require("./controllers/rating.controller");
const { getAllUsers } = require("./controllers/user.controller");

function printDBValues(value) {
  const json = JSON.parse(JSON.stringify(value));
  console.log(json);
}

function makeJSONFromInstance(value) {
  const json = JSON.parse(JSON.stringify(value));
  return json;
}

async function main() {
  try {
    // const m = {
    //   id: "963342eb-58e0-4ad6-a31e-54c0f2a51ce7",
    //   user: "584f459d-5fdc-4955-b0ed-63b8a59dca1a",
    //   rating: 4,
    //   movie: "93cc1e8-4a0e-4bcc-8b5a-5a9bfe173c7f",
    //   createdAt: "2023-01-11 14:19:57.086 +0530",
    //   updatedAt: "2023-01-11 14:19:57.086 +0530",
    //   createdByUser: "82bbfc0f-4ff1-4488-bed3-624e53e1053d",
    // };

    // const users = await getAllUsers();

    const movieId = "c93cc1e8-4a0e-4bcc-8b5a-5a9bfe173c7f";
    const movieDetails = await getMovieInfo({
      movieId,
    });
    const movieRatings = await getAllRating({
      movieId,
    });

    const movie = makeJSONFromInstance(movieDetails);

    let sum = 0;
    for (const r of movieRatings) {
      sum += r.rating;
    }
    let average = sum / movieRatings.length;

    movie.averageRating = average;
    console.log(movie);
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

main();

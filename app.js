// const { findUser, findMovieInfo, findRating } = require("./db");

// const user = findUser( {
//     username : "Siva"
// })

// const movie = findMovieInfo({
//     movieId : "1"
// })

// console.log(movie )

// const ratings = findRating({
//     movieId : "1673333490067"
// })

// console.log("OVERALL RATINGS", ratings)

require("dotenv").config();

const db = require("./models/index");

async function main() {
  db.sequelize
    .sync()
    .then(() => {
      console.log("synced..");
    })
    .catch((err) => {
      console.log("Failed to sync db" + err.message);
    });
}

main();

const { users, movies, ratings } = require("./models")

const findUser = ({username, userId}) => {
    return users.find((u) => u.username === username || u.id === userId)
}

const findMovieInfo = ({movieId}) => {
    const movie = movies.find((m) => m.id === movieId ) 
    if(movie) {
        const user = findUser({userId : movie.createdByUser})
        movie.createdByUser = user
    }

    movie.rating = findRating({movieId})
    return movie
}



const findRating = ({ movieId}) => {
    const rating = ratings.filter((r) =>  r.movie === movieId).map((movie) => { return movie.rating })
    console.log("RATING", rating)
    let overallRating = 0; 
    console.log( "Rating length", rating.length)
    for(i=0; i< rating.length; i++){
         overallRating = overallRating + rating[i] 
    }
    const AvgRating =   overallRating / rating.length
    return parseFloat(AvgRating).toFixed(1)

}


module.exports = {
    findUser,
    findMovieInfo,
    findRating
}

    
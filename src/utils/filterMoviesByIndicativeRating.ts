import { Movie } from "../interfaces/movie"
import User from "../interfaces/user"

function filterMoviesByIndicativeRating(movies: Movie[], user: User): Movie[] {
    return movies.filter((movie) => {
        return movie.indicativeRating <= user.age
    })
}

export default filterMoviesByIndicativeRating;
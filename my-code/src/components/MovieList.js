import React, {PureComponent} from 'react'
import Movie from './Movie'

class MovieList extends PureComponent {

    render() {
        let movies = this.props.movies.map((movie)=>{
            const props = {
                title: movie.Title,
                year: movie.Year,
                poster: movie.Poster,
                key: movie.imdbID
            }
            return <Movie {...props} />
        })
        return(
            <div>
                Movie container
                {movies}
            </div>
        )
    }
}

export default MovieList


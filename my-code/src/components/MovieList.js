import React, {PureComponent} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
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
                {movies}
            </div>
        )
    }
}

MovieList.propTyps = {
    movies: PropTypes.array
}
export default MovieList


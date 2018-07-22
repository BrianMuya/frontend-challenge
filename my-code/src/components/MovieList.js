import React, {PureComponent} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { spacerTopSmall } from '../styles/main'
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
            <MovieGrid>
                {movies}
            </MovieGrid>
        )
    }
}

MovieList.propTyps = {
    movies: PropTypes.array
}

const MovieGrid = styled.div`{
    ${spacerTopSmall}
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto;
    justify-items: center;
    grid-row-gap: 3rem;
}`
export default MovieList


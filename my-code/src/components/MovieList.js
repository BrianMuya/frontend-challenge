import React, {PureComponent} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { spacerTopSmall, primaryWhite } from '../styles/main'
import Movie from './Movie'
import Loader from '../components/Loader'

class MovieList extends PureComponent {

    render() {
        let movies = this.props.movies.map((movie)=>{
            const props = {
                title: movie.Title,
                year: movie.Year,
                poster: movie.Poster,
                id: movie.imdbID,
                key: movie.imdbID
            }
            return <Movie {...props} />
        })
        let content = null
        let grid = <MovieGrid> {movies} </MovieGrid>
        let error = <ErrorMessage>{ this.props.error ? this.props.errorMessage: null }</ErrorMessage>
        this.props.loading ? content = <Loader /> : content = grid
        this.props.error ? content = error : null

        return(
          <div>
              {content}
          </div> 
        )
    }
}

MovieList.propTyps = {
    movies: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

const MovieGrid = styled.div`{
    ${spacerTopSmall}
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto;
    justify-items: center;
    grid-row-gap: 3rem;
}`

const ErrorMessage = styled.h1`{
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: 0.5rem;
    display: block;
    margin-top: 5rem;
    text-align: center;
    color: ${primaryWhite};
}`
export default MovieList


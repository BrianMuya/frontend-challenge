import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { midGrey, spacerTopSmall, primaryWhite } from '../styles/main'

class MoviePage extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            runtime: 'N/A',
            year: 'N/A',
            rating: 'N/A',
            title: 'N/A',
            plot: 'N/A',
            poster: null,
            searchError: null
        }
    }

    componentDidMount() {
        let movieID = this.props.match.params.movieID
        fetch(`http://www.omdbapi.com/?apikey=e8a1cf04&i=${movieID}`)
        .then(res => {
            if (res.status !== 200) {
              let message = 'There was an error retrieving this movie'
              throw message
            }
            return res.json()
        })
        .then(data => {
            if (data.Response === 'False') {
              let message = 'This movie does not exist'
              throw message
            }
            this.setState({ 
              runtime: data.Runtime,
              rating: data.Rated,
              year: data.Year,
              title: data.Title,
              plot: data.Plot,
              cast: data.Actors,
              genre: data.Genre,
              director: data.Director,
              poster: data.Poster,
              searchError: null
            })
        }).catch((err) => {
            this.setState({ searchError: err })
        })
    }

    render(){
        let { runtime, year, rating, title, plot, poster, cast, genre, director} = this.state
        poster === 'N/A' ? poster = 'http://via.placeholder.com/1024x1024': null
        return( 
            <StyledContainer>
              <StyledLink to='/'>
                <i className="fa fa-long-arrow-left" style={{fontSize: '36px'}}></i>
              </StyledLink>
              <MovieDetails>
                {runtime} - {year} - {rating} 
              </MovieDetails>
              <Title>
                {title}
                <Plot>
                  <Heading>
                      Plot
                  </Heading>
                {plot}
              </Plot>
              </Title>
              <PosterContainer>
                  <Poster src={poster} alt='poster'/>
              </PosterContainer>
              <Text>
                  <Heading>
                      Cast
                  </Heading>
                {cast}
              </Text>
              <Text>
                  <Heading>
                      Genre
                  </Heading>
                {genre}
              </Text>
              <Text>
                  <Heading>
                      Director
                  </Heading>
                {director}
              </Text>
            </StyledContainer>
        )
    }
}

const StyledContainer = styled.div`{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 1rem;
    margin-top: 3rem;
}`

const MovieDetails = styled.div`{
    color: ${midGrey};
    grid-column: 1 / 4; 
    font-weight: 600;
    font-size: 2rem;
    @media (max-width: 500px) {
        margin-bottom: 5rem;   
    }
}`

const PosterContainer = styled.div`{
    grid-row: 2 / 5;
    grid-column: 4 / -1;
    @media (max-width: 500px) {
        grid-row: 3 / 6;
        grid-column: 1 / -1;
    }
}`

const Poster = styled.img`{
    background-size: cover;
    height: 100%;
    width: 90%;
    border-radius: 10px;
    display: block;
    margin: 0 auto;
}`

const Title = styled.h1`{
    font-size: 6rem;
    font-weight: 900;
    grid-column: 1 / 4; 
    letter-spacing: 0.5rem;
    color: ${primaryWhite};
    @media (max-width: 500px) {
        grid-column: 1 / -1; 
    }
}`

const Text = styled.div`{
    font-size: 2rem;
    color: ${primaryWhite};
    font-weight: 100;
    @media (max-width: 500px) {
        grid-column: 1 / -1;  
    }
}`

const Plot = styled.div`{
    font-size: 1.5rem;
    color: ${primaryWhite};
    grid-column: 1 / 4;
    ${spacerTopSmall};
    font-weight: 100;
}`

const Heading = styled.span`{
    display: block;
    color: ${midGrey};
    font-weight: 600;
    margin-bottom: 1rem;
}`

const StyledLink = styled(Link)`{
    text-decoration: none;
    color: ${midGrey};
    margin-bottom: 5rem;
}`
export default MoviePage
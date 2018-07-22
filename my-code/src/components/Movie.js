import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { grey, primaryWhite } from '../styles/main'

class Movie extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            overlayEnabled: false
        }
    }

    handleHover = () => {
        this.setState({ overlayEnabled: !this.state.overlayEnabled })
    }

    render(){
        let { title, year, poster, id } = this.props
        // I would look for a better way to handle this other than a string literal
        poster === 'N/A' ? poster = 'http://via.placeholder.com/150x180' : null
        return(
          <MovieContainer 
            style={{backgroundImage: `url(${poster})`}}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
          >
            <StyledLink to={`/${id}`}>
              {this.state.overlayEnabled 
                ? <Overlay>
                    <OverlayDescription>
                      {title}
                      <OverlayYear>
                        {year}
                      </OverlayYear>
                    </OverlayDescription>
                  </Overlay>
                : null}
            </StyledLink>
          </MovieContainer>
        )
    }
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}
const MovieContainer = styled.div`{
    border-radius: 5px;
    background-size: cover;
    background-position: top;
    width: 15rem;
    height: 18rem;
    transition: all .5s;
    &:hover{
        cursor: pointer;
    }
}`

const Overlay = styled.div`{
    height: 100%;
    width: 100%;
    background-color: ${grey};
    opacity: 0.7;
}`

const OverlayDescription = styled.span`{
    position: relative;
    font-size: 1.5rem;
    font-weight: 400;
    display: block;
    top: 65%;
    left: 5%;
}`

const OverlayYear = styled.span`{
    display: block;
    font-size: 1.3rem;
    padding-top: 0.5rem;
    top: 90%;
    font-weight: 100;
}`

const StyledLink = styled(Link)`{
    text-decoration: none;
    color: ${primaryWhite};
}`

export default Movie
import React, { PureComponent } from 'react'
import Search from '../components/Search'
import MovieList from '../components/MovieList'

class Home extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            movieList: [],
            searchError: null,
            error: false,
            fetchingMovies: false
        }
    }

    fetchMovies = (searchTerm) => {
        fetch(`http://www.omdbapi.com/?apikey=e8a1cf04&s=${searchTerm}`)
        .then(res => {
            if (res.status !== 200) {
              let message = 'Search error'
              throw message
            }
            return res.json()
        })
        .then(data => {
            if (data.Response === 'False') {
              let message = 'Please try again with a more specific search term'
              throw message
            }
            this.setState({ 
              movieList: data.Search,
              searchError: null,
              error: false,
              fetchingMovies: false
            })
        }).catch((err) => {
            this.setState({ 
                searchError: err,
                error: true,
                fetchingMovies: false
            })
        })
    }

    handleSearchSubmited = (e) => {
        // I understand putting the api key on the client side like this is not the norm
        // I would normaly import this from an external file that I would then git ignore
        let searchTerm = e.target.value
        this.setState({ fetchingMovies: true}, () => {
            this.fetchMovies(searchTerm)
        })
    }

    render(){
        return(
            <div>
              <Search handleOnChange={this.handleSearchSubmited} />
              <MovieList 
                error={this.state.error} 
                errorMessage={this.state.searchError} 
                loading={this.state.fetchingMovies} 
                movies={this.state.movieList} />
            </div>
        )
    }
}

export default Home
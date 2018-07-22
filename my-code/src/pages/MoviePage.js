import React, { PureComponent } from 'react'

class MoviePage extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            movie: null,
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
              movie: data,
              searchError: null
            })
        }).catch((err) => {
            this.setState({ searchError: err })
        })
    }

    render(){
        return(
            <div>
                Movie Page
                {this.props.match.params.movieID}
            </div>
        )
    }
}

export default MoviePage
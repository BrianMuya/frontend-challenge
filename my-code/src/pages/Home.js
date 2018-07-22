import React, { PureComponent } from 'react'
import Search from '../components/Search'

class Home extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            movieList: [],
            searchError: ''
        }
    }
    handleSearchSubmited = (e) => {
        // I understand putting the api key on the client side like this is not the norm
        // I would normaly import this from an external file that I would then git ignore
        let searchTerm = e.target.value
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
              this.setState({movieList: data.Search})
          }).catch((err) => {
              this.setState({searchError: err})
          })
    }

    render(){
        return(
            <div>
              <Search handleOnChange={this.handleSearchSubmited} />
              Home Page
            </div>
        )
    }
}

export default Home
import React, { PureComponent } from 'react'
import { injectGlobal } from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import MoviePage from './pages/MoviePage'

import { primaryColor, primaryWhite } from './styles/main'


class App extends PureComponent {
  render() {
    return (
      <Router>
        <div>
          <Route path='/' exact render={ () => <Home /> } />
          <Route path='/movie' render={ () => <MoviePage /> } />
        </div>
      </Router>
    )
  }
}

injectGlobal`
  @import url(https://fonts.googleapis.com/css?family=Roboto:100,400,600,900);

  body {
    padding: 0;
    margin: 0;
    border-sizing: border-box;
    background-color: ${primaryColor};
    font-family: Roboto, sans-serif;
    color: ${primaryWhite};
  }

  html {
      font-size: 62.5%;
      @media (max-width: 600px) {
        font-size: 45%;
      }
  }
`

export default App;

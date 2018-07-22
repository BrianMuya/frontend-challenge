import React, { PureComponent } from 'react'
import { injectGlobal } from 'styled-components'

import { primaryColor, primaryWhite } from './styles/main'


class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

injectGlobal`
  @import url(https://fonts.googleapis.com/css?family=Roboto:400,600,900);

  body {
    padding: 0;
    margin: 0;
    border-sizing: border-box;
    background-color: ${primaryColor};
    font-family: Roboto, sans-serif;
    color: ${primaryWhite};
  }
`

export default App;

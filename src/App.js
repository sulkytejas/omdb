import React, { Component } from 'react';

import Posts from './Components/Posts/';
import Header from './Components/Header/';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Posts/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import axios from 'axios';

class App extends React.Component {
  state = {  }

  componentDidMount() {
    // check for errors
  }

  render() {
    return (
      <div>
        <NavBar />
        <Container>

          <Home />

        </Container>
      </div>
    )
  }
}

export default App;

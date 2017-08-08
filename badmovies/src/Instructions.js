import React, { Component } from 'react';
import {Link} from 'react-router';
import './Instructions.css';

class Instructions extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          You will be given a movie description, but definitely not one you would see on IMDB. It is your job to guess the title of that movie before time runs out. If you guess incorrectly three times - game over!
        </p>
        <Link className="links" to='/play'>Ready to play</Link>
      </div>
    );
  }
}

export default Instructions;

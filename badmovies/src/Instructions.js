import React, { Component } from 'react';
import {Link} from 'react-router';
import './Instructions.css';

class Instructions extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          You will be given a terrible description of a movie. It is your job to guess the title of that movie (before time runs out??)
        </p>
        <Link to='/play'>Ready to play</Link>
      </div>
    );
  }
}

export default Instructions;

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
       {/* <AddMovie /> */}
      </div>
    );
  }
}

/* class AddMovie extends Component {
  render() {
    return (
      <div>
        <h3>Add Your Own Movie!</h3>
        <p>If you have a movie that you want to add to the game, enter your description and title here</p>
        <form className="addMovie">
          <span>Movie Description: <input type="text"/></span><br/>
          <span>Movie Title: <input type="text"/></span><br/>
          <button type="submit">Submit Your Movie</button>
        </form>
      </div>
    )
  }
}
*/
export default Instructions;

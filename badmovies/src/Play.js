import React, { Component } from 'react';
import { Link } from 'react-router';
import './Instructions.css';

class Play extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      time: 60,
      wrongs: 0
    }
    this.guess = this.guess.bind(this)
    this.generateMovie = this.generateMovie.bind(this)
    this.restart = this.restart.bind(this)
  }

  generateMovie () {
    const movies = this.props.route.movies;
    const num = Math.floor(Math.random()*movies.length);
    this.setState({
      id: num
    })
  }

  guess(e) {
    const movies = this.props.route.movies;
    const correctTitle = movies[this.state.id].title.toLowerCase();
    const userGuess = this.refs.userGuess.value.toLowerCase();
    e.preventDefault();
    if (userGuess === correctTitle) {
      console.log('yay');
      this.generateMovie();
    } else {
      console.log('try again');
      this.setState({
        wrongs: this.state.wrongs +1
      })
      if (this.state.wrongs ===3) {
        console.log('game over')
      }
      console.log(this.state.wrongs)
    }
    // console.log(userGuess)
  }

  render() {
    const movies = this.props.route.movies;


    return (
      <div className="App">
        <p className="App-intro">
          This is where you play
        </p>
        <button onClick={this.generateMovie}>Start</button>
        <h3>{movies[this.state.id].description}</h3>
        <form onSubmit={(e)=>{this.guess(e); this.refs.userGuess.value = ''}}>
          <input ref='userGuess' type='text' placeholder='enter a movie'></input>
          <button type='submit' disabled={this.state.wrongs > 2 ? true : false}>Guess</button>
        </form>
        <Link to='/instructions'>How do you play?</Link>
      </div>
    );
  }
}

export default Play;

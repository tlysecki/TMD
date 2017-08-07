import React, { Component } from 'react';
import { Link } from 'react-router';
import './Instructions.css';

class Play extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      time: 60,
      wrongs: 0,
      result: "",
      score: 0
    }
    this.guess = this.guess.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.generateMovie = this.generateMovie.bind(this)

  }



  generateMovie() {
    const movies = this.props.route.movies;
    const num = Math.floor(Math.random() * movies.length);
    this.setState({
      id: num
    })
    this.startTimer();
  }

  startTimer(){
    setTimeout(() => {
      if (this.state.time > 0) {
        this.setState({
          time: this.state.time - 1
        })
      }
    }, 1000);
  }

  newGame() {
    this.setState({
      time: 60,
      wrongs: 0
    })
  }

  guess(e) {
    const movies = this.props.route.movies;
    const correctTitle = movies[this.state.id].title.toLowerCase();
    const userGuess = this.refs.userGuess.value.toLowerCase();
    e.preventDefault();
    if (userGuess === correctTitle) {
      console.log('yay');
      this.setState({
        score: this.state.score + 1
      })
      this.generateMovie();
    } else {
      console.log('try again');
      this.setState({
        wrongs: this.state.wrongs + 1
      })
      if (this.state.wrongs === 2) {
        console.log('game over')
        this.setState({
          result: 'You lose!'
        })
      }
      console.log(this.state.wrongs)
    }
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
        <form onSubmit={(e) => { this.guess(e); this.refs.userGuess.value = '' }}>
          <input ref='userGuess' type='text' placeholder='enter a movie'></input>
          <button type='submit' disabled={this.state.wrongs > 2 ? true : false}>Guess</button>
        </form>
        <div>
          <p>Score: {this.state.score}</p>
          <Timer time={this.state.time} />
        </div>
        <button onClick={this.newGame}>Start a new game</button>
        <p style={{ display: this.state.result == '' ? 'none' : 'block' }}>{this.state.result} The correct answer was: {movies[this.state.id].title}</p>
        <Link to='/instructions'>How do you play?</Link>
      </div>
    );
  }
}

class Timer extends Component {

  render() {
    return (
      <p>{this.props.time} seconds</p>
    )
  }
}


export default Play;

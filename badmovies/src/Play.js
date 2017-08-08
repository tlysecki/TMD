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
      score: 0,
      playing: false
    }
    this.guess = this.guess.bind(this)
    this.newGame = this.newGame.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.generateMovie = this.generateMovie.bind(this)
    this.startGame = this.startGame.bind(this)
    this.playing = this.playing.bind(this)
    this.gameStop = this.gameStop.bind(this)
  }

  startGame() {
    this.generateMovie();
    this.startTimer();
    this.playing();
  }

  playing() {
    this.setState({
      playing: true
    })
  }

  generateMovie() {
    const movies = this.props.route.movies;
    const num = Math.floor(Math.random() * movies.length);
    this.setState({
      id: num
    })
  }

  startTimer() {
    this.counterInterval = setInterval(() => {
      if (this.state.time === 0) {
        this.gameStop();
        this.setState({
          result: "Time's up!"
        })
        return;
      }
      if (this.state.time > 0) {
        this.setState({
          time: this.state.time - 1
        })
      }
    }, 1000);
  }

  gameStop() {
    clearInterval(this.counterInterval);
    this.setState({
      playing: false,
    })
  }

  newGame() {
    this.setState({
      time: 60,
      wrongs: 0,
      playing: true,
      result: ''
    })
    this.startGame();
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
        this.gameStop();
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
        <button onClick={this.startGame} disabled={this.state.playing ? true : false}>Start</button>
        <h3 style={{ visibility: this.state.playing ? 'visible' : 'hidden' }}>{movies[this.state.id].description}</h3>
        <form onSubmit={(e) => { this.guess(e); this.refs.userGuess.value = '' }}>
          <input ref='userGuess' type='text' placeholder='enter a movie'></input>
          <button type='submit' disabled={this.state.playing ? false : true}>Guess</button>
        </form>
        <div>
          <p>Score: {this.state.score}</p>
          <p>Wrong Answers: {this.state.wrongs}</p>
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

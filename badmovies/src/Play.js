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
      playing: false,
      done: [],
    }
    this.guess = this.guess.bind(this)
    this.newGame = this.newGame.bind(this)
    this.startTimer = this.startTimer.bind(this)
    this.generateMovie = this.generateMovie.bind(this)
    this.startGame = this.startGame.bind(this)
    this.resetGame = this.resetGame.bind(this)
    this.playing = this.playing.bind(this)
    this.stopGame = this.stopGame.bind(this)
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
    let newArray = Array.from(this.state.done);
    newArray.push(num)
    if (newArray > 0) {
      for (let i = 0; i < newArray.length; i++) {
        if (num === newArray[i]) {
          this.generateMovie();
        } else { break }
      }
    }
    this.setState({
      id: num,
      done: newArray
    })
  }

  startTimer() {
    this.counterInterval = setInterval(() => {
      if (this.state.time === 0) {
        this.stopGame();
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

  stopGame() {
    clearInterval(this.counterInterval);
    this.setState({
      playing: false,
      done: []
    })
  }

  newGame() {
    clearInterval(this.counterInterval);
    this.setState({
      time: 60,
      wrongs: 0,
      playing: true,
      result: '',
      done: []
    })
    this.startGame();
  }

  resetGame() {
    clearInterval(this.counterInterval);
    this.setState({
      time: 60,
      wrongs: 0,
      score: 0,
      playing: false,
      result: '',
      audioSrc: '',
      done: []
    })
  }

  guess(e) {
    const movies = this.props.route.movies;
    const correctTitle = movies[this.state.id].title.toLowerCase();
    const userGuess = this.refs.userGuess.value.toLowerCase();
    e.preventDefault();
    if (userGuess === correctTitle) {
      this.setState({
        score: this.state.score + 1,
        audioSrc: '/right.mp3'
      }, () => {
        this.refs.sfx.play()
      })
      this.generateMovie();
    } else {
      this.setState({
        wrongs: this.state.wrongs + 1,
        audioSrc: '/wrong.mp3'
      }, () => {
        this.refs.sfx.play()
      })
      if (this.state.wrongs === 2) {
        this.stopGame();
        this.setState({
          result: 'You lose!',
          audioSrc: '/threewrong.mp3'
        }, () => {
          this.refs.sfx.play()
        })
      }
    }
  }

  render() {
    const movies = this.props.route.movies;


    return (
      <div className="Play">
        <button onClick={this.newGame}>Start a new game</button>
        <button onClick={this.resetGame} disabled={this.state.playing ? false : true}>Reset</button>
        <div className="descriptionBox" style={{ visibility: this.state.playing ? 'visible' : 'hidden' }}>
          <h3 className="description">{movies[this.state.id].description}</h3>
        </div>
        <form onSubmit={(e) => { this.guess(e); this.refs.userGuess.value = '' }}>
          <input ref='userGuess' type='text' placeholder='enter a movie'></input>
          <button type='submit' disabled={this.state.playing ? false : true}>Guess</button>
          <audio ref='sfx' src={this.state.audioSrc} />
        </form>
        <div>
          <Timer playing={this.state.playing} time={this.state.time} />
          <p>Score: {this.state.score}</p>
          <p className="timer" style={{ visibility: !this.state.result ? 'hidden' : 'visible' }}>{this.state.result} The correct answer was: <br /><br /><span className="correctTitle">{movies[this.state.id].title}</span></p>
          <span className="wrong" style={{ visibility: this.state.wrongs > 0 ? 'visible' : 'hidden' }}>X</span>
          <span className="wrong" style={{ visibility: this.state.wrongs > 1 ? 'visible' : 'hidden' }}>X</span>
          <span className="wrong" style={{ visibility: this.state.wrongs > 2 ? 'visible' : 'hidden' }}>X</span>

        </div>
        <div className="howTo">
          <Link onClick={this.stopGame} className="links" to='/instructions'>How do you play?</Link>
        </div>
      </div>
    );
  }
}

class Timer extends Component {

  render() {
    return (
      <p className={this.props.time > 5 ? "timer" : "runningOut"} style={{ visibility: this.props.playing ? 'visible' : 'hidden' }}>{this.props.time} {this.props.time === 1 ? "second" : "seconds"}</p>
    )
  }
}


export default Play;

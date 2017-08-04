import React, { Component } from 'react';
// import {Link} from 'react-router';
import './Instructions.css';

class Welcome extends Component {
  render() {
    return (

      <div className="App">
          <h2>Terrible Movie Descriptions</h2>
          {this.props.children}
      </div>
    );
  }
}

export default Welcome;

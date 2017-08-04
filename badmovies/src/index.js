import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import './index.css';
import Welcome from './Welcome';
import Instructions from './Instructions';
import Play from './Play';
import registerServiceWorker from './registerServiceWorker';

function Movie(title, description, id) {
   this.title = title;
   this.description = description;
   this.id = id
}

const movies = [
   new Movie('Toy Story', 'A kid\'s imaginary friends play behind his back'),
   new Movie('Jurassic Park', 'Old lizards cope with shock from time travel'),
   new Movie('Hunger Games', 'Older sister ruins younger sister\'s chance to be on a nationally televised game show'),
   new Movie('The Matrix', 'A group of friends decides to spend less time online'),
   new Movie('Up', 'An elderly man abducts a young, overweight boy to replace his dead wife'),
]

ReactDOM.render(
   <Router history={browserHistory}>
      <Route path='/' component={Welcome}>
         <IndexRoute component={Instructions} />
         <Route path='instructions' component={Instructions} />
         <Route path='play' component={Play} movies={movies}/>
      </Route>
   </Router>
   , document.getElementById('root'));
registerServiceWorker();

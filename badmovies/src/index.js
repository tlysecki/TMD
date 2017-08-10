import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './index.css';
import Welcome from './Welcome';
import Instructions from './Instructions';
import Play from './Play';
import registerServiceWorker from './registerServiceWorker';

function Movie(title, description) {
   this.title = title;
   this.description = description;
}

const movies = [
   new Movie('Toy Story', 'A kid\'s imaginary friends play behind his back.'),
   new Movie('Jurassic Park', 'Old lizards cope with shock from time travel.'),
   new Movie('Hunger Games', 'Older sister ruins younger sister\'s chance to be on a nationally televised game show.'),
   new Movie('The Matrix', 'A group of friends decides to spend less time online.'),
   new Movie('Up', 'An elderly man abducts a young, overweight boy to replace his dead wife.'),
   new Movie('Beauty and the Beast', 'Stockholm Syndrome works.'),
   new Movie('Home Alone', 'At Christmas, a lone-wolf hero no one expected defends a building from invading terrorists.'),
   new Movie('Twilight', 'Grumpy teenage girl decides whether to love a walking corpse or a dog over several years.'),
   new Movie('Lord of the Rings', 'Short man and friends spend 9 hours trying to return a piece of jewelry.'),
   new Movie('Titanic', 'Everybody tries the ice bucket challenge.'),
   new Movie('Star Wars: The Empire Strikes Back', 'A talking frog convinces a son to kill his dad.'),
   new Movie('Snow White and the Seven Dwarfs', 'A guy kisses a lifeless body in the forest while seven other guys watch.'),
   new Movie('The Shining', 'A family\'s first Airbnb experience goes horribly wrong.'),
   new Movie('Inception', 'A series of naps.'),
   new Movie('Nightmare on Elm Street', 'A wise-cracking boiler technician teaches high school students to believe in their dreams.'),
   new Movie('Mrs. Doubtfire', 'A divorced man discovers he is trans and loses custody of his kids.'),
   new Movie('Spiderman', 'A young man forcibly binds others and photographs them for money.'),
   new Movie('Elf', 'Immigrant adoptee is repatriated to his country of birth and experiences culture shock and prejudice.'),
   new Movie('Aladdin', 'A beautiful princess gets catfished.'),
   new Movie('Cool Runnings', 'People who are great at one sport are pretty okay at another sport.'),
   new Movie('American Psycho', 'A metrosexual yuppie gets upset that his heinous crimes don\'t get any recognition.'),
   new Movie('Apollo 13', 'A group of guys goes on a long trip but their vehicle breaks down and they have to turn back.'),
   new Movie('Fight Club', 'A guy is two guys.'),
   new Movie('The Wizard of Oz', 'Drifters with low self-esteem get lost and meet a televangelist who turns out to be a fraud.'),
   new Movie('Avatar', 'Pocahontas with blue people on another planet.'),
   new Movie('The Lion King', 'An uncle kills a child\'s father, so a pig and a big rat help him get revenge.'),
   new Movie('The Chronicles of Narnia', 'A kid comes out of the closet.'),
   new Movie('Back to the Future', 'A teen boy is lured by a creepy old man into a game of crime, terrorism, and incest.'),
   new Movie('Skyfall', 'An alcoholic orphan and his boss burn down his childhood home.'),
   new Movie('School of Rock', 'Overweight loser exploits musically gifted kids for personal gain.'),
]

ReactDOM.render(
   <Router history={browserHistory}>
      <Route path='/' component={Welcome}>
         <IndexRoute component={Instructions} />
         <Route path='instructions' component={Instructions} />
         <Route path='play' component={Play} movies={movies} />
      </Route>
   </Router>
   , document.getElementById('root'));
registerServiceWorker();

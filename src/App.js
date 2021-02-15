import React from 'react';
import About from './pages/About';
import Connexion from './pages/Connexion.js';
import { Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact.js';
import Donation from './pages/Donation';
import VideoPage from './pages/VideoPage';
import Home from './pages/Home';

//  <Route path='/donation' component={Donation}/>

function App() {
  return (

    <div>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/donation' component={Donation}/>
        <Route path='/connexion' component={Connexion}/>
        <Route path='/video/:title' component={VideoPage}/>
      </Switch>

    </div>
  );
}

export default App;

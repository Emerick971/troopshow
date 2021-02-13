
import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Partners from './components/Partners';
import About from './pages/About';
import Connexion from './components/Connexion';
import ListComingShows from './components/ListComingShows';
import { Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Donation from './pages/Donation';
import VideoPage from './pages/VideoPage';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/donation' component={Donation}/>
        <Route path='/conexion' component={Conexion}/>
        <Route path='/video:slug' component={VideoPage}/>
      </Switch>
    </div>
  );
}

export default App;

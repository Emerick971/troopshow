
import React from 'react';

import './App.css';
import Footer from './components/Footer';
import Partners from './components/Partners';
import About from './pages/About';
import Connexion from './components/Connexion';


import ListComingShows from './components/ListComingShows';



function App() {
  return (
    <div className="App">

        <Connexion/>

      <ListComingShows />

    </div>
  );
}

export default App;

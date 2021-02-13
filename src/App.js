import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Conexion from './pages/Conexion';
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

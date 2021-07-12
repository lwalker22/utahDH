import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Footer from './components/shared/Footer'
import Home from './components/pages/Home';
import About from './components/pages/About';

import './App.module.css';

export default function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
        <Footer/>
    </Router>
  );
}
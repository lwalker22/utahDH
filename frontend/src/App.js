import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';

export default function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
        {/* <Footer/> */}
    </Router>
  );
}
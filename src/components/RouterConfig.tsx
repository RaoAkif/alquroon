// import Header from './Header';
import Home from '../Pages/Home';
import Admissions from '../Pages/Admissions';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Downloads from '../Pages/Downloads'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const RouterConfig = () => (
  <div>
    <Router>
      <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Admissions">Admissions</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
            <li>
              <Link to="/Downloads">Downloads</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Admissions">
            <Contact />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Downloads">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
    {/* <Header /> */}
  </div>
);

export default RouterConfig;

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import About from './components/About/About';
import AllProjects from './components/AllProjects/AllProjects';
import Contact from './components/Contact/Contact';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <div className="row">
      <Router>
        <div className="col-md-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-md-9">
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/projects">
              <AllProjects></AllProjects>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

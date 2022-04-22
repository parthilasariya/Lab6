import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Link, Routes}  from "react-router-dom";
import React, {Component, Home, NewRoute} from "react";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <ul>
      <li>
      <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/contact">Contact</Link>
      </li>
      <li>
      <Link to="/about">About</Link>
      </li>

      <li>
      <Link to="/newroute">New Route</Link>
      </li>
      </ul>
      <Routes>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
        <Route path="/student/:studentname/:studentno?"
      component={Student} />

      </Routes>
      

      </div>
      </BrowserRouter>      
  );
  }
}
  
export default App;

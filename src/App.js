import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/routes/Home';
import About from './components/routes/About';
import Page404 from './components/routes/Page404';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/topics">Topics</Link>
                </li>
              </ul>

              <hr />

              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route component={Page404} />
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Portfolio from './Components/Portfolio/Portfolio';
import Client from './Components/Client/Client';
import Contact from './Components/Contact/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="nav">
          <Navbar />
        </div>
        <div className="myBody">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/client" component={Client} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="*" component={() => <h1 style={{ marginLeft: '10%' }}>404 Not Found</h1>} />
          </Switch></div>
      </div>
    </Router>
  );
}

export default App;

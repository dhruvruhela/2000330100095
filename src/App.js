import logo from './logo.svg';
import './App.css';
// App.js

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllTrainsPage from './pages/AllTrainsPage';
import SingleTrainPage from './pages/SingleTrainPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllTrainsPage} />
        <Route path="/train/:id" component={SingleTrainPage} />
      </Switch>
    </Router>
  );
}

export default App;
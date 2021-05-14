import React from 'react';
// import './App.css';
import {Router} from '@reach/router';
import Home from './components/Home';
import NumberOrWord from './components/NumberOrWord';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <NumberOrWord path="/:NW"/>
        <NumberOrWord path="/:NW/:textColor"/>
        <NumberOrWord path="/:NW/:textColor/:BGColor"/>
      </Router>
    </div>
  );
}

export default App;

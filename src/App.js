import React from 'react';
import Scoreboard from './components/Scoreboard'
import "./App.css"

function App() {
  return (
    <div className="app">
        <Scoreboard/>
        <div className="gameboard">
        </div>
    </div>
  );
}

export default App;

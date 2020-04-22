import React from 'react';

const Scoreboard = (props) => {
    return ( 
        <div className="scoreboard">
          <div className="board-left">
            <p>Rock</p>
            <p>Paper</p>
            <p>Scissors</p>
          </div>
          <div className="board-right">
            <p>score</p>
            <span>{props.score}</span>
          </div>
        </div>
     );
}
 
export default Scoreboard;
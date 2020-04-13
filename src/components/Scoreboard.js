import React from 'react';

const Scoreboard = () => {
    return ( 
        <div className="scoreboard">
          <div className="board-left">
            <p>Rock</p>
            <p>Paper</p>
            <p>Scissors</p>
          </div>
          <div className="board-right">
            <p>score</p>
            <span>21</span>
          </div>
        </div>
     );
}
 
export default Scoreboard;
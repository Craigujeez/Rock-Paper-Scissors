import React from 'react';
import {useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import Scoreboard from '../components/Scoreboard';

const Step1 = () => {
    const dispatch = useDispatch();
    return ( 
        <>
            <Scoreboard/>
            <div className="gameboard">
                <div className="gboard-top">
                <Link to= "/step2">
                    <div 
                        className="paper" 
                        style={{width:'140px', height:'140px'}}
                        onClick={()=> dispatch({type: 'LOAD_USER_SELECTION', option: 'paper'})}
                    >
                    </div>
                </Link>
                <Link to='/step2'>
                    <div 
                        className="scissors" 
                        style={{width:'140px', height:'140px'}}
                        onClick={()=> dispatch({type: 'LOAD_USER_SELECTION', option: 'scissors'})}
                    >
                    </div>
                </Link>
                </div>
                <div className="gboard-bottom">
                    <Link to='/step2'>
                        <div 
                            className="rock" 
                            style={{width:'140px', height:'140px'}}
                            onClick={()=> dispatch({type: 'LOAD_USER_SELECTION', option: 'rock'})}
                        >
                        </div>
                    </Link>
                </div>
            </div>
        </>
     );
}
 
export default Step1;
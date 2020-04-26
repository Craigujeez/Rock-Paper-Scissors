import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import Scoreboard from '../components/Scoreboard';

const Step1 = () => {
    const dispatch = useDispatch();
    const data = useSelector( state =>  state.Game)
    return ( 
        <>
            <Scoreboard score={data.score}/>
            <div className="gameboard" style={{marginRight:'0px'}}>
                <div className="gboard-top">
                <Link to= "/step2">
                    <div 
                        className="paper" 
                        id="paper" 
                        onClick={()=> dispatch({type: 'LOAD_USER_SELECTION', option: 'paper'})}
                    >
                    </div>
                </Link>
                <Link to='/step2'>
                    <div 
                        className="scissors" 
                        id="scissors" 
                        onClick={()=> dispatch({type: 'LOAD_USER_SELECTION', option: 'scissors'})}
                    >
                    </div>
                </Link>
                </div>
                <div className="gboard-bottom">
                    <Link to='/step2'>
                        <div 
                            className="rock" 
                            id='rock'
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
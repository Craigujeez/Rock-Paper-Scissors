import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Scoreboard from '../components/Scoreboard';
import Step2 from './Step2';

const Step1 = () => {
    const [stage, setstage] = useState(1);
    const dispatch = useDispatch();
    const data = useSelector( state =>  state.Game)
    return ( 
        <>
            <Scoreboard score={data.score}/>
            {stage === 1 ? (
                <div className="gameboard" style={{marginRight:'0px'}}>
                <div className="gboard-top">
                    <div 
                        className="paper" 
                        id="paper" 
                        onClick={()=> {
                            dispatch({type: 'LOAD_USER_SELECTION', option: 'paper'})
                            setstage(2);
                        }}
                    >
                    </div>
                    <div 
                        className="scissors" 
                        id="scissors" 
                        onClick={()=> {
                            dispatch({type: 'LOAD_USER_SELECTION', option: 'scissors'})
                            setstage(2);
                        }}
                    >
                    </div>
                </div>
                <div className="gboard-bottom">
                    <div 
                        className="rock" 
                        id='rock'
                        onClick={()=> {
                            dispatch({type: 'LOAD_USER_SELECTION', option: 'rock'})
                            setstage(2);
                        }}
                    >
                    </div>
                </div>
            </div>
            ) : (
                <Step2 stage={stage} setstage={setstage}/>
            )}
            
        </>
     );
}
 
export default Step1;
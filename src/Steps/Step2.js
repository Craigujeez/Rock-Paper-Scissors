/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import Scoreboard from '../components/Scoreboard';
import '../styles/step2.css'

const Step2 = (props) => {
    const dispatch = useDispatch();

    const [step3, setstep3] = useState(false)

    const updateScore = () => {
        let score = data.score;
        switch (data.verdict) {
            case 'win':
                
                return score + 1
            case 'loss':
                return score - 1;
        
            default:
                return score;
        }
    }

    const verdict = () => {
        if(data.userSelection === 'rock'){
            if(data.aiSelection === 'paper'){
                return 'loss'
            } else if(data.aiSelection === 'scissors'){
                return 'win'
            } else if(data.aiSelection === data.userSelection){
                return 'draw'
            }
        } else if(data.userSelection === 'paper'){
            if(data.aiSelection === 'paper'){
                return 'draw'
            } else if(data.aiSelection === 'scissors'){
                return 'loss'
            } else if(data.aiSelection === 'rock'){
                return 'win'
            }
        } else if (data.userSelection === 'scissors'){
            if(data.aiSelection === 'paper'){
                return 'win'
            } else if(data.aiSelection === 'scissors'){
                return 'draw'
            } else if(data.aiSelection === 'rock'){
                return 'loss'
            }
        }
    };

    const redirect = () => {
        setTimeout(()=>{
            dispatch({type: 'LOAD_VERDICT', verdict: verdict()})
            setstep3(true);
        },2000)
    }

    const AiDecision = (aiOptions) => {
        const answer= () => { 
           switch (aiOptions) {
            case 1:
                
                return 'rock';
            case 2:
            
                return 'paper';
            case 3:
                
                return 'scissors';
        
            default:
                return 'paper';
            }
        }
        setTimeout(()=>{
            dispatch({type: 'LOAD_AI_DECISION' , option: answer()});
            redirect();
        },2000)
    };
    const data = useSelector(state => state.Game);

    useEffect(()=>{
        const aiOptions = Math.floor(Math.random() * 3);
       AiDecision(aiOptions)
    },[]);

    useEffect(() => {
        dispatch({type:'UPDATE_SCORE', score: updateScore()})
    }, [data.verdict])

    console.log(data.verdict, 'verdict');
    

    return ( 
        <>
            <Scoreboard score={data.score}/>
            <div className='step2'>
                <div className ='box'>
                <div>
                    <h5> &nbsp; &nbsp; &nbsp; You Picked </h5>
                    <div className={data.userSelection}></div>
                </div>
                {step3 && (
                    <div className="middle">
                        <h6>{data.verdict === 'win' ? 'You Win' : 'You Lose'}</h6>
                        <Link to='/'>
                            <button 
                                className='play-again'
                                id={data.verdict === 'win' ? 'win' : ''}
                                onClick={() => {
                                    if(data.verdict === 'loss'){
                                        dispatch({type: "RESTART_GAME"})
                                    } else dispatch({type: 'NEXT_LEVEL'})
                                }}
                            >
                                Play Again
                            </button>
                        </Link>
                    </div>
                )}
                
                <div className=''>
                    <h5> The House Picked</h5>
                    <div className={data.aiSelection}></div>
                </div>
                </div>
            </div>
            
        </>
     );
}
 
export default Step2;
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
        const check = data.score === 0 ? (0) : (score -1)
        switch (data.verdict) {
            case 'win':
                
                return score + 1
            case 'loss':
                return check;
        
            default:
                return score;
        }
    }

    const redirect = () => {
        // const Theverdict = verdict(data.userSelection , data.aiSelection)
        setTimeout(()=>{
            dispatch({type: 'LOAD_VERDICT'})
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
            case 4:
            
                return 'rock';
            case 5:
            
                return 'paper';
            case 6:
                
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
        const aiOptions = Math.floor(Math.random() * 6);
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
                    <div className="left">
                        <h5> &nbsp; &nbsp; &nbsp; You Picked </h5>
                        <div 
                            className={data.userSelection}
                            id={data.userSelection}
                        />
                    </div>
                    {step3 && (
                        <div className="middle">
                            <h6>
                                {data.verdict === 'win' && 'You Win'} 
                                {data.verdict === 'loss' && 'You Lose'}
                                {data.verdict === 'draw' && 'Draw'}
                            </h6>
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
                                    {data.verdict === 'draw' || data.verdict === 'win' ? ('Continue'): ('Play Again')}
                                </button>
                            </Link>
                        </div>
                    )}
                    
                    <div className='right'>
                        <h5> The House Picked</h5>
                        <div 
                            className={data.aiSelection || 'static'}
                            id={data.aiSelection || 'static'}
                        />
                    </div>
                </div>
                <div id='middle'>
                    {step3 && (
                        <>
                                <h6>
                                    {data.verdict === 'win' && 'You Win'} 
                                    {data.verdict === 'loss' && 'You Lose'}
                                    {data.verdict === 'draw' && 'Draw'}
                                </h6>
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
                                        {data.verdict === 'draw' || data.verdict === 'win' ? ('Continue'): ('Play Again')}
                                    </button>
                                </Link>
                        </>
                        )}
                </div>
            </div>


        <button className="rules">Rules</button>
            
        </>
     );
}
 
export default Step2;
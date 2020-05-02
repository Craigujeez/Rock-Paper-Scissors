/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import '../styles/step2.css'

const Step2 = ({stage, setstage}) => {
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
        if(stage === 2){
            AiDecision(aiOptions)
        }
    },[stage]);

    useEffect(() => {
        dispatch({type:'UPDATE_SCORE', score: updateScore()})
    }, [data.verdict])

    console.log(data.verdict, 'verdict');
    

    return ( 
            <div className='step2'>
                <div className ='box'>
                    <div className="left">
                        <h5> &nbsp; &nbsp; &nbsp; You Picked </h5>
                        <div 
                            className={data.userSelection}
                        />
                    </div>
                    {step3 && (
                        <div className="middle">
                            <h6>
                                {data.verdict === 'win' && 'You Win'} 
                                {data.verdict === 'loss' && 'You Lose'}
                                {data.verdict === 'draw' && 'Draw'}
                            </h6>
                                <button 
                                    className='play-again'
                                    onClick={() => {
                                        if(data.verdict === 'loss'){
                                            dispatch({type: "RESTART_GAME"})
                                        } else dispatch({type: 'NEXT_LEVEL'})
                                        
                                        setstage(1);
                                    }}
                                >
                                    Play Again
                                </button>
                        </div>
                    )}
                    
                    <div className='right'>
                        <h5> The House Picked</h5>
                        <div 
                            className={data.aiSelection || 'static'}
                        />
                    </div>
                </div>
                <div className='bottom'>
                    {step3 && (
                        <>
                                <h6>
                                    {data.verdict === 'win' && 'You Win'} 
                                    {data.verdict === 'loss' && 'You Lose'}
                                    {data.verdict === 'draw' && 'Draw'}
                                </h6>
                                    <button 
                                        className='play-again'
                                        onClick={() => {
                                            if(data.verdict === 'loss'){
                                                dispatch({type: "RESTART_GAME"})
                                            } else dispatch({type: 'NEXT_LEVEL'})

                                            setstage(1);
                                        }}
                                    >
                                        Play Again
                                    </button>
                        </>
                        )}
                </div>
            </div>
     );
}
 
export default Step2;
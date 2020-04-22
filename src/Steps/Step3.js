// /* eslint-disable react-hooks/exhaustive-deps */
// import React,{useEffect} from 'react';
// import {Link} from 'react-router-dom';
// import {useSelector,useDispatch} from 'react-redux';
// import Scoreboard from '../components/Scoreboard';
// import '../styles/step3.css'

// const Step3 = () => {
//     const dispatch = useDispatch();
//     const data = useSelector(state => state.Game);

    

//     const updateScore = () => {
//         let score = data.score;
//         switch (data.verdict) {
//             case 'win':
                
//                 return score + 1
//             case 'loss':
//                 return score - 1;
        
//             default:
//                 return score;
//         }
//     }

//     useEffect(() => {
//         dispatch({type: 'LOAD_VERDICT', verdict: verdict()})
//     }, [])

//     useEffect(() => {
//         dispatch({type:'UPDATE_SCORE', score: updateScore()})
//     }, [data.verdict])

//     return ( 
//         <>
//             <Scoreboard score={data.score}/>
//             <div className='step2'>
//                 <div className ='box'>
//                 <div>
//                     <h5> &nbsp; &nbsp; &nbsp; You Picked </h5>
//                     <div className={data.userSelection}></div>
//                 </div>
//                 {data.verdict && (
//                     <div className="middle">
//                         <h6>{data.verdict === 'win' ? 'You Win' : 'You Lose'}</h6>
//                         <Link to='/'>
//                             <button 
//                                 className='play-again'
//                                 id={data.verdict === 'win' ? 'win' : ''}
//                                 onClick={() => {
//                                     if(data.verdict === 'loss'){
//                                         dispatch({type: "RESTART_GAME"})
//                                     } else dispatch({type: 'NEXT_LEVEL'})
//                                 }}
//                             >
//                                 Play Again
//                             </button>
//                         </Link>
//                     </div>
//                 )}
                
//                 <div className=''>
//                     <h5> The House Picked</h5>
//                     <div className={data.aiSelection}></div>
//                 </div>
//                 </div>
//             </div>
            
//         </>
//      );
// }
 
// export default Step3;
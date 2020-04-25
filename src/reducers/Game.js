const initialState = {
        score: 0,
        userSelection: "",
        aiSelection:"",
        loading: true,
        verdict: "",
}

const verdict = (state,action) => {
    let finalDecision = '';

    if(state.userSelection === state.aiSelection){
        finalDecision = 'draw';
    } if(state.userSelection === 'rock' && state.aiSelection ==='paper'){
        finalDecision = 'loss';
    } if(state.userSelection === 'rock' && state.aiSelection === 'scissors'){
        finalDecision = 'win';
    } if(state.userSelection === 'paper' && state.aiSelection === 'scissors'){
        finalDecision = 'loss';
    } if (state.userSelection === 'paper' && state.aiSelection === 'rock'){
        finalDecision = 'win'
    } if (state.userSelection === 'scissors' && state.aiSelection === 'paper'){
        finalDecision = 'win'
    } if (state.userSelection === 'scissors' && state.aiSelection === 'rock'){
        finalDecision = 'loss'
    }

    return finalDecision;
}

const Game = (state = initialState,action) => {
    switch (action.type) {
        case 'LOAD_USER_SELECTION':
            
            return {
                ...state,
                userSelection: action.option,
            };
        case 'LOAD_AI_DECISION':
            return {
                ...state,
                aiSelection: action.option,
            };
        case 'LOAD_VERDICT':
            return{
                ...state,
                verdict: verdict(state,action),
                loading: true,
            };
        case 'UPDATE_SCORE':
        return{
            ...state,
            score: action.score,
        };     
        case 'RESTART_GAME':
            return{
                ...state,
                score: 0,
                userSelection: null,
                aiSelection:"",
                loading: false,
                verdict: "",

            }
        case 'NEXT_LEVEL':
            return{
                ...state,
                userSelection: null,
                aiSelection:"",
                loading: false,
                verdict: "",

            }
        default:
            return state;
    }
};

export default Game;

// export function LoadJudgement() {
//     return async dispatch => {
//       try {

//         dispatch({ type: LOAD_AI_DECISION });
        
//       } catch (err) {
//         // dispatch({ type: FAIL_ALL_FORUMS, error: err });
//         // cogoToast.error('An Error Occured!', '', { timeOut: 2000 });
//       }
//     };
//   }
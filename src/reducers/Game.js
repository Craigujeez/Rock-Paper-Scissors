const initialState = {
        score: 10,
        userSelection: "",
        aiSelection:"",
        loading: true,
        verdict: "",
}

const verdict = (state,action) => {
    let finalDecision = '';

    switch (state.userSelection && state.aiSelection) {
        case (state.userSelection === 'rock' && state.aiSelection === 'paper'):
            finalDecision = 'loss';
            break;
        case (state.userSelection === 'rock' && state.aiSelection === 'scissors'):
            finalDecision = 'win';
            break;
        case (state.userSelection === 'paper' && state.aiSelection === 'scissors'):
            finalDecision = 'loss';
            break;
        case (state.userSelection === 'paper' && state.aiSelection === 'rock'):
            finalDecision = 'win';
            break;
        case (state.userSelection === 'scissors' && state.aiSelection === 'rock'):
            finalDecision = 'loss';
            break;
        case (state.userSelection === 'scissors' && state.aiSelection === 'paper'):
            finalDecision = 'win';
            break;
        default:
            break;
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
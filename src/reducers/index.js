import {combineReducers} from 'redux';
import Game from '../reducers/Game'

export const appReducer = combineReducers({
    Game,
})

const rootReducer = (state,action) => {
    return appReducer(state,action);
}

export default rootReducer;
import {combineReducers} from 'redux'
import headerReducer from './header'
import dataReducer from './data'

const allReducers = combineReducers({
    header: headerReducer,
    data: dataReducer
});

export default allReducers
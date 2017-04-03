import {combineReducers} from 'redux';
import FilterReducer from './FilterReducer.js';
import ModulesReducer from './ModulesReducer.js';

const rootReducers = combineReducers({
    filters: FilterReducer,
    modules: ModulesReducer
});

export default rootReducers;
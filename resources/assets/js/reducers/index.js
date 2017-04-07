import {combineReducers} from 'redux';
import LookupReducer from './LookupReducer';
import FilterReducer from './FilterReducer';
import ModulesReducer from './ModulesReducer';

const rootReducers = combineReducers({
    lookups: LookupReducer,
    filters: FilterReducer,
    modules: ModulesReducer
});

export default rootReducers;
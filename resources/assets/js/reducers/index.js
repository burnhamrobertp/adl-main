import {combineReducers} from 'redux';
import LookupReducer from './lookupReducer';
import FilterReducer from './filterReducer';
import ModulesReducer from './modulesReducer';

const rootReducers = combineReducers({
    lookups: LookupReducer,
    filters: FilterReducer,
    modules: ModulesReducer
});

export default rootReducers;
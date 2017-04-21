import {combineReducers} from 'redux'
import LookupReducer from './lookupReducer'
import FilterReducer from './filterReducer'
import ModulesReducer from './modulesReducer'
import UserReducer from './userReducer'

const rootReducers = combineReducers({
    lookups: LookupReducer,
    filters: FilterReducer,
    modules: ModulesReducer,
    user: UserReducer,
});

export default rootReducers;
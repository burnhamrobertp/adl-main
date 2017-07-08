import {combineReducers} from 'redux'
import CreaturesReducer from './creaturesReducer'
import ItemsReducer from './itemsReducer'
import LookupReducer from './lookupReducer'
import FilterReducer from './filterReducer'
import ModulesReducer from './modulesReducer'
import UserReducer from './userReducer'

const rootReducers = combineReducers({
    creatures: CreaturesReducer,
    items: ItemsReducer,
    lookups: LookupReducer,
    filters: FilterReducer,
    modules: ModulesReducer,
    user: UserReducer,
});

export default rootReducers;
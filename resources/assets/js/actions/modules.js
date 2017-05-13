import Axios from 'Axios'
import { createAction } from 'redux-actions'

//Sets the value of modules.isFetchingList
export const setModulesFetching = createAction('SET_MODULES_FETCHING', isFetching => isFetching);
//Sets the value of modules.isFetchingModule
export const setModuleFetching = createAction('SET_MODULE_FETCHING', isFetching => isFetching);
//Adds a module to the moduleHistory
export const setModuleVisited = createAction('SET_MODULE_VISITED', id => parseInt(id));

export const getModules = createAction('GET_MODULES', filters =>
    Axios.get('/modules/', {
        params: filters || {}
    })
);

export const getModule = createAction('GET_MODULE_DETAIL', id =>
    Axios.get(`/modules/${id}`)
);

export const getChangeModuleRating = createAction('GET_CHANGE_MODULE_RATING', (id, rating) =>
    Axios.post(`/modules/${id}`, {
        rating: rating
    })
);

export const putModule = createAction('PUT_MODULE', moduleForm =>
    Axios.post(`/modules/${moduleForm.get('id') || ''}`, moduleForm)
);
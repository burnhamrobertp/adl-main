import Axios from 'Axios'
import { createAction } from 'redux-actions'

//Sets the value of modules.isFetchingList
export const setModulesFetching = createAction('SET_MODULES_FETCHING', isFetching => isFetching);
//Sets the value of modules.isFetchingModule
export const setModuleFetching = createAction('SET_MODULE_FETCHING', isFetching => isFetching);
//Adds a module to the moduleHistory
export const setModuleVisited = createAction('SET_MODULE_VISITED', id => parseInt(id));

export function getModules(filters = {}) {
    const data = Axios.get('/modules/', {
        params: filters
    }).then((response) =>
        response.data
    );

    return {
        type: 'GET_MODULES',
        payload: data
    };
}

export function getModule(id) {
    const data = Axios.get(`/modules/${id}`)
        .then((response) =>
            response.data
        );

    return {
        type: 'GET_MODULE_DETAIL',
        payload: data
    }
}

export function getChangeModuleRating(id, rating) {
    const data = Axios.post(`/modules/${id}`, {
        rating: rating
    }).then((response) =>
        response.data
    );

    return {
        type: 'GET_CHANGE_MODULE_RATING',
        payload: data
    }
}

export function putModule(moduleForm) {
    const data = Axios.post(`/modules/${moduleForm.get('id') || ''}`, moduleForm)
        .then((response) => {
            console.log(response);
        });

    return {
        type: 'PUT_MODULE',
        payload: data
    }
}
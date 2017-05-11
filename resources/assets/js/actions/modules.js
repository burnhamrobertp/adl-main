import Axios from 'Axios';

/**
 * Sets the value of modules.isFetchingList
 *
 * @param isFetching
 * @returns {{type: string, payload: *}}
 */
export function setModulesFetching(isFetching) {
    return {
        type: 'SET_MODULES_FETCHING',
        payload: isFetching
    }
}

/**
 * Sets the value of modules.isFetchingModule
 *
 * @param isFetching
 * @returns {{type: string, payload: *}}
 */
export function setModuleFetching(isFetching) {
    return {
        type: 'SET_MODULE_FETCHING',
        payload: isFetching
    }
}

/**
 * Adds a module to the moduleHistory
 *
 * @param id
 * @returns {{type: string, payload: Number}}
 */
export function setModuleVisited(id) {
    return {
        type: 'SET_MODULE_VISITED',
        payload: parseInt(id)
    }
}

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
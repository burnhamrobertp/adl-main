import Axios from 'Axios';

export function setModulesFetching(isFetching) {
    return {
        type: 'SET_MODULES_FETCHING',
        payload: isFetching
    }
}

export function setModuleFetching(isFetching) {
    return {
        type: 'SET_MODULE_FETCHING',
        payload: isFetching
    }
}

export function setModuleVisited(id) {
    return {
        type: 'SET_MODULE_VISITED',
        payload: id
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
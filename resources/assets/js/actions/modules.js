import Axios from 'Axios';

export function getModules(filters = {}) {
    const data = Axios.get('api/modules/', {
        params: filters
    }).then((response) =>
        response.data
    );

    return {
        type: 'GET_MODULES',
        payload: data
    };
}
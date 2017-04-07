import Axios from 'Axios';

export function getModules() {
    const data = Axios.get( 'api/modules/' ).then( ( response ) => response.data );
    
    return {
        type    : 'GET_MODULES',
        payload : data
    };
}
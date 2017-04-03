import Axios from 'Axios';

export function getEditions() {
    return {
        type    : 'GET_FILTER_EDITIONS',
        payload : window.editions
    };
}
export function getAdventureLength() {
    return {
        type    : 'GET_FILTER_LENGTHS',
        payload : window.moduleLengths
    };
}
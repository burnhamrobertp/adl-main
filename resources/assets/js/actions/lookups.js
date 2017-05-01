import Axios from 'Axios';

/**
 * Update the list of editions
 * @returns {{type: string, payload: *}}
 */
export function getEditions() {
    const data = Axios.get('editions/').then((response) => response.data);

    return {
        type: 'GET_LOOKUP_EDITIONS',
        payload: data
    };
}

/**
 * Update the list of campaign settings
 * @returns {{type: string, payload: *}}
 */
export function getSettings() {
    const data = Axios.get('settings/').then((response) => response.data);

    return {
        type: 'GET_LOOKUP_SETTINGS',
        payload: data
    };
}

/**
 * Update the list of adventure lengths
 * @returns {{type: string, payload: *}}
 */
export function getAdventureLengths() {
    const data = Axios.get('moduleLengths/').then((response) => response.data);

    return {
        type: 'GET_LOOKUP_LENGTHS',
        payload: data
    };
}

/**
 * Update the list of publsihers
 * @returns {{type: string, payload: *}}
 */
export function getPublishers() {
    const data = Axios.get('publishers/').then((response) => response.data);

    return {
        type: 'GET_LOOKUP_PUBLISHERS',
        payload: data
    };
}
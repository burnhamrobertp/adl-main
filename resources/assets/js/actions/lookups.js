import Axios from 'Axios'
import { createAction } from 'redux-actions'

// Update the list of editions
export const getEditions = createAction('GET_LOOKUP_EDITIONS', () =>
    Axios.get('editions/').then((response) => response.data)
);

// Update the list of campaign settings
export const getSettings = createAction('GET_LOOKUP_SETTINGS', () =>
    Axios.get('settings/').then((response) => response.data)
);

// Update the list of adventure lengths
export const getAdventureLengths = createAction('GET_LOOKUP_LENGTHS', () =>
    Axios.get('moduleLengths/').then((response) => response.data)
);

// Update the list of publsihers
export const getPublishers = createAction('GET_LOOKUP_PUBLISHERS', () =>
    Axios.get('publishers/').then((response) => response.data)
);
import {createAction} from 'redux-actions'

//Set selected filter editions
export const setFilterEditions = createAction('SET_FILTER_EDITIONS', (edition, active) =>
    updateArray(active, edition)
);

//Set selected filter setting
export const setFilterSetting = createAction('SET_FILTER_SETTING', setting => setting);

/**
 * Set filter minLevel
 * @param minLevel
 * @returns {{type: string, payload: *}}
 */
export const setFilterMinLevel = createAction('SET_FILTER_SETTING', minLevel => minLevel);

/**
 * Set filter maxLevel
 * @param maxLevel
 * @returns {{type: string, payload: *}}
 */
export const setFilterMaxLevel = createAction('SET_FILTER_SETTING', maxLevel => maxLevel);

// Set selected active adventure lengths
export const setFilterModuleLengths = createAction('SET_FILTER_LENGTHS', (length, active) =>
    updateArray(active, length)
);

function updateArray(active, variable) {
    let array = active.map((item) => item);

    if (array.includes(variable)) {
        array.splice(array.indexOf(variable), 1);
    } else {
        array.push(variable);
    }

    return array;
}
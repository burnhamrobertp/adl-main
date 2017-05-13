import { createAction } from 'redux-actions'

//Set selected filter editions
export const setFilterEditions = createAction('SET_FILTER_EDITIONS', (edition, active) => {
    active = updateArray(active, edition);
    return active;
});

//Set selected filter setting
export const setFilterSetting = createAction('SET_FILTER_SETTING', setting => setting);

//Set selected filter minLevel
export const setFilterMinLevel = createAction('SET_FILTER_SETTING', minLevel => minLevel);

//Set selected filter maxLevel
export const setFilterMaxLevel = createAction('SET_FILTER_SETTING', maxLevel => maxLevel);

// Set selected active adventure lengths
export const setFilterModuleLengths = createAction('SET_FILTER_LENGTHS', (length, active) => {
    active = updateArray(active, length);
    return active;
});

function updateArray(active, variable) {
    return new Promise((cb) => {
        let array = active.map((item) => item)

        if (array.includes(variable)) {
            array.splice(array.indexOf(variable), 1);
        } else {
            array.push(variable);
        }
        cb(array);
    })
}
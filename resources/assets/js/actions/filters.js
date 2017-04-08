/**
 * Set active editions
 * @param edition
 * @param active
 * @returns {{type: string, payload: *}}
 */
export function setFilterEditions(edition, active) {
    active = updateArray(active, edition);

    return {
        type: 'SET_FILTER_EDITIONS',
        payload: active
    };
}

/**
 * Set filter setting
 * @param setting
 * @returns {{type: string, payload: *}}
 */
export function setFilterSetting(setting) {
    return {
        type: 'SET_FILTER_SETTING',
        payload: setting
    };
}

/**
 * Set filter minLevel
 * @param minLevel
 * @returns {{type: string, payload: *}}
 */
export function setFilterMinLevel(minLevel) {
    return {
        type: 'SET_FILTER_SETTING',
        payload: minLevel
    };
}

/**
 * Set filter maxLevel
 * @param maxLevel
 * @returns {{type: string, payload: *}}
 */
export function setFilterMaxLevel(maxLevel) {
    return {
        type: 'SET_FILTER_SETTING',
        payload: maxLevel
    };
}

/**
 * Set active adventure lengths
 * @param length
 * @param active
 * @returns {{type: string, payload: *}}
 */
export function setFilterModuleLengths(length, active) {
    active = updateArray(active, length);

    return {
        type: 'SET_FILTER_LENGTHS',
        payload: active
    };
}

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
/**
 * User is both logged in and e-mail verified
 *
 * @param state
 * @returns {boolean}
 */
export function userIsVerified(state) {
    return typeof state.user.id === 'number' && state.user.verified === 1;
}

/**
 * Fetches the current module out of the state history
 *
 * @param state
 * @returns {{}}
 */
export function currentModule(state) {
    const hasModuleHistory = state.modules.moduleHistory && state.modules.moduleHistory.length > 0;

    if (hasModuleHistory)
        return state.modules.index[state.modules.moduleHistory[0]] || {};
    else
        return {};
}

export function moduleFromIndex(state, moduleId) {
    return state.modules.index[moduleId] || {};
}

/**
 * Fetches the current user's rating for the specified module, or null if no rating exists
 *
 * @param state
 * @param moduleId
 * @returns {*}
 */
export function userRatingForModule(state, moduleId) {
    let rating = null;

    rating = state.user.ratings.reduce((acc, val) => {

        if (rating !== null)
            return acc;
        else
            return val.module_id === moduleId ? val.rating : acc;
    }, rating);

    return rating;
}
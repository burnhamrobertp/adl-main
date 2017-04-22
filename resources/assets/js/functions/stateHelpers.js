/**
 * User is both logged in and e-mail verified
 *
 * @param state
 * @returns {boolean}
 */
export function userIsVerified(state) {
    return typeof state.user.id === 'number' && state.user.verified === true;
}

/**
 * Fetches the current module out of the state history
 *
 * @param state
 * @returns {{}}
 */
export function currentModule(state) {
    const hasModuleHistory = state.modules.moduleHistory &&
        state.modules.moduleHistory.length > 0;

    return hasModuleHistory ? state.modules.moduleHistory[0] : {};
}
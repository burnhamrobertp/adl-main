export function equal(a, b) {
    return a === b;
}

export function hasValue(a) {
    return a !== undefined && a !== null && a.length > 0;
}

/**
 * Returns that all passed arguments have a value (by checking length)
 *
 * @returns {*}
 */
export function haveValue() {
    return Array.from(arguments).reduce((accum, a) =>
        accum && a.length > 0
    , arguments.length > 0);
}

/**
 * Returns undefined if either a or b lack a value, returns a === b otherwise
 *
 * @param a
 * @param b
 * @returns {*}
 */
export function equalHasValue(a, b) {
    if (!hasValue(a) || !hasValue(b))
        return undefined;

    return equal(a, b);
}
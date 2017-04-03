/**
 * Get edition filters
 * @returns {{type: string, payload: *}}
 */
export function getEditions() {
    return {
        type    : 'GET_FILTER_EDITIONS',
        payload : window.editions
    };
}

/**
 * Get adventure length filters
 * @returns {{type: string, payload: *}}
 */
export function getAdventureLength() {
    return {
        type    : 'GET_FILTER_LENGTHS',
        payload : window.moduleLengths
    };
}

/**
 * Set active editions
 * @param edition
 * @param active
 * @returns {{type: string, payload: *}}
 */
export function setEditions( edition, active ) {
    
    active = updateArray( active, edition );
    
    return {
        type    : 'SET_FILTER_EDITIONS',
        payload : active
    };
}

/**
 * Set active adventure lengths
 * @param lenght
 * @param active
 * @returns {{type: string, payload: *}}
 */
export function setAdventureLength( lenght, active ) {
    active = updateArray( active, lenght );
    
    return {
        type    : 'SET_FILTER_LENGTHS',
        payload : active
    };
}

function updateArray( active, variable ) {
    return new Promise( ( cb ) => {
        let array = active.map( ( item ) => item )
        
        if( array.includes( variable ) ) {
            array.splice( array.indexOf( variable ), 1 );
        } else {
            array.push( variable );
        }
        cb( array );
    } )
}
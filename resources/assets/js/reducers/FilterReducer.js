const DEFAULT_STATE = {
    editions              : [],
    minLevel              : 0,
    maxLevel              : 20,
    adventureLength       : [],
    search                : '',
    digitalCopy           : false,
    activeEditions        : [],
    activeAdventureLength : [],
};

export default function( state = DEFAULT_STATE, action ) {
    switch( action.type ) {
        case 'GET_FILTER_LENGTHS':
            return Object.assign( {}, state, {
                editions : action.payload
            } );
        case 'GET_FILTER_EDITIONS':
            return Object.assign( {}, state, {
                adventureLength : action.payload
            } );
        case 'SET_FILTER_EDITIONS':
            return Object.assign( {}, state, {
                activeEditions : action.payload
            } );
        case 'SET_FILTER_LENGTHS':
            
            return Object.assign( {}, state, {
                activeAdventureLength : action.payload
            } );
        default:
            return state;
    }
}
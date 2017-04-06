const DEFAULT_STATE = {
    editions               : [],
    minLevel               : 0,
    maxLevel               : 20,
    adventureLengths       : [],
    search                 : '',
    digitalCopy            : false,
    activeEditions         : [],
    activeAdventureLengths : [],
};

export default function( state = DEFAULT_STATE, action ) {
    switch( action.type ) {
        case 'GET_FILTER_EDITIONS':
            return Object.assign( {}, state, {
                editions : action.payload
            } );
        case 'GET_FILTER_LENGTHS':
            return Object.assign( {}, state, {
                adventureLengths : action.payload
            } );
        case 'SET_FILTER_EDITIONS':
            return Object.assign( {}, state, {
                activeEditions : action.payload
            } );
        case 'SET_FILTER_LENGTHS':
            
            return Object.assign( {}, state, {
                activeAdventureLengths : action.payload
            } );
        default:
            return state;
    }
}
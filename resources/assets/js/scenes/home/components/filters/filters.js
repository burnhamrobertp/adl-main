import React from 'react';
import {connect} from 'react-redux';

import EditionFilter from './editionFilter';
import LevelFilter from './levelFilter';
import LengthFilter from './lengthFilter';
import SearchFilter from './searchFilter';
import Filter from './filter';

import {getEditions, getAdventureLength} from '../../../../actions/filters';
class Filters extends React.Component {
    componentDidMount() {
        this.props.getEditions();
        this.props.getAdventureLength()
    }
    render() {
        return (
            <div id="adl-filters" className="bg-faded">
                <div id="adl-description" className="p-2">
                    Adventure Lookup helps you quickly locate an adventure for your D&D campaign using a wide range of categories.
                    Enable the filters of your choice and the results will update to match.
                </div>

                <EditionFilter editions={this.props.editions} />

                <LevelFilter/>

                <LengthFilter lengths={this.props.adventureLength} />

                <SearchFilter/>

                <Filter id="digitalcopy" label="Digital Copy Available" />
            </div>
        )
    }
}


Notification.defaultProps = {
    editions: [],
    minLevel: 0,
    maxLevel: 20,
    adventureLength: [],
    search: '',
    digitalCopy: false,
};

function mapStateToProps( state ) {
    return {
        editions: state.filters.editions,
        minLevel: state.filters.minLevel,
        maxLevel: state.filters.maxLevel,
        adventureLength: state.filters.adventureLength,
        search: state.filters.search,
        digitalCopy: state.filters.digitalCopy
    };
}

export default connect( mapStateToProps, {getEditions, getAdventureLength} )( Filters );
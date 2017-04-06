import React from 'react';
import {connect} from 'react-redux';
import EditionFilter from './editionFilter';
import SettingFilter from './settingFilter';
import LevelFilter from './levelFilter';
import LengthFilter from './lengthFilter';
import SearchFilter from './searchFilter';
import Filter from './filter';
import {getEditions, getAdventureLengths, setEditions, setAdventureLengths} from 'js/actions/filters';

class Filters extends React.Component {
    componentDidMount() {
        this.props.getEditions();
        this.props.getAdventureLengths()
    }

    render() {
        return (
            <div id="adl-filters" className="bg-faded">
                <div id="adl-description" className="p-2">
                    Adventure Lookup helps you quickly locate an adventure for your D&D campaign using a wide range of categories.
                    Enable the filters of your choice and the results will update to match.
                </div>

                <EditionFilter
                    editions={this.props.editions}
                    click={this.props.setEditions}
                    activeListings={this.props.activeEditions}
                />
            
                <SettingFilter />

                <LevelFilter />

                <LengthFilter
                    lengths={this.props.adventureLength}
                    click={this.props.setAdventureLengths}
                    activeListings={this.props.activeAdventureLength}
                />

                <SearchFilter />

                <Filter id="digitalcopy" label="Digital Copy Available" />
            </div>
        )
    }
}

Filters.defaultProps = {
    editions: [],
    minLevel: 0,
    maxLevel: 20,
    adventureLength: [],
    search: '',
    digitalCopy: false,
    activeEditions: [],
    activeAdventureLength: []
};

function mapStateToProps( state ) {
    return {
        editions: state.filters.editions,
        minLevel: state.filters.minLevel,
        maxLevel: state.filters.maxLevel,
        adventureLength: state.filters.adventureLengths,
        search: state.filters.search,
        digitalCopy: state.filters.digitalCopy,
        activeEditions: state.filters.activeEditions,
        activeAdventureLength: state.filters.activeAdventureLengths
    };
}

export default connect( mapStateToProps, {getEditions, getAdventureLengths, setEditions, setAdventureLengths} )( Filters );

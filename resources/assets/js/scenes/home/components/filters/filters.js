import React from 'react';
import {connect} from 'react-redux';
import EditionFilter from './editionFilter';
import SettingFilter from './settingFilter';
import LevelFilter from './levelFilter';
import LengthFilter from './lengthFilter';
import SearchFilter from './searchFilter';
import Filter from './filter';
import {setEditions, setSetting, setAdventureLengths} from 'js/actions/filters';

class Filters extends React.Component {
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
            
                <SettingFilter
                    settings={this.props.settings}
                    change={this.props.setSetting}
                />

                <LevelFilter />

                <LengthFilter
                    lengths={this.props.moduleLengths}
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
    settings: [],
    minLevel: 0,
    maxLevel: 20,
    adventureLength: [],
    search: '',
    digitalCopy: false,
    activeEditions: [],
    activeSetting: '',
    activeAdventureLength: []
};

function mapStateToProps( state ) {
    return {
        editions: state.lookups.editions,
        settings: state.lookups.settings,
        moduleLengths: state.lookups.moduleLengths,
        minLevel: state.filters.minLevel,
        maxLevel: state.filters.maxLevel,
        search: state.filters.search,
        digitalCopy: state.filters.digitalCopy,
        activeEditions: state.filters.activeEditions,
        activeSetting: state.filters.activeSetting,
        activeAdventureLength: state.filters.activeAdventureLengths
    };
}

export default connect( mapStateToProps, {setEditions, setAdventureLengths, setSetting} )( Filters );

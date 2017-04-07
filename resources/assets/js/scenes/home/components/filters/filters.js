import React from 'react';
import {connect} from 'react-redux';

import EditionFilter from './editionFilter';
import SettingFilter from './settingFilter';
import LevelFilter from './levelFilter';
import LengthFilter from './lengthFilter';
import SearchFilter from './searchFilter';
import Filter from './filter';

import {getModules} from 'js/actions/modules';
import {setEditions, setSetting, setAdventureLengths} from 'js/actions/filters';

class Filters extends React.Component {
    filterModules() {
        this.props.getModules(this.props.filters);
    }

    renderFilterButton() {
        return (
            <button onClick={this.filterModules.bind(this)}>Filter</button>
        )
    }

    render() {
        return (
            <div id="adl-filters" className="bg-faded">
                <div id="adl-description" className="p-2">
                    Adventure Lookup helps you quickly locate an adventure for your D&D campaign using a wide range of
                    categories. Enable the filters of your choice and the results will update to match.
                </div>

                {this.renderFilterButton()}

                <EditionFilter
                    editions={this.props.editions}
                    click={this.props.setEditions}
                    activeListings={this.props.filters.editions}
                />

                <SettingFilter
                    settings={this.props.settings}
                    change={this.props.setSetting}
                />

                <LevelFilter />

                <LengthFilter
                    lengths={this.props.moduleLengths}
                    click={this.props.setAdventureLengths}
                    activeListings={this.props.filters.moduleLengths}
                />

                <SearchFilter />

                <Filter id="digitalcopy" label="Digital Copy Available"/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        filters: {
            minLevel: state.filters.minLevel,
            maxLevel: state.filters.maxLevel,
            search: state.filters.search,
            digitalCopy: state.filters.digitalCopy,
            editions: state.filters.activeEditions,
            setting: state.filters.activeSetting,
            moduleLengths: state.filters.activeAdventureLengths
        },
        editions: state.lookups.editions,
        settings: state.lookups.settings,
        moduleLengths: state.lookups.moduleLengths,
    };
}

export default connect(mapStateToProps, {getModules, setEditions, setAdventureLengths, setSetting})(Filters);

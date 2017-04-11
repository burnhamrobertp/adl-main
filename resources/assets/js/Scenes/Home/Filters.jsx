import React from 'react';
import {connect} from 'react-redux';

import EditionFilter from './Filters/EditionFilter';
import SettingFilter from './Filters/SettingFilter';
import LevelFilter from './Filters/LevelFilter';
import LengthFilter from './Filters/LengthFilter';
import SearchFilter from './Filters/SearchFilter';
import Filter from './Components/Filter';

import {getModules} from 'js/actions/modules';
import {
    setFilterEditions,
    setFilterSetting,
    setFilterMinLevel,
    setFilterMaxLevel,
    setFilterModuleLengths
} from 'js/actions/filters';

class Filters extends React.Component {
    filterModules() {
        this.props.getModules(this.props.filters);
    }

    renderFilterButton() {
        return (
            <div className="text-right mt-2">
                <button id="applyFilters" onClick={this.filterModules.bind(this)}>Apply Filters</button>
            </div>
        )
    }

    render() {
        return (
            <div id="adl-filters" className="bg-faded">
                <div id="adl-description" className="p-2">
                    Adventure Lookup helps you quickly locate an adventure for your D&D campaign using a wide range of
                    categories. Enable the filters of your choice and the results will update to match.
                </div>

                <EditionFilter
                    editions={this.props.editions}
                    click={this.props.setFilterEditions}
                    activeListings={this.props.filters.editions}
                />

                <SettingFilter
                    settings={this.props.settings}
                    change={this.props.setFilterSetting}
                />

                <LevelFilter
                    minLevel={this.props.filters.minLevel}
                    minChange={this.props.setFilterMinLevel}
                    maxLevel={this.props.filters.maxLevel}
                    maxChange={this.props.setFilterMaxLevel}
                />

                <LengthFilter
                    lengths={this.props.moduleLengths}
                    click={this.props.setFilterModuleLengths}
                    activeListings={this.props.filters.moduleLengths}
                />

                <SearchFilter />

                <Filter id="digitalcopy" label="Digital Copy Available"/>

                {this.renderFilterButton()}
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
            editions: state.filters.editions,
            setting: state.filters.setting,
            moduleLengths: state.filters.moduleLengths
        },
        editions: state.lookups.editions,
        settings: state.lookups.settings,
        moduleLengths: state.lookups.moduleLengths,
    };
}

export default connect(mapStateToProps, {getModules, setFilterEditions, setFilterModuleLengths, setFilterSetting, setFilterMinLevel, setFilterMaxLevel})(Filters);

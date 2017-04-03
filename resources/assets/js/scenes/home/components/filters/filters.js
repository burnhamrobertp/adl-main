import React from 'react';

import EditionFilter from './editionFilter';
import SettingFilter from './settingFilter';
import LevelFilter from './levelFilter';
import LengthFilter from './lengthFilter';
import SearchFilter from './searchFilter';
import Filter from './filter';

class Filters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {filters: {}};
    }

    render() {
        return (
            <div id="adl-filters" className="bg-faded">
                <div id="adl-description" className="p-2">
                    Adventure Lookup helps you quickly locate an adventure for your D&D campaign using a wide range of categories.
                    Enable the filters of your choice and the results will update to match.
                </div>

                <EditionFilter handleFilter={this.props.handleFilter} editions={this.props.editions} />

                <SettingFilter handleFilter={this.props.handleFilter} settings={this.props.settings} />

                <LevelFilter handleFilter={this.props.handleFilter} />

                <LengthFilter handleFilter={this.props.handleFilter} lengths={this.props.moduleLengths} />

                <SearchFilter handleFilter={this.props.handleFilter} />

                <Filter id="digitalcopy" label="Digital Copy Available" />
            </div>
        )
    }
}

export default Filters;
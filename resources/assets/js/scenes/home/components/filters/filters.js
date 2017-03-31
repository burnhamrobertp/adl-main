import React from 'react';
import $ from 'jquery';

import EditionFilter from './editionFilter';
import LevelFilter from './levelFilter';
import LengthFilter from './lengthFilter';
import SearchFilter from './searchFilter';
import Filter from './filter';

class Filters extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editions: window.editions,
            lengths: window.moduleLengths
        };
    }

    render() {
        return (
            <div id="adl-filters" className="bg-faded">
                <div id="adl-description" className="p-2">
                    Adventure Lookup helps you quickly locate an adventure for your D&D campaign using a wide range of categories.
                    Enable the filters of your choice and the results will update to match.
                </div>

                <EditionFilter editions={this.state.editions} />

                <LevelFilter/>

                <LengthFilter lengths={this.state.lengths} />

                <SearchFilter/>

                <Filter id="digitalcopy" label="Digital Copy Available" />
            </div>
        )
    }
}

export default Filters;
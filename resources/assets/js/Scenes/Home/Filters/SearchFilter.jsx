import React from 'react';

import Filter from '../Components/Filter';

class EditionFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Filter id="search" label="Search" sublabel="(item, creature, etc)">
                <input type="text" className="form-control" />
            </Filter>
        );
    }
}

export default EditionFilter;
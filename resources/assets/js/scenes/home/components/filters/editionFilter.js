import React from 'react';

import Filter from './filter';

class EditionFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let buttons = this.props.editions.map((edition) =>
            <button key={edition.id} type="button">{edition.name}</button>
        );

        return (
            <Filter id="edition" label="Edition">
                {buttons}
            </Filter>
        );
    }
}

export default EditionFilter;
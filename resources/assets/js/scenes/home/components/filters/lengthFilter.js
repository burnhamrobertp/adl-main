import React from 'react';

import Filter from './filter';

class LengthFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let buttons = this.props.lengths.map((length) =>
            <button key={length.id} type="button">{length.name}</button>
        );

        return (
            <Filter id="length" label="Adventure Length">
                {buttons}
            </Filter>
        );
    }
}

export default LengthFilter;
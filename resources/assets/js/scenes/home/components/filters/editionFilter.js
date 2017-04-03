import React from 'react';

import $ from 'jquery';
import Filter from './filter';

class EditionFilter extends React.Component {
    constructor(props) {
        super(props);

        this._selectedEditions = [];
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        $(e.target).toggleClass('active');
        this._selectedEditions.push(e.target.value);
        this.props.handleFilter('editions', this._selectedEditions);
    }

    render() {
        const buttons = this.props.editions.map((edition) =>
            <button key={edition.id} value={edition.id} type="button"
                    className="btn btn-primary"
                    onClick={this.handleClick}>{edition.name}</button>
        );

        return (
            <Filter id="edition" label="Edition">
                {buttons}
            </Filter>
        );
    }
}

export default EditionFilter;
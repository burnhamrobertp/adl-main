import React from 'react';

import Filter from './filter';

class EditionFilter extends React.Component {
    constructor(props) {
        super(props);

        this._selected = [];
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.target.classList.toggle('active');
        // toggle the that the value is selected
        if (this._selected.includes(e.target.value))
            this._selected.splice(this._selected.indexOf(e.target.value), 1);
        else
            this._selected.push(e.target.value);

        this.props.handleFilter('editions', this._selected);
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
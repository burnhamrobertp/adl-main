import React from 'react';

import Filter from '../Components/Filter';
import Button from '../Components/Button';

class EditionFilter extends React.Component {
    renderButtons() {
        if (this.props.editions.length > 0) {
            return this.props.editions.map((edition) =>
                <Button
                    key={edition.id}
                    id={edition.id}
                    name={edition.name}
                    click={this.props.click}
                    active={this.props.activeListings.includes(edition.id)}
                    activeListings={this.props.activeListings}
                />
            );
        }
        return null;
    }

    render() {
        return (
            <Filter id="edition" label="Edition">
                {this.renderButtons()}
            </Filter>
        );
    }
}

export default EditionFilter;
import React from 'react';

import Filter from './filter';
import Button from '../atoms/Button';

class EditionFilter extends React.Component {
    renderButtons() {
        if (this.props.editions.length > 0) {
            return this.props.editions.map((edition) =>
                <Button
                    key={edition.id}
                    name={edition.name}
                    click={this.props.click}
                    active={this.props.activeListings.includes(edition.name)}
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
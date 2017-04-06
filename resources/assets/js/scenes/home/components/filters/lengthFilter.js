import React from 'react';

import Filter from './filter';
import Button from '../atoms/Button';

class LengthFilter extends React.Component {
    renderButtons(){
        if(this.props.lengths.length > 0){
            return this.props.lengths.map((length) =>
                <Button
                    key={length.id}
                    name={length.name}
                    click={this.props.click}
                    active={this.props.activeListings.includes(length.name)}
                    activeListings={this.props.activeListings}
                />
            );
        }
        return null;
    }
    
    render() {
        return (
            <Filter id="length" label="Adventure Length">
                {this.renderButtons()}
            </Filter>
        );
    }
}

export default LengthFilter;
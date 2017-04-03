import React from 'react';

import Filter from './filter';

class LengthFilter extends React.Component {
    renderButtons(){
        if(this.props.lengths.length > 0){
            return this.props.lengths.map((length) =>
                <button key={length.id} type="button">{length.name}</button>
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
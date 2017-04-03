import React from 'react';

import Filter from './filter';

class EditionFilter extends React.Component {
    
    renderButtons(){
        if(this.props.editions.length > 0){
            return this.props.editions.map((edition) =>
                <button key={edition.id} type="button">{edition.name}</button>
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
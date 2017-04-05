import React from 'react';

const DEFAULT = {
    color        : '#444',
    borderRadius : '4px',
};

const ACTIVE = {
    color        : 'white',
    borderRadius : '4px',
    background   : 'rgb(66, 184, 221)'
}

class Button extends React.Component {
    
    getStyle() {
        if( this.props.active ) {
            return ACTIVE;
        }
        
        return DEFAULT;
    }
    
    click() {
        this.props.click( this.props.name, this.props.activeListings );
    }
    
    render() {
        return (
            <button style={this.getStyle()} onClick={this.click.bind( this )}>
                {this.props.name}
            </button>
        );
    }
}

export default Button;
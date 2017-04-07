import React from 'react';

const DEFAULT = {

};

const ACTIVE = {
    background: '#ffce3a'
};

class Button extends React.Component {
    getStyle() {
        if (this.props.active) {
            return ACTIVE;
        }

        return DEFAULT;
    }

    click() {
        this.props.click(this.props.name, this.props.activeListings);
    }

    render() {
        return (
            <button style={this.getStyle()} onClick={this.click.bind(this)}>
                {this.props.name}
            </button>
        );
    }
}

export default Button;
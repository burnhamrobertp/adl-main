import React from 'react';

class Button extends React.Component {
    getClasses() {
        if (this.props.active) {
            return ['active'];
        }

        return [];
    }

    click() {
        this.props.click(this.props.id, this.props.activeListings);
    }

    render() {
        return (
            <button className={this.getClasses()} onClick={this.click.bind(this)}>
                {this.props.name}
            </button>
        );
    }
}

export default Button;
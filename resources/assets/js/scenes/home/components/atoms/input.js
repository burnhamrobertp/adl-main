import React from 'react';

class Input extends React.Component {
    change(event) {
        this.props.change(event.target.value);
    }

    render() {
        return (
            <input type="text" className="form-control" onChange={this.change.bind(this)} />
        );
    }
}

export default Input;
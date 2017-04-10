import React from 'react';

class Select extends React.Component {
    change(event) {
        this.props.change(event.target.value);
    }

    renderOptions() {
        if (this.props.settings.length > 0) {
            return this.props.settings.map((setting) =>
                <option key={setting.id} value={setting.id}>{setting.name}</option>
            );
        }
    }

    render() {
        return (
            <select onChange={this.change.bind(this)}>
                <option value="" />
                {this.renderOptions()}
            </select>
        );
    }
}

export default Select;
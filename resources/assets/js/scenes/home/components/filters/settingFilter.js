import React from 'react';

import Filter from './filter';

class SettingFilter extends React.Component {
    renderOptions() {
        if (this.props.settings.length > 0) {
            return this.props.settings.map((setting) =>
                <option key={setting.id} value={setting.id}>{setting.name}</option>
            );
        }
    }

    render() {
        return (
            <Filter id="settigns" label="Campaign Setting">
                <select>
                    <option value="" />
                    {this.renderOptions()}
                </select>
            </Filter>
        );
    }
}

export default SettingFilter;

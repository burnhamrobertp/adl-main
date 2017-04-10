import React from 'react';

import Filter from './filter';
import Select from '../atoms/select';

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
                <Select
                    settings={this.props.settings}
                    change={this.props.change}
                />
            </Filter>
        );
    }
}

export default SettingFilter;

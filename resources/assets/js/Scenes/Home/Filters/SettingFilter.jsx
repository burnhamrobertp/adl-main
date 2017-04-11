import React from 'react';

import Filter from '../Components/Filter';
import Select from '../Components/Select';

class SettingFilter extends React.Component {
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

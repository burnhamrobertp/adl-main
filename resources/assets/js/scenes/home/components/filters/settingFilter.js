import React from 'react';

import Filter from './filter';

class SettingFilter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {settings: props.settings};
    }

    render() {
        const options = this.state.settings.map((setting) =>
            <option key={setting.id} value={setting.id}>{setting.name}</option>
        );

        return (
            <Filter id="settigns" label="Campaign Setting">
                <select>
                    <option value="" />
                    {options}
                </select>
            </Filter>
        );
    }
}

export default SettingFilter;
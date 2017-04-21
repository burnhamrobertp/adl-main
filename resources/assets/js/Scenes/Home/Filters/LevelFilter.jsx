import React from 'react';

import Filter from '../Components/Filter';
import Input from '../Components/Input';

class LevelFilter extends React.Component {
    render() {
        return (
            <Filter id="level" label="Level Range">
                <div className="input-group input-group-sm">
                    <span className="input-group-addon">
                        <label htmlFor="adl-filter-level-min">Min</label>
                    </span>
                    <Input
                        change={this.props.minChange}
                        value={this.props.minLevel}
                    />

                    <span className="input-group-addon">
                        <label htmlFor="adl-filter-level-max">Max</label>
                    </span>
                    <Input
                        change={this.props.maxChange}
                        value={this.props.maxLevel}
                    />
                </div>
            </Filter>
        );
    }
}

export default LevelFilter;
import React from 'react';

import Filter from './filter';

class EditionFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Filter id="level" label="Level Range">
                <div className="input-group input-group-sm">
                        <span className="input-group-addon">
                            <label htmlFor="adl-filter-level-min">Min</label>
                        </span>
                    <input id="adl-filter-level-min" type="text" className="form-control" aria-label="Minimum adventure level"/>

                    <span className="input-group-addon">
                            <label htmlFor="adl-filter-level-max">Max</label>
                        </span>
                    <input id="adl-filter-level-max" type="text" className="form-control" aria-label="Minimum adventure level"/>
                </div>
            </Filter>
        );
    }
}

export default EditionFilter;
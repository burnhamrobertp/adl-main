import React from 'react';

import Filter from './filter';

class Filters extends React.Component {
    render() {
        return (
            <div id="adl-filters" className="bg-faded">
                <div id="adl-description" className="p-2">
                    Adventure Lookup helps you quickly locate an adventure for your D&D campaign using a wide range of categories.
                    Enable the filters of your choice and the results will update to match.
                </div>

                <Filter id="edition" label="Edition">
                    <button type="button">1e</button>
                    <button type="button">AD&D</button>
                    <button type="button">3e</button>
                    <button type="button">4e</button>
                    <button type="button">5e</button>
                </Filter>

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
                
                <Filter id="length" label="Adventure Length">
                    <button type="button">One-shot</button>
                    <button type="button">Short</button>
                    <button type="button">Medium</button>
                    <button type="button">Long</button>
                </Filter>
                
                <Filter id="search" label="Search" sublabel="(item, creature, etc)">
                    <input type="text" className="form-control" />
                </Filter>

                <Filter id="digitalcopy" label="Digital Copy Available" />
            </div>
        )
    }
}

export default Filters;
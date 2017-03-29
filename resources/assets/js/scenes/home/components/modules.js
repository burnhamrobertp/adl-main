import React from 'react'

import Module from './module'

class Modules extends React.Component {
    render() {
        const modules = this.props.modules;
        let modulesList = modules.map((module) =>
            <Module key={module.id} data={module} />
        );

        return (
            <div id="adl-adventures">
                <div className="p-3 row">
                    <div className="col">
                        <label htmlFor="adl-search-sortby">Sort By:</label>
                        <select id="adl-search-sortby">
                            <option>Rating</option>
                        </select>
                    </div>
                    <div id="adl-search-summary" className="col float-right text-right">{this.props.modules.length} Adventures Found</div>
                </div>

                {modulesList}
            </div>
        )
    }
}

export default Modules;
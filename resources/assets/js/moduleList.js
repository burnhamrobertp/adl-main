import React from 'react';

import Filters from './filters';

class ModuleList extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row equalH">
                    <div className="col equalH">
                        <Filters />
                    </div>

                    <div className="col-8 equalH">
                        <div id="adl-adventures">
                            <div className="p-3 row">
                                <div className="col">
                                    <label htmlFor="adl-search-sortby">Sort By:</label>
                                    <select id="adl-search-sortby">
                                        <option>Rating</option>
                                    </select>
                                </div>
                                <div id="adl-search-summary" className="col float-right text-right">9001 Adventures Found</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModuleList;
import React from 'react'
import $ from "jquery";

import Filters from './components/filters'

class ModuleList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {modules: []};
    }

    componentDidMount() {
        this.moduleList();
    }

    moduleList() {
        return $.getJSON('api/modules/')
            .then((data) => {
                this.setState({ modules: data})
            });
    }

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
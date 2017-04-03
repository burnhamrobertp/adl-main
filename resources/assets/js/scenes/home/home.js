import React from 'react'
import $ from "jquery";

import Filters from './components/filters/filters'
import Modules from './components/modules'

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modules: [],
            filters: {
                editions: [],
                setting: null,
                minLevel: null,
                maxLevel: null,
                moduleLength: [],
                search: null
            },
            editions: window.editions,
            settings: window.settings,
            moduleLengths: window.moduleLengths
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    componentDidMount() {
        this.moduleList();
    }

    moduleList() {
        return $.getJSON('api/modules/', this.state.filters)
            .then((data) => {
                this.setState({ modules: data})
            });
    }

    /**
     * Used by each filter to affect change when modules are fetched
     *
     * Consider replacing with redux at some point
     *
     * @param key
     * @param value
     */
    handleFilter(key, value) {
        let filters = this.state.filters;
        filters[key] = value;
        this.setState({filters: filters});
        this.moduleList();
    }


    render() {
        return (
            <div className="container">
                <div className="row equalH">
                    <div className="col equalH">
                        <Filters handleFilter={this.handleFilter}
                                 editions={this.state.editions}
                                 settings={this.state.settings}
                                 moduleLengths={this.state.moduleLengths} />
                    </div>

                    <div className="col-8 equalH">
                        <Modules modules={this.state.modules} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
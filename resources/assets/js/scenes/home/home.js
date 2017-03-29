import React from 'react'
import $ from "jquery";

import Filters from './components/filters'
import Modules from './components/modules'

class Home extends React.Component {
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
                        <Modules modules={this.state.modules} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
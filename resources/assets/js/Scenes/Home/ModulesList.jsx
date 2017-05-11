import React from 'react'
import {connect} from 'react-redux';

import {getModules, setModulesFetching} from 'js/actions/modules';

import Loading from 'js/Components/Loading/Loading'
import Module from './Components/ModuleListModule'

class ModulesList extends React.Component {
    componentDidMount() {
        this.props.setModulesFetching(true);
        this.props.getModules();
    }

    renderModuleList() {
        if (this.props.isFetching)
            return <Loading/>
        else
            return this.props.modules.map((module) =>
                <Module key={module.id} module={module}/>
            );
    }

    render() {
        return (
            <div id="modules-list">
                <div className="p-3 row">
                    <div className="col">
                        <label htmlFor="search-sortby">Sort By:</label>
                        <select id="search-sortby">
                            <option>Name</option>
                            <option>Rating</option>
                        </select>
                    </div>
                    <div id="search-summary">
                        {this.props.modules.length} Adventures Found
                    </div>
                </div>

                {this.renderModuleList()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.modules.isFetchingList,
        modules: state.modules.list
    };
}

export default connect(mapStateToProps, {getModules, setModulesFetching})(ModulesList);
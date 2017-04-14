import React from 'react'
import BaseComponent from 'js/Components/BaseComponent'
import {connect} from 'react-redux';

import Module from './Components/Module'
import {getModules, setModulesFetching} from 'js/actions/modules';

class ModulesList extends BaseComponent {
    componentDidMount() {
        this.props.setModulesFetching(true);
        this.props.getModules();
    }

    renderModuleList() {
        if (this.props.isFetching)
            return this.renderLoading();
        else
            return this.props.modules.map((module) =>
                <Module key={module.id} data={module}/>
            );
    }

    render() {
        return (
            <div id="adl-adventures">
                <div className="p-3 row">
                    <div className="col">
                        <label htmlFor="adl-search-sortby">Sort By:</label>
                        <select id="adl-search-sortby">
                            <option>Name</option>
                            <option>Rating</option>
                        </select>
                    </div>
                    <div id="adl-search-summary" className="col float-right text-right">
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
        isFetching: state.modules.isFetchingIndex,
        modules: state.modules.index
    };
}

export default connect(mapStateToProps, {getModules, setModulesFetching})(ModulesList);
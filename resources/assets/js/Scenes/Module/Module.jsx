import React from 'react'
import {connect} from 'react-redux'
import BaseComponent from 'js/Components/BaseComponent'

import {getModule, setModuleFetching, setModuleVisited} from 'js/actions/modules'
import {currentModule} from 'js/functions/stateHelpers'

import ModuleHeader from './ModuleHeader'
import ModuleSummary from './ModuleSummary'
import ModuleDetail from './ModuleDetail'
import ModuleSidebar from './ModuleSidebar'

class Module extends BaseComponent {
    hasModule() {
        return this.props.module && this.props.module.id;
    }

    componentDidMount() {
        const id = parseInt(this.props.match.params.id);
        // does the index already have this
        if (!this.props.index[id]) {
            this.props.setModuleFetching(true);
            this.props.getModule(id);
        } else {
            this.props.setModuleVisited(id);
        }
    }

    renderComponent() {
        if (this.props.isFetching || !this.hasModule()) {
            return this.renderLoading();
        } else {
            return (
                <div className="row">
                    <div className="col-8">
                        <ModuleHeader module={this.props.module}/>
                        <ModuleSummary module={this.props.module}/>
                        <ModuleDetail module={this.props.module}/>
                    </div>
                    <div className="col">
                        <ModuleSidebar module={this.props.module}/>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="outerContainer p-2">
                {this.renderComponent()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.modules.isFetchingModule,
        index: state.modules.index,
        module: currentModule(state)
    }
}

export default connect(mapStateToProps, {
    getModule,
    setModuleFetching,
    setModuleVisited
})(Module);
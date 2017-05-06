import React from 'react'
import {connect} from 'react-redux'

import {currentModule} from 'js/functions/stateHelpers'

import Loading from 'js/Components/Loading/Loading'
import ModuleHeader from './ModuleHeader'
import ModuleSummary from './ModuleSummary'
import ModuleDetail from './ModuleDetail'
import ModuleSidebar from './ModuleSidebar'

class Module extends React.Component {
    get hasModule() {
        const module = this.props.module;
        const index = this.props.indexModule;

        let hasStateModule = module && module.id && module.id === this.props.moduleId,
            hasIndexModule = index && index.id && index.id === this.props.moduleId;
        return hasStateModule || hasIndexModule;
    }

    get module() {
        return this.props.indexModule.id ? this.props.indexModule : this.props.module;
    }

    renderComponent() {
        return (
            <div className="outerContainer p-2">
                <div className="row">
                    <div className="col-8">
                        <ModuleHeader module={this.module}/>
                        <ModuleSummary module={this.module}/>
                        <ModuleDetail module={this.module}/>
                    </div>
                    <div className="col">
                        <ModuleSidebar module={this.module}/>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return this.hasModule ? this.renderComponent() : <Loading/>;
    }
}

function mapStateToProps(state) {
    return {
        module: currentModule(state)
    }
}

export default connect(mapStateToProps)(Module);
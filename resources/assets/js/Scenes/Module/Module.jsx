import React from 'react'
import {connect} from 'react-redux'

import {getModule} from 'js/actions/modules'

import ModuleDetail from './ModuleDetail'
import ModuleHeader from './ModuleHeader'
import ModuleSidebar from './ModuleSidebar'

class Module extends React.Component {
    componentDidMount() {
        this.props.getModule(this.props.match.params.id);
    }

    render() {
        return (
            <div className="outerContainer p-2">
                <div className="row">
                    <div className="col-8">
                        <ModuleHeader module={this.props.module} />
                        <ModuleDetail module={this.props.module} />
                    </div>
                    <div className="col">
                        <ModuleSidebar module={this.props.module} />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        module: state.modules.currentModule(state.modules.moduleHistory)
    }
}

export default connect(mapStateToProps, {getModule})(Module);
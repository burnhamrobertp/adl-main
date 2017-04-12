import React from 'react'
import {connect} from 'react-redux';

import {getModule} from 'js/actions/modules';

class Module extends React.Component {
    componentDidMount() {
        this.props.getModule(this.props.match.params.id);
    }

    render() {
        return (
            <div className="outerContainer p-2">
                <div className="row">
                    <div className="col-8">

                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const
        historyLength = state.modules.moduleHistory.length,
        hasHistory = historyLength > 0;

    return {
        module: hasHistory ? state.modules.moduleHistory[historyLength-1] : {}
    }
}

export default connect(mapStateToProps, {getModule})(Module);
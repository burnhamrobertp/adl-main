import React from 'react'
import {connect} from 'react-redux';

import Module from './Components/Module'
import {getModules} from 'js/actions/modules';

class Modules extends React.Component {
    componentDidMount() {
        this.props.getModules();
    }
    
    renderModuleList(){
        return this.props.modules.map((module) =>
            <Module key={module.id} data={module} />
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
                    <div id="adl-search-summary" className="col float-right text-right">{this.props.modules.length} Adventures Found</div>
                </div>

                {this.renderModuleList()}
            </div>
        )
    }
}

Modules.defaultProps = {
    modules : []
};

function mapStateToProps( state ) {
    return {
        modules : state.modules.index
    };
}

export default connect( mapStateToProps, {getModules} )( Modules );
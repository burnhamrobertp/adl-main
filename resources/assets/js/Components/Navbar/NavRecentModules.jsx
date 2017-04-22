import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class NavRecentModules extends React.Component {
    renderRecentModules() {
        return this.props.recentModules.map((module) =>
            <Link key={module.id} to={"/module/" + module.id } className="dropdown-item">
                {module.name}
            </Link>
        );
    }

    render() {
        if (this.props.recentModules.length === 0)
            return null;

        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                   aria-expanded="false">
                    Recently Viewed
                </a>
                <div className="dropdown-menu">
                    {this.renderRecentModules()}
                </div>
            </li>
        )
    }
}

function mapStateToProps(state) {
    return {
        recentModules: state.modules.moduleHistory
    }
}

export default connect(mapStateToProps)(NavRecentModules)
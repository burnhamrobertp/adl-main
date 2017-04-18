import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import NavProfile from './NavProfile'

class Navbar extends React.Component {
    renderRecentModules() {
        return this.props.recentModules.map((module) =>
            <Link key={module.id} to={"/module/" + module.id } className="dropdown-item">
                {module.name}
            </Link>
        );
    }

    renderModuleHistory() {
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

    render() {
        return (
            <div id="adl-navbar">
                <div className="container">
                    <nav className="navbar navbar-toggleable-md navbar-light">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <a className="navbar-brand" href="#">
                            <img src="/media/adl_logo.svg" className="d-inline-block align-top" alt=""/>
                            Adventure Lookup
                        </a>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link" activeClassName="active" exact>Home</NavLink>
                                </li>
                                {this.renderModuleHistory()}
                            </ul>

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavProfile />
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        recentModules: state.modules.moduleHistory
    }
}

export default connect(mapStateToProps)(Navbar);
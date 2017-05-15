import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import NavRecentModules from './NavRecentModules'
import NavProfile from './NavProfile'
import NavLogin from './NavLogin'

import {setUserFetching, getUser} from 'js/actions/user';

class Navbar extends React.Component {
    componentDidMount() {
        this.props.getUser();
    }

    renderLoginProfile() {
        if (this.props.user.isFetching)
            return '';
        else if (this.props.user.id)
            return <NavProfile />;
        else
            return <NavLogin />;
    }

    render() {
        return (
            <div id="adl-navbar-container">
                <div className="container">
                    <nav className="navbar navbar-toggleable-md navbar-light">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#adl-navitems" aria-controls="adl-navitems"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>

                        <NavLink className="navbar-brand" to="/">
                            <img src="/media/adl_logo.svg" className="d-inline-block" alt=""/>
                            Adventure Lookup
                        </NavLink>

                        <div id="adl-navitems">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact to="/module/new" className="nav-link" activeClassName="active">
                                        New Adventure
                                    </NavLink>
                                </li>

                                <NavRecentModules/>
                            </ul>

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    {this.renderLoginProfile()}
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
        user: state.user
    }
}

export default connect(mapStateToProps, {setUserFetching, getUser})(Navbar)
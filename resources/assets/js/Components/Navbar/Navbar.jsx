import React from 'react';
import {NavLink} from 'react-router-dom'

import NavProfile from './NavProfile'

class Navbar extends React.Component {
    render() {
        return (
            <div id="adl-navbar">
                <div className="container">
                    <nav className="navbar navbar-toggleable-md navbar-light">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>

                        <a className="navbar-brand" href="#">
                            <img src="/media/adl_logo.svg" className="d-inline-block align-top" alt="" />
                                Adventure Lookup
                        </a>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link" activeClassName="active" exact>Home</NavLink>
                                </li>
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

export default Navbar;
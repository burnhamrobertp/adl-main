import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div className="container-fluid bg-darker py-2">
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
                            </ul>

                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Register / Login</a>
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
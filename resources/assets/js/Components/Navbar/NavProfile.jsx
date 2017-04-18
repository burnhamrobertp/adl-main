import React from 'react'
import {connect} from 'react-redux'

import LoginRegisterModal from 'js/Components/LoginRegisterModal/LoginRegisterModal'

import {setLoginRegisterOpen, getLogout} from 'js/actions/user';

class NavProfile extends React.Component {
    openLoginRegisterModal() {
        this.props.setLoginRegisterOpen(true);
    }

    logout() {
        this.props.getLogout();
    }

    renderProfile() {
        return (
            <ul className="navbar-nav dropdown">
                <li className="nav-item">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                       aria-expanded="false">
                        {this.props.user.display}
                    </a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" onClick={this.logout.bind(this)}>Logout</a>
                    </div>
                </li>
            </ul>
        );
    }

    renderLoginRegister() {
        return (
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={this.openLoginRegisterModal.bind(this)}>Register /
                            Login</a>
                    </li>
                </ul>

                <LoginRegisterModal />
            </div>
        );
    }

    render() {
        if (this.props.user.id)
            return this.renderProfile();
        else
            return this.renderLoginRegister();
    }

}

function MapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(MapStateToProps, {setLoginRegisterOpen, getLogout})(NavProfile)
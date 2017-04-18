import React from 'react'
import {connect} from 'react-redux'

import LoginRegisterModal from 'js/Components/LoginRegisterModal/LoginRegisterModal'

import {setLoginRegisterOpen} from 'js/actions/user';

class NavProfile extends React.Component {
    renderProfile() {
        return (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">{this.props.user.display}</a>
                </li>
            </ul>
        );
    }

    openLoginRegisterModal() {
        this.props.setLoginRegisterOpen(true);
    }

    renderLoginRegister() {
        return (
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={this.openLoginRegisterModal.bind(this)}>Register / Login</a>
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

export default connect(MapStateToProps, {setLoginRegisterOpen})(NavProfile)
import React from 'react'
import {connect} from 'react-redux'

import LoginRegisterModal from 'js/Components/LoginRegisterModal/LoginRegisterModal'

import {setLoginRegisterOpen} from 'js/actions/user';

class NavLogin extends React.Component {
    openLoginRegisterModal() {
        this.props.setLoginRegisterOpen(true);
    }

    render() {
        return (
            <div id="adl-navbar-login">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" onClick={this.openLoginRegisterModal.bind(this)}>Register / Login</a>
                    </li>
                </ul>

                <LoginRegisterModal />
            </div>
        )
    }
}

export default connect(() => {
    return {}
}, {setLoginRegisterOpen})(NavLogin)
import React from 'react'
import {connect} from 'react-redux';

import {
    setLoginRegisterEmail,
    setLoginRegisterPassword,
    getAttemptLogin
} from 'js/actions/user';

class LoginRegister extends React.Component {
    changeEmail(event) {
        this.props.setLoginRegisterEmail(event.target.value)
    }

    attemptLogin() {
        this.props.getAttemptLogin(this.props.userModal.email, document.getElementById('adl-logreg-pass').value);
    }

    render() {
        return (
            <div id="adl-logreg">
                <h5>Sign In / Register</h5>

                <label htmlFor="adl-logreg-email" className="sr-only">Email address</label>
                <input id="adl-logreg-email" type="text" className="form-control" placeholder="Email address" onChange={this.changeEmail.bind(this)} />

                <label htmlFor="adl-logreg-pass" className="sr-only">Password</label>
                <input id="adl-logreg-pass" type="password" className="form-control" placeholder="Password" />

                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.attemptLogin.bind(this)}>Sign in</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userModal: state.user.loginRegisterModal
    }
}

export default connect(mapStateToProps, {
    setLoginRegisterEmail,
    setLoginRegisterPassword,
    getAttemptLogin
})(LoginRegister)
import React from 'react'
import {connect} from 'react-redux';

import {setLoginRegisterEmail, setLoginRegisterPassword} from 'js/actions/user';

class LoginRegister extends React.Component {
    changeEmail(event) {
        this.props.setLoginRegisterEmail(event.target.value)
    }

    changePassword(event) {
        this.props.setLoginRegisterPassword(event.target.value)
    }

    render() {
        return (
            <div id="adl-logreg">
                <h5>Sign In / Register</h5>

                <label htmlFor="adl-logreg-email" className="sr-only">Email address</label>
                <input id="adl-logreg-email" type="text" className="form-control" placeholder="Email address" required onChange={this.changeEmail.bind(this)} />

                <label htmlFor="adl-logreg-pass" className="sr-only">Password</label>
                <input id="adl-logreg-pass" type="password" className="form-control" placeholder="Password" required onChange={this.changePassword.bind(this)} />

                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.user.loginRegisterModal
    }
}

export default connect(mapStateToProps, {setLoginRegisterEmail, setLoginRegisterPassword})(LoginRegister)
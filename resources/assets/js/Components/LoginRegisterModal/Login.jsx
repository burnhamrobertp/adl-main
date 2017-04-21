import React from 'react'
import {connect} from 'react-redux'

import {
    setLoginRegisterEmail,
    setActiveComponent,
    getLogin
} from 'js/actions/user';

class Login extends React.Component {
    clickRegister() {
        this.props.setActiveComponent('register');
    }

    changeEmail(event) {
        this.props.setLoginRegisterEmail(event.target.value)
    }

    submit() {
        const email = this.props.email,
            password = document.querySelector('#adl-logreg-pass').value;

        this.props.getLogin(email, password);
    }

    render() {
        return (
            <div>
                <div>Have an account?</div>

                <label htmlFor="adl-logreg-email" className="sr-only">Email address</label>
                <input id="adl-logreg-email" type="text"  placeholder="Email address"
                       onChange={this.changeEmail.bind(this)} value={this.props.email} />

                <label htmlFor="adl-logreg-pass" className="sr-only">Password</label>
                <input id="adl-logreg-pass" type="password" placeholder="Password" />

                <button className="submit" type="submit" onClick={this.submit.bind(this)}>Log in</button>

                <hr />

                <div className="registerButton">
                    <div className="registerButtonHeader">New to Adventure Lookup?</div>
                    <button onClick={this.clickRegister.bind(this)}>Sign Up</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        email: state.user.loginRegisterModal.email
    }
}

export default connect(mapStateToProps, {
    setLoginRegisterEmail,
    setActiveComponent,
    getLogin
})(Login);
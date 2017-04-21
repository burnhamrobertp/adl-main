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

    clickForgot() {
        this.props.setActiveComponent('forgot');
    }

    changeEmail(event) {
        this.props.setLoginRegisterEmail(event.target.value)
    }

    submit() {
        const data = {
            email: this.props.email,
            password: document.querySelector('#adl-logreg-pass').value,
            remember: document.querySelector('#adl-logreg-remember').value || 0
        };

        this.props.getLogin(data);
    }

    render() {
        return (
            <div>
                <div>Have an account?</div>

                <label htmlFor="adl-logreg-email" className="sr-only">Email address</label>
                <input id="adl-logreg-email" type="text" placeholder="Email address"
                       onChange={this.changeEmail.bind(this)} value={this.props.email}/>

                <label htmlFor="adl-logreg-pass" className="sr-only">Password</label>
                <input id="adl-logreg-pass" type="password" placeholder="Password"/>

                <label className="remember-me">
                    <input id="adl-logreg-remember" type="checkbox" className="custom-control-input" value="1"/>
                    <span className="custom-control-indicator"/>
                    <span className="custom-control-description">Remember me</span>
                </label>

                <a className="forgot-password" href="#" onClick={this.clickForgot.bind(this)}>Forgot password</a>

                <button className="submit" type="submit" onClick={this.submit.bind(this)}>Log in</button>

                <hr />

                <div className="switchComponent">
                    <div>New to Adventure Lookup?</div>
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
import React from 'react'
import {connect} from 'react-redux'

import {haveValue, equalHasValue} from 'js/functions/validation'

import {
    setLoginRegisterEmail,
    setActiveComponent,
    getRegister
} from 'js/actions/user'

class Register extends React.Component {
    clickLogin() {
        this.props.setActiveComponent('login');
    }

    changeEmail(event) {
        this.props.setLoginRegisterEmail(event.target.value)
    }

    submit() {
        const email = this.props.email,
            password = document.getElementById('adl-logreg-pass').value,
            passwordc = document.getElementById('adl-logreg-passc').value;

        this.props.getRegister(email, password, passwordc);
    }

    render() {
        return (
            <div>
                <div>New to Adventure Lookup?</div>
                <label htmlFor="adl-logreg-email" className="sr-only">Email address</label>
                <input id="adl-logreg-email" type="text" className="form-control" placeholder="Email address"
                       onChange={this.changeEmail.bind(this)}
                       value={this.props.email}/>

                <label htmlFor="adl-logreg-pass" className="sr-only">Password</label>
                <input id="adl-logreg-pass" type="password" className="form-control" placeholder="Password"/>

                <label htmlFor="adl-logreg-passc" className="sr-only">Confirm Password</label>
                <input id="adl-logreg-passc" type="password" className="form-control" placeholder="Confirm Password"/>

                <button className="submit" type="submit" onClick={this.submit.bind(this)}>Sign Up</button>

                <hr />

                <div className="registerButton">
                    <div className="registerButtonHeader">Have an account?</div>
                    <button onClick={this.clickLogin.bind(this)}>Log in</button>
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
    getRegister
})(Register);
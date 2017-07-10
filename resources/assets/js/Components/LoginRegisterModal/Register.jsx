import React from 'react'
import {connect} from 'react-redux'

import {haveValue, equalHasValue} from 'js/functions/validation'

import {
    setLoginRegisterEmail,
    setActiveComponent,
    getRegister
} from 'js/actions/user'

class Register extends React.Component {
    onClickLogin() {
        this.props.setActiveComponent('login');
    }

    onChangeEmail(event) {
        this.props.setLoginRegisterEmail(event.target.value)
    }

    onSubmit() {
        const form = {
            email: this.props.email,
            password: document.getElementById('adl-logreg-pass').value,
            password_confirmation: document.getElementById('adl-logreg-passc').value
        };

        this.props.getRegister(form);
    }

    render() {
        return (
            <div>
                <div>New to Adventure Lookup?</div>
                <label htmlFor="adl-logreg-email" className="sr-only">Email address</label>
                <input id="adl-logreg-email" type="text" className="form-control" placeholder="Email address"
                       onChange={this.onChangeEmail.bind(this)}
                       value={this.props.email}/>

                <label htmlFor="adl-logreg-pass" className="sr-only">Password</label>
                <input id="adl-logreg-pass" type="password" className="form-control" placeholder="Password"/>

                <label htmlFor="adl-logreg-passc" className="sr-only">Confirm Password</label>
                <input id="adl-logreg-passc" type="password" className="form-control" placeholder="Confirm Password"/>

                <button className="submit" type="submit" onClick={this.onSubmit.bind(this)}>Sign Up</button>

                <hr />

                <div className="switchComponent">
                    <div>Have an account?</div>
                    <button onClick={this.onClickLogin.bind(this)}>Log in</button>
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
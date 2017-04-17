import React from 'react'
import {connect} from 'react-redux';

import {
    setLoginRegisterEmail,
    getLogin
} from 'js/actions/user';

class Login extends React.Component {
    changeEmail(event) {
        this.props.setLoginRegisterEmail(event.target.value)
    }

    submit() {
        const email = this.props.email,
            password = document.getElementById('adl-logreg-pass').value;

        this.props.getLogin(email, password);
    }

    renderMessage() {
        return (
            <div className={"alert alert-" + this.props.messageClass} role="alert">
                {this.props.message}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderMessage()}

                <label htmlFor="adl-logreg-email" className="sr-only">Email address</label>
                <input id="adl-logreg-email" type="text" className="form-control" placeholder="Email address"
                       onChange={this.changeEmail.bind(this)} value={this.props.email} />

                <label htmlFor="adl-logreg-pass" className="sr-only">Password</label>
                <input id="adl-logreg-pass" type="password" className="form-control" placeholder="Password" />

                <button className="btn btn-lg btn-primary btn-block" type="submit"
                        onClick={this.submit.bind(this)}>Sign in
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        email: state.user.loginRegisterModal.email,
        message: state.user.loginRegisterModal.login.flashMessage,
        messageClass: state.user.loginRegisterModal.login.flashMessageClass
    }
}

export default connect(mapStateToProps, {
    setLoginRegisterEmail,
    getLogin
})(Login);
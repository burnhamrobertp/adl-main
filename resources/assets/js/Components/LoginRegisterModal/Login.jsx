import React from 'react'
import {connect} from 'react-redux';
import renderHTML from 'react-render-html'

import ForgotPassword from 'js/Components/ForgotPassword/ForgotPassword'

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

    renderMessages() {
        if (this.props.messages.length === 0)
            return '';

        const message = this.props.messages.reduce((accum, m) => accum + '<br>' + m);

        return (
            <div className="alert alert-danger" role="alert">
                {renderHTML(message)}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderMessages()}

                <label htmlFor="adl-logreg-email" className="sr-only">Email address</label>
                <input id="adl-logreg-email" type="text" className="form-control" placeholder="Email address"
                       onChange={this.changeEmail.bind(this)} value={this.props.email} />

                <label htmlFor="adl-logreg-pass" className="sr-only">Password</label>
                <input id="adl-logreg-pass" type="password" className="form-control" placeholder="Password" />

                <ForgotPassword/>

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
        messages: state.user.loginRegisterModal.login.flashMessages
    }
}

export default connect(mapStateToProps, {
    setLoginRegisterEmail,
    getLogin
})(Login);
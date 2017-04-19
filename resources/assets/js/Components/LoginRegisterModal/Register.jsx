import React from 'react'
import {connect} from 'react-redux'
import renderHTML from 'react-render-html'

import {haveValue, equalHasValue} from 'js/functions/validation'

import {
    setLoginRegisterEmail,
    setRegisterMessages,
    getRegister
} from 'js/actions/user'

class Register extends React.Component {
    changeEmail(event) {
        this.props.setLoginRegisterEmail(event.target.value)
    }

    submit() {
        const email = this.props.email,
            password = document.getElementById('adl-logreg-pass').value,
            passwordc = document.getElementById('adl-logreg-passc').value;

        this.props.getRegister(email, password, passwordc);
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
                       onChange={this.changeEmail.bind(this)}
                       value={this.props.email} />

                <label htmlFor="adl-logreg-pass" className="sr-only">Password</label>
                <input id="adl-logreg-pass" type="password" className="form-control" placeholder="Password" />

                <label htmlFor="adl-logreg-passc" className="sr-only">Confirm Password</label>
                <input id="adl-logreg-passc" type="password" className="form-control" placeholder="Confirm Password" />

                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.submit.bind(this)}>
                    Register
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        email: state.user.loginRegisterModal.email,
        messages: state.user.loginRegisterModal.register.flashMessages
    }
}

export default connect(mapStateToProps, {
    setLoginRegisterEmail,
    setRegisterMessages,
    getRegister
})(Register);
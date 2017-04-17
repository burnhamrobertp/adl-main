import React from 'react'
import {connect} from 'react-redux';

import {
    setLoginRegisterEmail,
    getAttemptRegiser
} from 'js/actions/user';

class Register extends React.Component {
    changeEmail(event) {
        this.props.setLoginRegisterEmail(event.target.value)
    }

    submit() {
        const email = this.props.loginRegisterModal.email,
            password = document.getElementById('adl-logreg-pass');

        this.props.getAttemptRegister(email, password);
    }

    renderMessage() {
        console.log(this.props.message);
    }

    render() {
        return (
            <div>
                {this.renderMessage()}

                <label htmlFor="adl-logreg-email" className="sr-only">Email address</label>
                <input id="adl-logreg-email" type="text" className="form-control" placeholder="Email address"
                       onChange={this.changeEmail.bind(this)} value={this.props.loginRegisterModal.email} />

                <label htmlFor="adl-logreg-email" className="sr-only">Confirm Email address</label>
                <input id="adl-logreg-email" type="text" className="form-control" placeholder="Confirm Email address" />

                <label htmlFor="adl-logreg-pass" className="sr-only">Password</label>
                <input id="adl-logreg-pass" type="password" className="form-control" placeholder="Password" />

                <label htmlFor="adl-logreg-pass" className="sr-only">Confirm Password</label>
                <input id="adl-logreg-pass" type="password" className="form-control" placeholder="Confirm Password" />

                <button className="btn btn-lg btn-primary btn-block" type="submit"
                        onClick={this.submit.bind(this)}>Sign in
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loginRegisterModal: state.user.loginRegisterModal,
        message: state.user.loginRegisterModal.register.flashMessage,
        messageClasses: state.user.loginRegisterModal.register.flashMessageClasses
    }
}

export default connect(mapStateToProps, {
    setLoginRegisterEmail,
    getAttemptRegiser
})(Register);
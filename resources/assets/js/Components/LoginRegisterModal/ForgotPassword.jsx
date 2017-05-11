import React from 'react'
import {connect} from 'react-redux'

import {
    setLoginRegisterEmail,
    getForgotPassword
} from 'js/actions/user';

class ForgotPassword extends React.Component {
    submit() {
        this.props.getForgotPassword(this.props.email);
    }

    changeEmail(event) {
        this.props.setLoginRegisterEmail(event.target.value)
    }

    render() {
        return (
            <div>
                <div>Forgot password?</div>

                <label htmlFor="adl-logreg-email" className="sr-only">Email address</label>
                <input id="adl-logreg-email" type="text" placeholder="Email address"
                       onChange={this.changeEmail.bind(this)} value={this.props.email}/>

                <button className="submit" type="submit" onClick={this.submit.bind(this)}>Reset</button>
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
    getForgotPassword
})(ForgotPassword)
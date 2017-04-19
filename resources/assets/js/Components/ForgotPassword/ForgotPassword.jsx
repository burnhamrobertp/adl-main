import React from 'react'
import {connect} from 'react-redux'

import {getForgotPassword} from 'js/actions/user';

class ForgotPassword extends React.Component {
    click() {
        this.props.getForgotPassword(this.props.email);
    }

    render() {
        return (
            <a onClick={this.click.bind(this)}>Forgot Password</a>
        )
    }
}

function mapStateToProps(state) {
    return {
        email: state.user.loginRegisterModal.email
    }
}

export default connect(mapStateToProps, {getForgotPassword})(ForgotPassword)
import React from 'react'
import {connect} from 'react-redux'
import renderHTML from 'react-render-html'

import Login from './Login'
import Register from './Register'
import ForgotPassword from './ForgotPassword'

class LoginRegister extends React.Component {
    get messages() {
        return this.props.messages
    }

    renderMessages() {
        if (this.messages.length === 0)
            return '';

        const message = Object.keys(this.messages).reduce((accum, k) => accum + this.messages[k]+ '<br>' , '');

        return (
            <div className={"alert alert-" + this.props.messageClass} role="alert">
                {renderHTML(message)}
            </div>
        )
    }

    renderActiveComponent() {
        switch (this.props.activeComponent) {
            case 'register':
                return <Register />;
            case 'forgot':
                return <ForgotPassword />;
            case 'login':
            default:
                return <Login />;
        }
    }

    render() {
        return (
            <div id="adl-logreg">
                {this.renderMessages()}
                {this.renderActiveComponent()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        messages: state.user.loginRegisterModal.flashMessages,
        messageClass: state.user.loginRegisterModal.flashMessageClass,
        activeComponent: state.user.loginRegisterModal.activeComponent
    }
}

export default connect(mapStateToProps)(LoginRegister)
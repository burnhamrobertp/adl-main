import React from 'react'
import Modal from 'react-modal'
import {connect} from 'react-redux';

import LoginRegister from './LoginRegister'

import {setLoginRegisterOpen} from 'js/actions/user';

class LoginRegisterModal extends React.Component {
    getStyle() {
        return {
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.20)',
                zIndex: '1000'
            },
            content: {
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: '1000',
                width: '400px'
            }
        }
    }

    closeModal() {
        this.props.setLoginRegisterOpen(false);
    }

    render() {
        return (
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={this.closeModal.bind(this)}
                style={this.getStyle()}
                contentLabel="Login / Register"
            >
                <LoginRegister />
            </Modal>
        );
    }
}

function mapStateToProps(state) {
    return {
        isOpen: state.user.loginRegisterModal.isOpen
    }
}

export default connect(mapStateToProps, {setLoginRegisterOpen})(LoginRegisterModal)
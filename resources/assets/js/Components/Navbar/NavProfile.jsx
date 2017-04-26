import React from 'react'
import {connect} from 'react-redux'

import {getLogout, getVerficiationEmail} from 'js/actions/user';

class NavProfile extends React.Component {
    logout() {
        this.props.getLogout();
    }

    renderAvatar() {
        return (
            <img src={"https://www.gravatar.com/avatar/" + this.props.user.avatar + "?s=40&d=mm"}
                 className="d-inline-block"/>
        )
    }

    renderVerificationButton() {
        if (this.props.user.verified)
            return '';
        else
            return <a className="dropdown-item" onClick={this.props.getVerificationEmail}>Resend Verification E-mail</a>;
    }

    renderRole() {
        return <div className="dropdown-display">Role: {this.props.user.role.name}</div>;
    }

    render() {
        return (
            <ul className="navbar-nav dropdown">
                <li className="nav-item">
                    <a id="adl-navbar-profile-link" className="nav-link dropdown-toggle" data-toggle="dropdown"
                       aria-haspopup="true" aria-expanded="false">
                        {this.renderAvatar()}
                        {this.props.user.display}
                    </a>
                    <div className="dropdown-menu">
                        {this.renderVerificationButton()}
                        <a className="dropdown-item" onClick={this.logout.bind(this)}>Logout</a>
                        <div className="dropdown-divider"/>
                        {this.renderRole()}
                    </div>
                </li>
            </ul>
        )
    }

}

function MapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(MapStateToProps, {getLogout, getVerficiationEmail})(NavProfile)
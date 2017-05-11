import React from 'react'
import {Link} from 'react-router-dom'

import ModuleContributor from './Components/ModuleContributor'

class ModuleSidebar extends React.Component {
    renderEdit() {
        return (
            <div className="mb-2 text-center">
                <Link to={`edit/${this.props.module.id}`}>
                    <button className="btn btn-primary">Edit Adventure</button>
                </Link>
                {' '}
                <Link to={`history/${this.props.module.id}`}>
                    <button className="btn btn-primary" disabled>View History</button>
                </Link>
            </div>
        )
    }

    renderCover() {
        return (
            <img src={this.props.module.large_cover} />
        )
    }

    renderContributors() {
        return this.props.module.contributors.map((contributor) =>
            <ModuleContributor key={contributor.id} contributor={contributor} />
        );
    }

    renderActions() {

    }

    render() {
        return (
            <div className="moduleSidebar">
                <div className="edit">
                    {this.renderEdit()}
                </div>
                <div className="cover">
                    {this.renderCover()}
                </div>
                <div className="moduleBox">
                    <h6>Writers / Artists</h6>
                    {this.renderContributors()}
                </div>
                <div className="moduleBox">
                    {this.renderActions()}
                </div>
            </div>
        )
    }
}

export default ModuleSidebar;
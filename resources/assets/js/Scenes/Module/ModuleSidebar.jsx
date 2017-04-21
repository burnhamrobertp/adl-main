import React from 'react'

import ModuleContributor from './Components/ModuleContributor'

class ModuleSidebar extends React.Component {
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
                <div className="cover">
                    {this.renderCover()}
                </div>
                <div className="m-2 p-2 bg-dark rounded">
                    <h6>Writers / Artists</h6>
                    {this.renderContributors()}
                </div>
                <div className="m-2 p-2 bg-dark rounded">
                    {this.renderActions()}
                </div>
            </div>
        )
    }
}

export default ModuleSidebar;
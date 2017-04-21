import React from 'react'

class ModuleContributor extends React.Component {
    render() {
        return (
            <div>{this.props.contributor.name}</div>
        )
    }
}

export default ModuleContributor;
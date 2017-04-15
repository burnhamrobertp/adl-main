import React from 'react'

class ModuleItem extends React.Component {
    render() {
        return (
            <div className="moduleItem">{this.props.item.name}</div>
        )
    }
}

export default ModuleItem
import React from 'react'
import classNames from 'classnames/bind'

class ModuleCreature extends React.Component {
    getClasses() {
        return classNames({
            moduleCreature: true,
            unique: this.props.creature.unique
        });
    }

    render() {
        return (
            <div className={this.getClasses()}>{this.props.creature.name}</div>
        )
    }
}

export default ModuleCreature
import React from 'react'

class Module extends React.Component {
    render() {
        const module = this.props.data;
        return (
            <div className="p-2 row">
                <div className="col">{module.name}</div>
            </div>
        )
    }
}

export default Module;
import React from 'react'

class ModuleDetail extends React.Component {
    renderFormats() {
        return (
            <div>
                <h6>Available Formats</h6>
            </div>
        )
    }

    renderCreatures() {
        return (
            <div>
                <h6>Notable Creatures</h6>
            </div>
        )
    }

    renderItems() {
        return (
            <div>
                <h6>Items</h6>
            </div>
        )
    }

    render() {
        return (
            <div className="moduleDetail">
                <div className="row">
                    <div className="col">
                        {this.renderFormats()}
                    </div>
                </div>
                <div className="row">
                    <div className="col m-2 p-2 bg-dark rounded">
                        {this.renderCreatures()}
                    </div>
                    <div className="col m-2 p-2 bg-dark rounded">
                        {this.renderItems()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ModuleDetail;
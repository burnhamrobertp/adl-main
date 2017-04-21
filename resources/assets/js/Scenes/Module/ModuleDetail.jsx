import React from 'react'

import ModuleCreature from './Components/ModuleCreature'
import ModuleItem from './Components/ModuleItem'

class ModuleDetail extends React.Component {
    renderFormats() {
        return (
            <div>
                <h6>Available Formats</h6>
            </div>
        )
    }

    renderCreatures() {
        return this.props.module.creatures.map((creature) =>
            <ModuleCreature key={creature.id} creature={creature} />
        );
    }

    renderItems() {
        return this.props.module.items.map((item) =>
            <ModuleItem key={item.id} item={item} />
        );
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
                        <h6>NPCs & Creatures</h6>
                        {this.renderCreatures()}
                    </div>
                    <div className="col m-2 p-2 bg-dark rounded">
                        <h6>Items</h6>
                        {this.renderItems()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ModuleDetail;
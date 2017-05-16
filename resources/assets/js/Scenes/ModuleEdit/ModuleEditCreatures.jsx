import React from 'react'
import {connect} from 'react-redux'

class ModuleEditCreatures extends React.Component {
    get creatures() {
        return this.props.creatures;
    }

    searchCreature(event) {
        const v = event.target.value;
    }

    removeCreature(id) {
        creatures = this.creatures.filter((e) => e.id !== id);
    }

    renderCreatures() {
        if (!this.creatures)
            return [];

        return this.creatures.map((creature) =>
            <div key={creature.id} className="row">
                <div className="col-11">{creature.name}</div>
                <div className="col-1 text-right">
                    <i className="fa fa-times" aria-hidden="true"
                       onClick={this.removeCreature.bind(this, creature.id)}/>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" className="form-control" placeholder="Add NPC or Creature"
                           onChange={this.searchCreature.bind(this)}/>
                </div>
                {this.renderCreatures()}
            </div>
        )
    }
}

const mapState = (state) => ({
    creatures: state.modules.editing.creatures
});

export default connect(mapState)(ModuleEditCreatures)
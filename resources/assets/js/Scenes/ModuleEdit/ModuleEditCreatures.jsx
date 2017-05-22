import React from 'react'
import {connect} from 'react-redux'

import {setModuleEditingPiece} from 'js/actions/modules'
import {getCreatures} from 'js/actions/creatures'

import debounce from 'debounce'

class ModuleEditCreatures extends React.Component {
    componentWillMount() {
        this._searchCreature = debounce(event => {
            const v = event.target.value;
            this.props.getCreatures({name: v});
        }, 350);
    }

    get creatures() {
        return this.props.creatures;
    }

    searchCreature(event) {
        event.persist();
        this._searchCreature(event);
    }

    removeCreature(id) {
        const creatures = this.creatures.filter((e) => e.id !== id);
        this.props.setModuleEditingPiece({creatures: creatures});
    }

    renderCreatureSearchResults() {
        if (!this.props.creatureSearch.length)
            return null;

        return this.props.creatureSearch.map(creature =>
            <div key={creature.id}>
                {creature.name}
            </div>
        );
    }

    renderCreatures() {
        if (!this.creatures)
            return null;

        return this.creatures.map((creature) =>
            <div key={creature.id} className="row">
                <div className="col-11">{creature.name}</div>
                <div className="col-1 text-right">
                    <i className="fa fa-times link" aria-hidden="true"
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
                <div className="p-1">
                    {this.renderCreatures()}
                </div>
                <div className="creatureSearchResults">
                    {this.renderCreatureSearchResults()}
                </div>
            </div>
        )
    }
}

const mapState = (state) => ({
    creatures: state.modules.editing.creatures,
    creatureSearch: state.creatures.search
});

export default connect(mapState, {
    setModuleEditingPiece,
    getCreatures
})(ModuleEditCreatures)
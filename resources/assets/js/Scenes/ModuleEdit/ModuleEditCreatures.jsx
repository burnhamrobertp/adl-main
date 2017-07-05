import React from 'react'
import {connect} from 'react-redux'

import {setModuleEditingPiece} from 'js/actions/modules'
import {getCreatures, setCreatures} from 'js/actions/creatures'

import Autosuggest from 'react-autosuggest'

class ModuleEditCreatures extends React.Component {
    get creatures() {
        return this.props.creatures;
    }

    removeCreature(id) {
        const creatures = this.creatures.filter((e) => e.id !== id);
        this.props.setModuleEditingPiece({creatures: creatures});
    }

    onSuggestionsFetchRequested(value) {

    }

    onSuggestionsClearRequested() {
        this.props.setCreatures({});
    }

    // renderCreatureSearchResults() {
    //     if (!this.props.creatureSearch.length)
    //         return null;
    //
    //     return this.props.creatureSearch.map(creature =>
    //         <div key={creature.id}>
    //             {creature.name}
    //         </div>
    //     );
    // }

    renderSuggestion(suggestion) {
        return (
            <div>
                {suggestion.name}
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
        const suggestProps = {
            placeholder: '',
            null,
        };

        return (
            <div>
                <div>
                    <Autosuggest
                        suggestions={this.creatures}
                        onSuggestionsFetchRequested=""
                        onSuggestionsClearRequested=""
                        getSuggestionValue={suggestion => suggestion.id}
                        renderSuggestion={this.renderSuggestion}
                        inputProps={suggestProps}
                    />
                    {/*<input type="text" className="form-control" placeholder="Add NPC or Creature" onChange={this.searchCreature.bind(this)}/>*/}
                </div>
                <div className="p-1">
                    {this.renderCreatures()}
                </div>
                {/*<div className="creatureSearchResults">*/}
                    {/*{this.renderCreatureSearchResults()}*/}
                {/*</div>*/}
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
    getCreatures,
    setCreatures
})(ModuleEditCreatures)
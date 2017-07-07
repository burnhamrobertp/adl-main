import React from 'react'
import {connect} from 'react-redux'

import {setModuleEditingPiece} from 'js/actions/modules'
import {getCreatures, setCreatures} from 'js/actions/creatures'

import Autosuggest from 'react-autosuggest'

class ModuleEditCreatures extends React.Component {
    constructor() {
        super();

        // Autosuggest needs a default value for its input or else it errors
        this.state = {
            value: ''
        }
    }

    get creatures() {
        return this.props.creatures || [];
    }

    get creatureSearch() {
        return this.props.creatureSearch;
    }

    /**
     * Remove a specific creature from this module's creature list
     * @param id
     */
    removeCreature(id) {
        const creatures = this.creatures.filter((e) => e.id !== id);
        this.props.setModuleEditingPiece({creatures: creatures});
    }

    /**
     * The autosuggest input was changed or an option was clicked
     * @param event
     * @param o
     */
    onSuggestChange(event, o) {
        switch(o.method) {
            // this is necessary for the input to show each letter as its typed
            case 'type':
                this.setState({
                    value: o.newValue
                });
                break;
            // one of the suggests was selected
            case 'click':
                let creatures = this.creatures;
                creatures.push({id: o.newValue.id, name: o.newValue.name});
                this.props.setModuleEditingPiece({creatures: creatures});
                // clear the input
                this.setState({
                    value: ''
                });
                break;
        }
    }

    /**
     * Fetching a new list of creatures based on the current value
     * @param value
     */
    onSuggestionsFetchRequested({value}) {
        this.props.getCreatures({search: value});
    }

    /**
     * Fired periodically for cleanup, also fired when the autosuggest input is cleared
     */
    onSuggestionsClearRequested() {
        this.props.setCreatures([]);
    }

    /**
     * Render each suggestion to be shown by the autosuggest plugin
     * @param suggestion
     * @returns {XML}
     */
    renderSuggestion = (suggestion) => suggestion.name;

    /**
     * Render the creatures assigned to the module we're editing
     */
    renderCreatures() {
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
            placeholder: 'Add NPC or Creature',
            value: this.state.value,
            onChange: this.onSuggestChange.bind(this)
        };

        return (
            <div id="moduleEditCreatures" className="col moduleBox">
                <div>
                    <Autosuggest
                        suggestions={this.creatureSearch}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
                        getSuggestionValue={suggestion => suggestion}
                        renderSuggestion={this.renderSuggestion}
                        inputProps={suggestProps}
                    />
                </div>
                <div className="p-1">
                    {this.renderCreatures()}
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
    getCreatures,
    setCreatures
})(ModuleEditCreatures)
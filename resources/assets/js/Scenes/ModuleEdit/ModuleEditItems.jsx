import React from 'react'
import {connect} from 'react-redux'

import {setModuleEditingPiece} from 'js/actions/modules'
import {getItems, setItems} from 'js/actions/items'

import Autosuggest from 'react-autosuggest'

class ModuleEditItems extends React.Component {
    constructor() {
        super();

        // Autosuggest needs a default value for its input or else it errors
        this.state = {
            value: ''
        }
    }

    get items() {
        return this.props.items || [];
    }

    get itemSearch() {
        return this.props.itemSearch;
    }

    /**
     * Remove a specific item from this module's item list
     * @param id
     */
    removeItem(id) {
        const items = this.items.filter((e) => e.id !== id);
        this.props.setModuleEditingPiece({items: items});
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
                let items = this.items;
                items.push({id: o.newValue.id, name: o.newValue.name});
                this.props.setModuleEditingPiece({items: items});
                // clear the input
                this.setState({
                    value: ''
                });
                break;
        }
    }

    /**
     * Fetching a new list of items based on the current value
     * @param value
     */
    onSuggestionsFetchRequested({value}) {
        this.props.getItems({search: value});
    }

    /**
     * Fired periodically for cleanup, also fired when the autosuggest input is cleared
     */
    onSuggestionsClearRequested() {
        this.props.setItems([]);
    }

    /**
     * Render each suggestion to be shown by the autosuggest plugin
     * @param suggestion
     * @returns {XML}
     */
    renderSuggestion = (suggestion) => suggestion.name;

    /**
     * Render the items assigned to the module we're editing
     */
    renderItems() {
        return this.items.map((item) =>
            <div key={item.id} className="row">
                <div className="col-11">{item.name}</div>
                <div className="col-1 text-right">
                    <i className="fa fa-times link" aria-hidden="true"
                       onClick={this.removeItem.bind(this, item.id)}/>
                </div>
            </div>
        );
    }

    render() {
        const suggestProps = {
            placeholder: 'Add Item',
            value: this.state.value,
            onChange: this.onSuggestChange.bind(this)
        };

        return (
            <div id="moduleEditItems" className="col moduleBox">
                <div>
                    <Autosuggest
                        suggestions={this.itemSearch}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested.bind(this)}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested.bind(this)}
                        getSuggestionValue={suggestion => suggestion}
                        renderSuggestion={this.renderSuggestion}
                        inputProps={suggestProps}
                    />
                </div>
                <div className="p-1">
                    {this.renderItems()}
                </div>
            </div>
        )
    }
}

const mapState = (state) => ({
    items: state.modules.editing.items,
    itemSearch: state.items.search
});

export default connect(mapState, {
    setModuleEditingPiece,
    getItems,
    setItems
})(ModuleEditItems)
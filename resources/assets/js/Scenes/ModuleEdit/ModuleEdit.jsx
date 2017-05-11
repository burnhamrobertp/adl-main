import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {
    getModule,
    setModuleFetching,
    setModuleVisited,
    putModule
} from 'js/actions/modules'
import {currentModule} from 'js/functions/stateHelpers'

import Loading from 'js/Components/Loading/Loading'

/**
 * Displays the form and inputs for modifying and creating modules
 *
 * In addition to standard forms, also displays functionality for uploading module images, performs lookup
 * for creatures, items, contributors, etc. to facilitate tying them to a module. Lastly, interfaces with
 * other components for creating new creatures, items, contributors, etc. that do not already exist in ADL.
 */
class ModuleEdit extends React.Component {
    get isNewModule() {
        return this.props.moduleId === 'new';
    }

    get hasModule() {
        const module = this.props.module;
        const index = this.props.indexModule;

        let hasStateModule = module && module.id && module.id === this.props.moduleId,
            hasIndexModule = index && index.id && index.id === this.props.moduleId;
        return hasStateModule || hasIndexModule;
    }

    get module() {
        if (this.props.indexModule && this.props.indexModule.id)
            return this.props.indexModule;
        else if (this.props.module && this.props.module.id)
            return this.props.module;
        else
            return {};
    }

    save() {
        let form = new FormData(document.getElementById('moduleEdit'));

        this.props.module.creatures.map((e) => form.append('creatures[]', JSON.stringify(e)));
        this.props.module.items.map((e) => form.append('items[]', JSON.stringify(e)));

        this.props.putModule(form);
    }

    renderSelect(items) {
        return items.map((item) =>
            <option key={item.id} value={item.id}>{item.name}</option>
        );
    }

    renderCreatures() {
        if (!this.props.module.creatures)
            return [];

        return this.props.module.creatures.map((creature) =>
            <div key={creature.id} className="row">
                <div className="col-11">{creature.name}</div>
                <div className="col-1 text-right">
                    <a href="#"><i className="fa fa-times" aria-hidden="true"/></a>
                </div>
            </div>
        );
    }

    renderItems() {
        if (!this.props.module.items)
            return null;

        return this.props.module.items.map((item) =>
            <div key={item.id} className="row">
                <div className="col-11">{item.name}</div>
                <div className="col-1 text-right">
                    <a href="#"><i className="fa fa-times" aria-hidden="true"/></a>
                </div>
            </div>
        );
    }

    renderForm() {
        const module = this.module;
        return (
            <form id="moduleEdit">
                <input type="hidden" id="id" name="id" value={module.id} />

                <div className="form-group row">
                    <label htmlFor="name" className="col-lg-2 col-3 col-form-label">Name</label>
                    <div className="col">
                        <input type="text" className="form-control" id="name" name="name" defaultValue={module.name}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="publisher" className="col-lg-2 col-3 col-form-label">Publisher</label>
                    <div className="col-lg-2 col-9 pr-2">
                        <select id="publisher" name="publisher" defaultValue={module.publisher_id}>
                            <option/>
                            {this.renderSelect(this.props.publishers)}
                        </select>
                    </div>

                    <label htmlFor="published_date" className="col-lg-2 col-3 col-form-label">Published Date</label>
                    <div className="col-lg-3 col-9 pr-2">
                        <input type="date" className="form-control" id="publishedDate" name="publishedDate"
                               defaultValue={module.published_date}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="edition" className="col-lg-2 col-3 col-form-label">Edition</label>
                    <div className="col-lg-2 pr-2">
                        <select id="edition" name="edition" defaultValue={module.edition_id}>
                            <option/>
                            {this.renderSelect(this.props.editions)}
                        </select>
                    </div>
                    <label htmlFor="setting" className="col-lg-2 col-3 col-form-label">Setting</label>
                    <div className="col-lg-3 pr-2">
                        <select id="setting" name="setting" defaultValue={module.setting_id}>
                            <option/>
                            {this.renderSelect(this.props.settings)}
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="length" className="col-lg-2 col-form-label">Length</label>
                    <div className="col-lg-2 pr-2">
                        <select id="length" name="length" defaultValue={module.length_id}>
                            <option/>
                            {this.renderSelect(this.props.lengths)}
                        </select>
                    </div>
                    <label htmlFor="minLevel" className="col-lg-2 col-form-label">Min Level</label>
                    <div className="col-lg-2 pr-2">
                        <input type="text" className="form-control" id="minLevel" name="minLevel"
                               defaultValue={module.min_level}/>
                    </div>

                    <label htmlFor="maxLevel" className="col-lg-2 col-form-label">Max Level</label>
                    <div className="col-lg-2">
                        <input type="text" className="form-control" id="maxLevel" name="maxLevel"
                               defaultValue={module.max_level}/>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="summary">Summary</label>
                    <textarea className="form-control" id="summary" name="summary" defaultValue={module.summary}
                              rows="4"/>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" name="description"
                              defaultValue={module.description} rows="10"/>
                </div>

                <div className="form-group row">
                    <div className="col moduleBox">
                        <div>NPCs & Creatures</div>
                        {this.renderCreatures()}
                    </div>

                    <div className="col moduleBox">
                        <div>Items</div>
                        {this.renderItems()}
                    </div>
                </div>
            </form>
        )
    }

    renderSidebar() {
        return (
            <div className="moduleSidebar">
                <div className="mb-2 text-center">
                    <button className="btn btn-primary" onClick={this.save.bind(this)}>Save</button>
                    {' '}
                    <Link to={`../${this.props.module.id}`}>
                        <button className="btn btn-danger">Cancel</button>
                    </Link>
                </div>
            </div>
        )
    }

    render() {
        if (this.hasModule || this.isNewModule) {
            return (
                <div className="outerContainer p-2">
                    <div className="row">
                        <div className="col-8">
                            <div className="container">
                                {this.renderForm()}
                            </div>
                        </div>
                        <div className="col">
                            {this.renderSidebar()}
                        </div>
                    </div>
                </div>
            )
        } else {
            return <Loading/>
        }
    }
}

function mapStateToProps(state) {
    return {
        module: currentModule(state),

        editions: state.lookups.editions,
        lengths: state.lookups.moduleLengths,
        publishers: state.lookups.publishers,
        settings: state.lookups.settings
    }
}

export default connect(mapStateToProps, {
    getModule,
    setModuleFetching,
    setModuleVisited,
    putModule
})(ModuleEdit)
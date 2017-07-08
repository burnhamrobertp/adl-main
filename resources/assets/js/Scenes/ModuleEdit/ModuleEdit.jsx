import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {
    getModuleEdit,
    putModule
} from 'js/actions/modules'

import Loading from 'js/Components/Loading/Loading'
import ModuleEditCreatures from './ModuleEditCreatures'
import ModuleEditItems from './ModuleEditItems'

/**
 * Displays the form and inputs for modifying and creating modules
 *
 * In addition to standard forms, also displays functionality for uploading module images, performs lookup
 * for creatures, items, contributors, etc. to facilitate tying them to a module. Lastly, interfaces with
 * other components for creating new creatures, items, contributors, etc. that do not already exist in ADL.
 */
class ModuleEdit extends React.Component {
    componentDidMount() {
        // Fetch the module and await its return if we don't have it
        if (!this.isNewModule) {
            this.props.getModuleEdit(this.props.match.params.id);
        }
    }

    get module() {
        return this.props.module;
    }

    get hasModule() {
        return this.module && this.module.id;
    }

    get isNewModule() {
        return this.props.match.path.indexOf('new') !== -1;
    }

    save() {
        let form = new FormData(document.getElementById('moduleEdit'));

        this.module.creatures.map((e) => form.append('creatures[]', e.id));
        this.module.items.map((e) => form.append('items[]', e.id));

        this.props.putModule(form);
    }

    renderSelect(items) {
        return items.map((item) =>
            <option key={item.id} value={item.id}>{item.name}</option>
        );
    }

    removeItem(id) {
        items = this.module.items.filter((e) => e.id != id);
    }

    renderItems() {
        if (!this.module.items)
            return null;

        return this.module.items.map((item) =>
            <div key={item.id} className="row">
                <div className="col-11">{item.name}</div>
                <div className="col-1 text-right">
                    <i className="fa fa-times" aria-hidden="true"
                    onClick={this.removeItem.bind(this, item.id)}/>
                </div>
            </div>
        );
    }

    renderForm() {
        const module = this.module;
        return (
            <form id="moduleEdit">
                <input type="hidden" id="id" name="id" value={module.id}/>

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
                    <div className="col-lg-6 pr-2">
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
                    <ModuleEditCreatures/>
                    <ModuleEditItems/>
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
                    <Link to={`../${this.module.id}`}>
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
        module: state.modules.editing,

        editions: state.lookups.editions,
        lengths: state.lookups.moduleLengths,
        publishers: state.lookups.publishers,
        settings: state.lookups.settings
    }
}

export default connect(mapStateToProps, {
    getModuleEdit,
    putModule
})(ModuleEdit)
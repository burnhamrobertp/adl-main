import React from 'react'
import {Link} from 'react-router-dom'
import BaseComponent from 'js/Components/BaseComponent'
import {connect} from 'react-redux'

import {getModule, setModuleFetching, setModuleVisited} from 'js/actions/modules'
import {currentModule} from 'js/functions/stateHelpers'

class ModuleEdit extends BaseComponent {
    hasModule() {
        return this.props.module && this.props.module.id;
    }

    componentDidMount() {
        const id = parseInt(this.props.match.params.id);
        // editing a module but not passed its data
        if (id) {
            // does the index already have this
            if (!this.props.index[id]) {
                this.props.setModuleFetching(true);
                this.props.getModule(id);
            } else {
                this.props.setModuleVisited(id);
            }
        }
    }

    renderSelect(items) {
        return items.map((item) =>
            <option key={item.id} value={item.id}>{item.name}</option>
        );
    }

    renderCreatures() {
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
        const module = this.props.module;
        return (
            <form>
                <div className="form-group row">
                    <label htmlFor="name" className="col-lg-2 col-3 col-form-label">Name</label>
                    <div className="col">
                        <input type="text" className="form-control" id="name" defaultValue={module.name}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="publisher" className="col-lg-2 col-3 col-form-label">Publisher</label>
                    <div className="col-lg-2 col-9 pr-2">
                        <select id="publisher" defaultValue={module.publisher_id}>
                            <option/>
                            {this.renderSelect(this.props.publishers)}
                        </select>
                    </div>

                    <label htmlFor="published_date" className="col-lg-2 col-3 col-form-label">Published Date</label>
                    <div className="col-lg-3 col-9 pr-2">
                        <input type="date" className="form-control" id="publishedDate"
                               defaultValue={module.published_date}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="edition" className="col-lg-2 col-3 col-form-label">Edition</label>
                    <div className="col-lg-2 pr-2">
                        <select id="edition" defaultValue={module.edition_id}>
                            <option/>
                            {this.renderSelect(this.props.editions)}
                        </select>
                    </div>
                    <label htmlFor="setting" className="col-lg-2 col-3 col-form-label">Setting</label>
                    <div className="col-lg-3 pr-2">
                        <select id="setting" defaultValue={module.setting_id}>
                            <option/>
                            {this.renderSelect(this.props.settings)}
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="minLevel" className="col-lg-2 col-form-label">Min Level</label>
                    <div className="col-lg-2 pr-2">
                        <input type="text" className="form-control" id="minLevel"
                               defaultValue={module.min_level}/>
                    </div>

                    <label htmlFor="minLevel" className="col-lg-2 col-form-label">Max Level</label>
                    <div className="col-lg-2">
                        <input type="text" className="form-control" id="minLevel"
                               defaultValue={module.max_level}/>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="summary">Summary</label>
                    <textarea className="form-control" id="summary" defaultValue={module.summary} rows="4"/>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" defaultValue={module.description} rows="10"/>
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
                    <Link to={`edit/${this.props.module.id}`}>
                        <button className="btn btn-primary" disabled>Save</button>
                    </Link>
                    {' '}
                    <Link to={`../${this.props.module.id}`}>
                        <button className="btn btn-danger">Cancel</button>
                    </Link>
                </div>
            </div>
        )
    }

    render() {
        if (this.props.isFetching || !this.hasModule()) {
            return this.renderLoading();
        } else {
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
        }
    }
}

ModuleEdit.defaultProps = {
    index: {},
    module: {}
};

function mapStateToProps(state) {
    return {
        isFetching: state.modules.isFetchingModule,
        index: state.modules.index,
        module: currentModule(state),

        editions: state.lookups.editions,
        publishers: state.lookups.publishers,
        settings: state.lookups.settings
    }
}

export default connect(mapStateToProps, {
    getModule,
    setModuleFetching,
    setModuleVisited
})(ModuleEdit)
import React from 'react'
import {connect} from 'react-redux'

class ModuleEdit extends React.Component {
    renderPublishers() {
        return (
            this.props.publishers.map((publisher) =>
                <option value={publisher.id}>{publisher.name}</option>
            )
        )
    }

    renderEditions() {
        return (
            this.props.editions.map((edition) =>
                <option value={edition.id}>{edition.name}</option>
            )
        )
    }

    renderSettings() {
        return (
            this.props.settings.map((setting) =>
                <option value={setting.id}>{setting.name}</option>
            )
        )
    }

    renderForm() {
        return (
            <form>
                <div className="form-group row">
                    <label htmlFor="name" className="col-2 col-form-label">Name</label>
                    <div className="col">
                        <input type="text" className="form-control" id="name" value={this.props.module.name}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="publisher" className="col-2 col-form-label">Publisher</label>
                    <div className="col-2">
                        <select id="publisher">
                            <option/>
                            {this.renderPublishers()}
                        </select>
                    </div>

                    <label htmlFor="published_date" className="col-2 col-form-label pl-2">Published Date</label>
                    <div className="col-3">
                        <input type="date" className="form-control" id="publishedDate"
                               value={this.props.module.published_date}/>
                    </div>

                    <label htmlFor="edition" className="col-1 col-form-label pl-2">Edition</label>
                    <div className="col-2">
                        <select id="edition" defaultValue="3">
                            <option/>
                            {this.renderEditions()}
                        </select>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="setting" className="col-2 col-form-label pl-2">Setting</label>
                    <div className="col-2">
                        <select id="setting">
                            <option/>
                            {this.renderSettings()}
                        </select>
                    </div>

                    <label htmlFor="minLevel" className="col-2 col-form-label pl-2">Min Level</label>
                    <div className="col-1">
                        <input type="text" className="form-control" id="minLevel"
                               value={this.props.module.min_level}/>
                    </div>

                    <label htmlFor="minLevel" className="col-2 col-form-label pl-2">Max Level</label>
                    <div className="col-1">
                        <input type="text" className="form-control" id="minLevel"
                               value={this.props.module.max_level}/>
                    </div>
                </div>
            </form>
        )
    }

    render() {
        return (
            <div className="outerContainer p-2">
                <div className="row">
                    <div className="col-8">
                        <div className="container">
                            {this.renderForm()}
                        </div>
                    </div>
                    <div className="col">

                    </div>
                </div>
            </div>
        )
    }
}

ModuleEdit.defaultProps = {
    module: {}
};

function mapStateToProps(state) {
    return {
        editions: state.lookups.editions,
        publishers: state.lookups.publishers,
        settings: state.lookups.settings
    }
}

export default connect(mapStateToProps)(ModuleEdit)
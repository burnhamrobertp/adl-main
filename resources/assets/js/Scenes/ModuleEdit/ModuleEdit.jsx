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
                    <label htmlFor="published_date" className="col-2 col-form-label">Published Date</label>
                    <div className="col">
                        <input type="date" className="form-control" id="published_date"
                               value={this.props.module.published_date}/>
                    </div>
                </div>

                <div className="form-group row">
                    <label htmlFor="publisher" className="col-2 col-form-label">Publisher</label>
                    <div className="col">
                        <select id="publisher">
                            {this.renderPublishers()}
                        </select>
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
        publishers: state.lookups.publishers
    }
}

export default connect(mapStateToProps)(ModuleEdit)
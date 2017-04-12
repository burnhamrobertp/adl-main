import React from 'react'
import {Link} from 'react-router-dom'

class Module extends React.Component {
    moduleLink() {
        return '/module/'+this.props.data.id;
    }

    renderLevel() {
        if (!module.min_level || !module.max_level)
            return;

        return <span>| Levels {module.min_level} - {module.max_level}</span>
    }

    renderLength() {
        if (!module.length)
            return;

        return <span>| {module.length.name}</span>;
    }

    render() {
        const module = this.props.data;

        return (
            <Link to={this.moduleLink()}>
                <div className="module">
                    <div className="line"/>
                    <div className="p-2 row">
                        <div className="module-header col-8">
                            <h5>{module.name}</h5>
                            <div className="module-subheader">{module.edition.name} {this.renderLevel()} {this.renderLength()}</div>
                            <div className="module-summary">{module.summary}</div>
                        </div>
                        <div className="col-1">
                            Rating
                        </div>
                        <div className="col">
                            Image
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default Module;
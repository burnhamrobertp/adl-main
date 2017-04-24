import React from 'react'
import {Link} from 'react-router-dom'

import ModuleStarRating from 'js/Components/ModuleRating/ModuleStarRating'

class ModuleListModule extends React.Component {
    moduleLink() {
        return '/module/' + this.props.module.id;
    }

    currentRating() {
        return parseFloat(this.props.module.avg_rating[0].aggregate);
    }

    renderLevel() {
        if (!this.props.module.min_level || !this.props.module.max_level)
            return;

        return <span>| Levels {this.props.module.min_level} - {this.props.module.max_level}</span>
    }

    renderLength() {
        if (!this.props.module.length)
            return;

        return <span>| {this.props.module.length.name}</span>;
    }

    render() {
        return (
            <Link to={this.moduleLink()}>
                <div className="module">
                    <div className="p-2 row">
                        <div className="col">
                            <h5>{this.props.module.name}</h5>
                            <div className="module-subheader">
                                {this.props.module.edition.name} {this.renderLevel()} {this.renderLength()}
                            </div>
                            <div className="module-summary">{this.props.module.summary}</div>
                        </div>
                        <div className="col-2 text-center">
                            <ModuleStarRating current={this.currentRating()} readonly/>
                        </div>
                        <div className="col-2 text-center">
                            <img src={this.props.module.small_cover}/>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
}

export default ModuleListModule
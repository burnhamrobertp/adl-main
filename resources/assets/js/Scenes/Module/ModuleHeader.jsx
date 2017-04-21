import React from 'react'

class ModuleHeader extends React.Component {
    renderPublishedYear() {
        if (!this.props.module.published_date)
            return;

        const date = this.props.module.published_date,
            publishedDate = date.substr(0, date.indexOf('-'));

        return <span>| Published: {publishedDate}</span>;
    }

    renderPublisher() {
        if (!this.props.module.publisher_id)
            return;

        return <span>| Publisher: {this.props.module.publisher.name}</span>
    }

    renderLeadWriter() {
        if (!this.props.module.contributors)
            return;

        const c = this.props.module.contributors.find(
            (e) => e.contributor_type_id === 1
        );

        if (!c)
            return;

        return <span>| Lead Writer: {c.name}</span>
    }

    renderSubTitle() {
        if (!this.props.module)
            return;

        return (
            <h5 className="small">
                Module-{this.props.module.id} {this.renderPublishedYear()} {this.renderPublisher()} {this.renderLeadWriter()}
            </h5>
        )
    }

    renderEdition() {
        if (!this.props.module.edition)
            return;

        return (
            <div>
                <h4>{this.props.module.edition.name}</h4>
                <h5 className="small text-capitalize">Edition</h5>
            </div>
        )
    }

    renderLevelRange() {
        if (!this.props.module.min_level || this.props.module.max_level)
            return;

        return (
            <div>
                <h4>{this.props.module.min_level}-{this.props.module.max_level}</h4>
                <h5 className="small text-capitalize">Level Range</h5>
            </div>
        )
    }

    renderModuleLength() {
        if (!this.props.module.length)
            return;

        return (
            <div>
                <h4>{this.props.module.length.name}</h4>
                <h5 className="small text-capitalize">Length</h5>
            </div>
        )
    }

    renderRating() {
        if (!this.props.module.avg_rating)
            return;

        const rating = parseFloat(this.props.module.avg_rating[0].aggregate).toFixed(2);

        return (
            <div>
                <h4>{rating}</h4>
                <h5 className="small text-capitalize">Rating</h5>
            </div>
        )
    }

    render() {
        if (!this.props.module.id)
            return null;

        return (
            <div className="moduleHeader">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <h3>{this.props.module.name}</h3>
                            {this.renderSubTitle()}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 text-center">{this.renderEdition()}</div>
                        <div className="col-3 text-center">{this.renderLevelRange()}</div>
                        <div className="col-3 text-center">{this.renderModuleLength()}</div>
                        <div className="col-3 text-center">{this.renderRating()}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModuleHeader;
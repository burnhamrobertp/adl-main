import React from 'react'
import {connect} from 'react-redux'
import Rating from 'react-rating'

import {putModuleRating} from 'js/actions/modules'

class ModuleStarRating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {rating: false};
    }

    initialRate() {
        return this.props.userRating || this.props.current;
    }

    emptyClasses() {
        let c = ['fa', 'fa-star-o', 'text-color-secondary'];
        return c.join(' ');
    }

    fullClasses() {
        let c = ['fa', 'fa-star'];

        if (this.isHighlighted())
            c = c.concat(['text-color-primary', 'text-border-gray']);

        return c.join(' ');
    }

    onChange(rate) {
        if (typeof this.props.id !== 'number')
            throw `ModuleStarRating - onChange failed, invalid module id: '${props.id}' of type '${typeof props.id}' provided; Expected 'number'`;

        this.props.putModuleRating(this.props.id, rate);
    }

    onRate(rate) {
        if (this.state.rating && rate === undefined)
            this.setState({rating: false});
        else if (!this.state.rating)
            this.setState({rating: true});
    }

    isHighlighted() {
        return this.props.userRating || this.state.rating;
    }

    render() {
        return (
            <Rating
                initialRate={this.initialRate()}
                readonly={this.props.readonly}
                onChange={this.onChange.bind(this)}
                onRate={this.onRate.bind(this)}

                start={0}
                stop={5}
                fractions={2}
                empty={this.emptyClasses()}
                full={this.fullClasses()}
            />
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, {putModuleRating})(ModuleStarRating)
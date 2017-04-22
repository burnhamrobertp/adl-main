import React from 'react'
import {connect} from 'react-redux'
import Rating from 'react-rating'

import {getChangeModuleRating} from 'js/actions/modules'

class ModuleStarRating extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {rating: false};
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
        if (typeof props.id !== 'number')
            throw `ModuleStarRating - onChange failed, invalid module id: '${props.id}' of type '${typeof props.id}' provided; Expected 'number'`;

        this.getChangeModuleRating(this.props.id, rate);
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
                initialRate={this.props.current}
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

export default connect(mapStateToProps, {getChangeModuleRating})(ModuleStarRating)
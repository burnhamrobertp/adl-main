import React from 'react'
import {connect} from 'react-redux'
import Rating from 'react-rating'

class ModuleStarRating extends React.Component {
    render() {
        console.log('rating', this.props);
        return (
            <Rating
                initialRate={this.props.current}
                readonly={this.props.readonly}

                start={0}
                stop={5}
                fractions={2}
                empty="fa fa-star-o"
                full="fa fa-star"
            />
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

export default connect(mapStateToProps, {})(ModuleStarRating)
import React from 'react'
import Spinner from 'react-spinkit'

class BaseComponent extends React.Component {
    isLoading(key) {
        return Object.keys(this.props[key]).length === 0 && this.props[key].constructor === Object;
    }

    renderLoading() {
        return (
            <Spinner spinnerName="double-bounce" noFadeIn />
        )
    }
}

export default BaseComponent
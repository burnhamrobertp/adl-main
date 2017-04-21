import React from 'react'
import Spinner from 'react-spinkit'

class BaseComponent extends React.Component {
    renderLoading() {
        return (
            <Spinner spinnerName="three-bounce" noFadeIn />
        )
    }
}

export default BaseComponent
import React from 'react'
import Spinner from 'react-spinkit'

class Loading extends React.Component {
    render() {
        return <Spinner spinnerName="three-bounce" noFadeIn />
    }
}

export default Loading
import React from 'react'

import Filters from './components/filters/filters'
import Modules from './components/modules'

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row equalH">
                    <div className="col equalH">
                        <Filters />
                    </div>

                    <div className="col-8 equalH">
                        <Modules />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
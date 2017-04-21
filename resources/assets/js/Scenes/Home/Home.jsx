import React from 'react'

import Filters from './Filters'
import ModulesList from './ModulesList'

class Home extends React.Component {
    render() {
        return (
            <div className="outerContainer">
                <div className="row">
                    <div className="col">
                        <Filters />
                    </div>

                    <div className="col-8">
                        <ModulesList />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
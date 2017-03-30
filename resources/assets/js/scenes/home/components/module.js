import React from 'react'

class Module extends React.Component {
    render() {
        const module = this.props.data;
        let level = '',
            length = '';

        if (module.min_level && module.max_level) {
            level = <span>| Levels {module.min_level} - {module.max_level}</span>
        }
        if (module.length) {
            length = <span>| {module.length.name}</span>
        }

        return (
            <div className="module">
                <div className="line"></div>
                <div className="p-2 row">
                    <div className="module-header col-8">
                        <h5>{module.name}</h5>
                        <div className="module-subheader">{module.edition.name} {level} {length}</div>
                        <div className="module-summary">{module.summary}</div>
                    </div>
                    <div className="col-1">
                        Rating
                    </div>
                    <div className="col">
                        Image
                    </div>
                </div>
            </div>
        )
    }
}

export default Module;
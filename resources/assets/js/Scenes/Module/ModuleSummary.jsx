import React from 'react'

class ModuleSummary extends React.Component {
    render() {
        return (
            <div>
                <div className="moduleUnbox">
                    <h6>Summary</h6>
                    <p>
                        {this.props.module.summary}
                    </p>
                </div>
                <div className="moduleUnbox">
                    <h6>Description</h6>
                    <p>
                        {this.props.module.description}
                    </p>
                </div>
            </div>
        );
    }
}

export default ModuleSummary;
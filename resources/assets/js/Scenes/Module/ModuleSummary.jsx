import React from 'react'

class ModuleSummary extends React.Component {
    render() {
        return (
            <div>
                <div className="moduleUnbox">
                    <h6>Summary</h6>
                    <div>
                        {this.props.module.summary}
                    </div>
                </div>
                <div className="moduleUnbox">
                    <h6>Description</h6>
                    <div>
                        {this.props.module.description}
                    </div>
                </div>
            </div>
        );
    }
}

export default ModuleSummary;
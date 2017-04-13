import React from 'react'

class ModuleSummary extends React.Component {
    render() {
        return (
            <div className="moduleSummary">
                <h6>Summary</h6>
                <p>
                    {this.props.module.summary}
                </p>
            </div>
        );
    }
}

export default ModuleSummary;
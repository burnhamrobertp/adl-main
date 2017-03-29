import React from 'react';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.enableInputId = 'adl-filter-enable-'+props.id;
    }

    render() {
        return (
            <div>
                <div className="filter">
                    <div className="col-1">
                        <div className="pl-2">
                            <input id={this.enableInputId} type="checkbox" aria-label="Enable this filter"/>
                        </div>
                    </div>

                    <div className="col-11">
                        <div className="pr-2">
                            <div>
                                <label htmlFor={this.enableInputId}>
                                    {this.props.label}
                                    <span className="subLabel">{this.props.sublabel}</span>
                                </label>
                            </div>

                            {this.props.children}
                        </div>
                    </div>
                </div>

                <div className="line"></div>
            </div>
        )
    }
}

export default Filter;
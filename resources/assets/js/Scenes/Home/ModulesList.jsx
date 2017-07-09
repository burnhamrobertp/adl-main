import React from 'react';
import {connect} from 'react-redux';

import {getModules, setModulesFetching} from 'js/actions/modules';
import {setModuleSort} from 'js/actions/sort';

import Loading from 'js/Components/Loading/Loading';
import Module from './Components/ModuleListModule';

class ModulesList extends React.Component {
    componentDidMount() {
        this.props.getModules();
    }

    renderModuleList() {
        if (this.props.isFetching) {
            return <Loading/>;
        }

        if (this._isSelected('name')) {
            this.props.modules.sort((a, b) => this._compareNames(a, b));
        } else if (this._isSelected('rating')) {
            this.props.modules.sort((a, b) => this._compareRatings(a, b));
        }

        return this.props.modules.map((module) =>
            <Module key={module.id} module={module}/>
        );
    }

    renderSelect() {
        return (
            <div className="col">
                <label htmlFor="search-sortby">Sort By:</label>
                <select id="search-sortby"
                        value={this.props.sortBy}
                        onChange={(event) => this.props.setModuleSort(event.target.value)}>
                    <option value="name">Name</option>
                    <option value="rating">Rating</option>
                </select>
            </div>
        );
    }

    render() {
        return (
            <div id="modules-list">
                <div className="p-3 row">
                    {this.renderSelect()}
                    <div id="search-summary">
                        {this.props.modules.length} Adventures Found
                    </div>
                </div>

                {this.renderModuleList()}
            </div>
        );
    }

    _isSelected(name) {
        return this.props.sortBy === name;
    }

    _compareNames(moduleA, moduleB) {
        if (moduleA.name < moduleB.name) {
            return -1;
        } else if (moduleA.name > moduleB.name) {
            return 1;
        }
        return 0;
    }

    _compareRatings(moduleA, moduleB) {
        const moduleARating = parseFloat(moduleA.avg_rating[0].aggregate) || 0;
        const moduleBRating = parseFloat(moduleB.avg_rating[0].aggregate) || 0;
        if (moduleARating < moduleBRating) {
            return 1;
        } else if (moduleARating > moduleBRating) {
            return -1;
        }
        return 0;
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.modules.isFetchingList,
        modules: state.modules.list,
        sortBy: state.sort.sortBy
    };
}

export default connect(mapStateToProps, {getModules, setModulesFetching, setModuleSort})(ModulesList);
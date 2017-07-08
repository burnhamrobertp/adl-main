import '../sass/app.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk'

import {getModule} from 'js/actions/modules'

import Home from './Scenes/Home/Home'
import Module from './Scenes/Module/Module'
import ModuleEdit from './Scenes/ModuleEdit/ModuleEdit'
import Navbar from './Components/Navbar/Navbar'
import reducers from './reducers/index.js'

export const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const App = () => (
    <Router>
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/module/new" component={(props) => <ModuleEdit moduleId="new"/>}/>
                <Route exact path="/module/edit/:id" component={ModuleEdit}/>
                <Route exact path="/module/:id" render={
                    ({match}) => {
                        let moduleId = parseInt(match.params.id),
                            module = store.getState().modules.index[moduleId] || {};

                        if (!module.id)
                            store.dispatch(getModule(moduleId));

                        return <Module moduleId={moduleId} indexModule={module}/>
                    }
                }/>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

import '../sass/app.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import promise from 'redux-promise'

import Home from './Scenes/Home/Home'
import Module from './Scenes/Module/Module'
import ModuleEdit from './Scenes/ModuleEdit/ModuleEdit'
import Navbar from './Components/Navbar/Navbar'
import reducers from './reducers/index.js'

export const store = createStore(reducers, applyMiddleware(promise));

const App = () => (
    <Router>
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/module/new" component={ModuleEdit}/>
                <Route exact path="/module/:id" component={Module}/>
                <Route exact path="/module/edit/:id" component={ModuleEdit}/>
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

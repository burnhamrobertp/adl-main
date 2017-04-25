import '../sass/app.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import promise from 'redux-promise'

import Home from './Scenes/Home/Home'
import Module from './Scenes/Module/Module'
import Navbar from './Components/Navbar/Navbar'
import reducers from './reducers/index.js'

export const store = createStore(reducers, applyMiddleware(promise));

const App = () => (
    <Router>
        <div>
            <Navbar/>
            <Route exact path="/" component={Home}/>
            <Route path="/module/:id" component={Module}/>
        </div>
    </Router>
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

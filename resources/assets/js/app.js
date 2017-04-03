import '../sass/app.scss'
import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import promise from 'redux-promise';
import Home from './scenes/home/home'
import Navbar from './components/navbar/navbar'



import reducers from './reducers/index.js';

export const store = createStore(reducers, applyMiddleware(promise));

const App = () => (
    <Router>
        <div>
            <Navbar/>
            <Route exact path="/" component={Home}/>
        </div>
    </Router>
);

ReactDOM.render(
    
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

import '../sass/app.scss'
import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './scenes/home/home'
import Navbar from './components/navbar/navbar'

const App = () => (
    <Router>
        <div>
            <Navbar/>
            <Route exact path="/" component={Home}/>
        </div>
    </Router>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

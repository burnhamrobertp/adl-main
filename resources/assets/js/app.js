import '../sass/app.scss'
import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import ModuleList from './scenes/moduleList/moduleList'
import Navbar from './components/navbar/navbar'

const App = () => (
    <Router>
        <div>
            <Navbar/>
            <Route exact path="/" component={ModuleList}/>
        </div>
    </Router>
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

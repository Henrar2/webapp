import React, { Component } from 'react';
import Department from './Department'
import Employee from './Employee.js'

import Home from './Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

class App extends Component {
    state = {  }
    render() { 
        return ( 
        <div>   
            <Router>
                <Switch>
                    <Route path="/" exact={true} component={Home}/>
                    <Route path="/Department" exact={true} component={Department}/>
                    <Route path="/Employee" exact={true} component={Employee}/>
                </Switch>
            </Router>
        </div>
        );
    }
}
 
export default App;

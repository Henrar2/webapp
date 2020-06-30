import React, { Component } from 'react';
import {Nav,Navbar,NavItem,NavbarBrand} from 'reactstrap'
import Department from './Department'
import Employee from './Employee.js'
import Home from './Home'
import {HashRouter,Router,Switch,Route,NavLink} from 'react-router-dom'
import AppNav from './AppNav';

class App extends Component {
    state = {  }
    render() { 
        return (
         <div>
             <AppNav/>
             <HashRouter>
                     <Route path="/" exact={true} component={Home}/>
                     <Route path="/Department" exact={true} component={Department}/>
                     <Route path="/Employee" exact={true} component={Employee}/>
             </HashRouter>
             
         </div>
        );
    }
}
 
export default App;

import React, { Component } from 'react';
import {Nav,Navbar,NavItem,NavbarBrand} from 'reactstrap'
import { HashRouter,NavLink } from 'react-router-dom';

class AppNav extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <div>
            <HashRouter>
            <Navbar color="dark" dark expand="md">
              <NavbarBrand href="/">Web Application</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/Department">Departments</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/Employee">Employees</NavLink>
                        </NavItem>
                    </Nav>   
            </Navbar>
            </HashRouter>
            </div>
          </div> 
);
    }
}
 
export default AppNav;
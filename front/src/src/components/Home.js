import React, { Component } from 'react';
import ReactDom from "react-dom"
import AppNav from './AppNav'
import {Route,HashRouter, NavLink,Router,Switch } from 'react-router-dom';
import Employee from './Employee';
import Department from './Department';


class Home extends Component {
    state = {  }
    render() { 
         return (
           <h1>Home</h1>            )
    }
}
 
export default Home ;
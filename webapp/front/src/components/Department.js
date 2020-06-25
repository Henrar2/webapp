import React, { Component } from 'react';
import AppNav from './AppNav';
import AddDepartment from './AddDepartment';
import GetDepartment from './GetDepartment';
import { Container,} from 'reactstrap';

class Department extends Component {
    state = { 
        
     }
    render() { 

        const titleGet=<h1 style={{textalign:"center"}}>Τμήματα</h1>
        const titleAdd=<h1 style={{textalign:"center"}}>Προσθήκη Νέου Τμήματος</h1>       
        return(    
            <div>
                <AppNav/>
                <Container>
                {titleGet}
                </Container>
                <GetDepartment/>
                <Container>
                {titleAdd}
                </Container>
                <AddDepartment/>
            </div>
        );
    }      
} 
export default Department;
                        
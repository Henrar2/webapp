import React, { Component } from 'react';
import { Container,} from 'reactstrap';
import AddEmployee from './AddEmployee';
import GetEmployee from './GetEmployee';

class Employee extends Component {
    state = { 
        
        

     }

    
   
   
   
    render() { 
        const titleGet=<h1 style={{textalign:"center"}}>Υπάλληλοι</h1>
        const titleAdd=<h1 style={{textalign:"center"}}>Προσθήκη Νέου Υπαλλήλου</h1>
        return( 
         <div>

                <Container>
                {titleGet}
                </Container> 
                <GetEmployee/>
                <Container>
                {titleAdd}
                </Container>
                <AddEmployee/>   
         </div>  
            );
    }
}
export default Employee;
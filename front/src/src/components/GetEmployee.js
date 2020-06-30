import React, { Component } from 'react';
import { Table, Container, Button } from 'reactstrap';

class GetEmployee extends Component {
    


     constructor(props){
        super(props)

        this.state = { 
            isLoading : true,
            employees :[],
         }
     }

     async componentDidMount(){
         const response = await fetch('/api/employees');
         const body = await response.json();
         this.setState({employees :body, isLoading :false});
     }

     async remove(afm){
         await fetch(`api/employees/${afm}`,{
         method: 'DELETE',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         } 

        }).then(()=>{
           let updatedEmployees=[...this.state.employees].filter(i=> i.afm!==afm);
            this.setState({employees:updatedEmployees});
        })
     }

    render() { 

        const {employees,isLoading}=this.state;
        if(isLoading)
            return(<div>Loading...</div>);
            
        return(
            <div>
                <Container>     
                <Table>
                    <thead>
                        <tr>
                            <th>ΑΦΜ</th>
                            <th>Όνομα</th>
                            <th>Πόστο</th>
                            <th>Μισθός</th>
                            <th>Τμήμα</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        employees.map( employee => 
                            <tr id={employee.afm} key={employee.afm}>
                                <td>{employee.afm}</td>
                                <td>{employee.name}</td>
                                <td>{employee.jobPost}</td>
                                <td>{employee.salary}</td>
                                <td>{employee.department.name}</td>
                                <td><Button size="sm" color="danger" onClick={()=>this.remove(employee.afm)}>Remove</Button></td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
                </Container>
            </div>)
    }
}
export default GetEmployee;
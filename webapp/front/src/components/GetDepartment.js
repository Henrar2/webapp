import React, { Component } from 'react';
import { Table, Container, Button } from 'reactstrap';

class GetDepartment extends Component {
    
    constructor(props){
        super(props)
        this.state={
            isLoading : true,
            departments :[]
        }
    }

     async componentDidMount(){
         const response = await fetch('/api/departments');
         const body = await response.json();
         this.setState({departments :body, isLoading :false});
     }

     async remove(id){
        await fetch(`api/departments/${id}`,{
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        } 

       }).then(()=>{
          let updatedDepartments=[...this.state.departments].filter(i=> i.id!==id);
           this.setState({departments:updatedDepartments});
       })
    }

    render() { 

        const {departments,isLoading}=this.state;
        if(isLoading)
            return(<div>Loading...</div>);
            
        return(
            <div>
                <Container>
                <Table>
                    <thead>
                        <tr id="columnNames" key="coloumnNames">
                            <th>Κωδικός Τμήματος</th>
                            <th>Όνομα Τμήματος</th>
                            <th>Περιγραφή Τμήματος</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        departments.map( department => 
                            <tr id={department.id} key={department.id}>
                                <td>{department.id}</td>
                                <td>{department.name}</td>
                                <td>{department.description}</td>
                                <td><Button size="sm" color="danger" onClick={()=>this.remove(department.id)}>Remove</Button></td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
                </Container>
            </div>)
    }
}
export default GetDepartment;
import React, { Component } from 'react';
import { Container, Form, FormGroup,Button,Label,Input} from 'reactstrap';
import {Link} from 'react-router-dom'


class AddEmployee extends Component {
    
    constructor(props){
        super(props)
        this.state = { 
            isLoading : true,
            employees : [],
            departments: [],
            item: this.emptyItem
        }  
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        //this.handleListChange=this.handleListChange.bind(this);
    }
    
    emptyItem ={
        afm: '',
        name: '',
        jobPost: '',
        salary: '',
        department: {
            id: 1
        }
    }
     

    async componentDidMount(){
        const empResponse = await fetch("api/employees");
        const empbody = await empResponse.json();
        this.setState({isLoading:false,employees:empbody});

        const depRespone = await fetch("api/departments");
        const depBody = await depRespone.json();
        this.setState({isLoading:false,departments:depBody});
    }

    async handleSubmit(event){
        const item = this.state.item;
        await fetch(`/api/employees`, {
          method : 'POST',
          headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body : JSON.stringify(item),
        });
        event.preventDefault();
        this.props.history.push("/Employee");     

      }

    handleChange(event){
        const target= event.target;
        const value= target.value;
        const name = target.name;
        let item={...this.state.item};
        if(name!=="id"){  
            item[name] = value;

        }
        else{
            item.department[name]=value;
        }
        this.setState({item});
        console.log(item);
    }

      
      
      

    render() { 

        const {employees}=this.state
        const {departments,isLoading}=this.state

        const depList = departments.map(department=>
            <option value={department.id} key={department.id}>
                {department.name}
            </option>
        
        )
            if(isLoading)
                return(<div>Loading...</div>);
            

        return( 
            <div>    
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label type="text">ΑΦΜ :</Label>
                        <Input style={{width:"25%"}} type="text" name="afm" id="afm" onChange={this.handleChange} />   
                    </FormGroup> 

                    <FormGroup>
                        <Label type="text">Όνομα :</Label>
                        <Input style={{width:"25%"}} type="text" name="name" id="name" onChange={this.handleChange} />   
                    </FormGroup>

                    <FormGroup >
                        <Label type="text">Πόστο :</Label>
                        <Input style={{width:"25%"}} type="text" name="jobPost" id="jobPost" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="desciption">Μισθός :</Label>
                        <Input style={{width:"25%"}} type="text" name="salary" id="salary" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label type="text">Τμήμα :</Label>
                        <Input style={{width:"25%"}} type="select" name="id" id="id" onChange={this.handleChange}>
                        <option Value="DEFAULT" enabled>Choose a Department</option>
                        {depList}
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Button color="primary" type="submit">Submit</Button>{' '}
                        <Button color="danger" tag={Link} to="/Employees">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>

            </div>  
            );
    }
}
export default AddEmployee;
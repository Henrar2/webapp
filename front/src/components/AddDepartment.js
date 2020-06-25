import React, { Component } from 'react';
import { Container,Form,FormGroup,Label,Input,Button} from 'reactstrap';
import {Link} from 'react-router-dom'

class AddDepartment extends Component {

     constructor(props){
        super(props)
        this.state = { 
            isLoading : true,
            departments :[],
            item: this.emptyItem
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
     }

     emptyItem={
        id: '',
        name: '',
        description: ''
     }

    async componentDidMount(){
        const response = await fetch('/api/departments');
        const body = await response.json();
        this.setState({departments:body,isLoading:false});
    }
    
    async handleSubmit(event){
        const item = this.state.item;
        
        await fetch(`/api/departments`, {
          method : 'POST',
          headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },body : JSON.stringify(item),
        })
        event.preventDefault();
        this.props.history.push("/Department");
      }

    handleChange(event){
      const target= event.target;
      const value= target.value;
      const name = target.name;
      let item={...this.state.item};
      item[name] = value;
      this.setState({item});
    }
    
    render() { 
        const {departments,isLoading}=this.state;
        

        if(isLoading)
            return(<div>Loading...</div>);
  
        

        return( 
         <div>
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label type="text">Όνομα :</Label>
                        <Input style={{width:"25%"}} type="text" name="name" id="name" onChange={this.handleChange} />   
                    </FormGroup> 
                    
                    <FormGroup>
                        <Label type="text">Περιγραφή :</Label>
                        <Input style={{width:"25%"}} type="textarea" name="description" id="description" onChange={this.handleChange} />   
                    </FormGroup> 

                    <FormGroup>
                        <Button color="primary" type="submit">Submit</Button>{' '}
                        <Button color="danger" tag={Link} to="/department">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
         </div>  
            );
    }
}

 
export default AddDepartment;
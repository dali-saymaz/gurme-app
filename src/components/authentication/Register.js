import React from "react";
import { Nav,   NavItem, Button, Modal, ModalHeader, ModalBody,Form, FormGroup, Input, Label } from 'reactstrap';
import CostumerService from '../../Service/CostumerService'
// import loginImg from "./login.svg";

class Register extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      customer:[],
    };
  
  }
  handleLogin=async (e)=> {
  
    e.preventDefault();
    this.createCompany(e);  
  }
  
  createCompany=async (e) => {
    const companyList =  await CostumerService.createCustomerService(
      e.target.firstName.value,
      e.target.lastName.value, 
      e.target.email.value,
      e.target.phone.value 
      );

    this.setState( state => ({
      customer :state.customer.concat([companyList])
    }))
      console.log(this.state.customer)
  }

  render() {
    return (
      <Form onSubmit={this.handleLogin}>
      <FormGroup>
        <Label htmlFor="firstName">Resturant Name</Label>
          <Input type="text" id="firstName" name="firstName" innerRef={(input) => this.firstName = input} />
     </FormGroup>
     <FormGroup>
        <Label htmlFor="lastName">Resturant Name</Label>
          <Input type="text" id="lastName" name="lastName" innerRef={(input) => this.lastName = input} />
     </FormGroup>
     <FormGroup>
        <Label htmlFor="email">Mail</Label>
            <Input type="email" id="email" name="email" innerRef={(input) => this.email = input}  />
    </FormGroup>
    <FormGroup>
       <Label htmlFor="phone">Phone Number</Label>
          <Input type="phone" id="phone" name="phone" innerRef={(input) => this.phone = input}  />
    </FormGroup>
    <Button type="submit" value="submit" color="primary">Submit</Button>
  </Form>
    );
  }
}
export default Register;
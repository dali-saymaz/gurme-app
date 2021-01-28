import React, { Component } from 'react'
import Branch from './Branch'
import AddFirm from './AddFirm'
import { INFO } from '../../api/info';
import { Card, Button, CardBody, CardTitle, CardText, CardImg,ListGroupItem, ListGroup } from 'reactstrap'
import pizza from '../company/assets/images/logo.png'

class Firm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firm: INFO,
      selectedFirm: null,
      createdFirm: false
    };
  }
  setCreatedFirm() {
    this.setState({ createdFirm: true});
  }
  onFirmSelect(firm) {
    this.setState({ selectedFirm: firm});
  }
  createNewFirm(){
    if (this.state.createdFirm) {
        return(
            <AddFirm/>
        )
    }
  }
  render() {
    const firm = this.state.firm.map((firm) => {
      return ( 
      <div key = {firm.id} className = "col-12 col-md-3 m-1" >
        <Card>
          <CardImg variant = "top" src = {pizza}/>
          <CardBody >
            <CardTitle className="font-weight-bolder"> {firm.name} </CardTitle>
            <CardText >
               Some quick example text to build on the card title and make up the bulk of
               the card 's content.
            </CardText>
            <ListGroup className="list-group-flush">
              <ListGroupItem><i class="fas fa-map-marker-alt"></i>: {firm.adress}</ListGroupItem>
              <ListGroupItem><i className="fa fa-phone fa-lg"></i>: {firm.telephone}</ListGroupItem>
              <ListGroupItem><i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">{firm.mail}</a></ListGroupItem>
           </ListGroup>
            <Button key={firm.id} onClick={() => this.onFirmSelect(firm)} variant = "info" > Go Branch
            </Button>
          </CardBody>
        </Card>
      </div>
      );
    });  
    return (
      <div className = "container" >
        <div className = "row" >
           {firm}
           <div className = "col-12 col-md-2 ml-4" >
           <Button onClick={() => this.setCreatedFirm()} variant="default" style={{ color: "white", background: "red"}}> ADD RESTURANT
            </Button> 
            {this.createNewFirm(this.state.createdFirm)}
            </div>
           <Branch selectedFirm={this.state.selectedFirm}/>
        </div>
       </div>
    )
  }
}
///*<Branch selectedFirm={this.state.selectedFirm}/>
export default Firm;
import React, { Component } from 'react'
import { Card,CardBody, CardTitle,ListGroupItem,ListGroup, CardText, CardImg} from 'reactstrap'
import pizza from '../company/assets/images/logo.png'
class Branch extends Component {
    renderDish(pFirm) {
        if (pFirm != null) {
        const comment = pFirm.branch.map((branch)=>{
            return (
                <div key = {branch.id} className = "col-12 col-md-3 m-1" >
                    <Card>
                        <CardImg variant = "top" src = {pizza}/>
                        <CardBody >
                            <CardTitle className="font-weight-bolder"> {branch.id} </CardTitle>
                            <CardText >
                                Some quick example text to build on the card title and make up the bulk of
                                 the card 's content.
                            </CardText>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><i class="fas fa-map-marker-alt"></i>: {branch.adress}
                                </ListGroupItem>
                                <ListGroupItem><i className="fa fa-phone fa-lg"></i>: {branch.telephone}
                                </ListGroupItem>
                                <ListGroupItem><i className="fa fa-envelope fa-lg"></i>: 
                                <a href="mailto:confusion@food.net">{branch.mail}</a>
                                </ListGroupItem>
                            </ListGroup>
                         </CardBody>
                    </Card>
                </div>
            );
        });
            return (
                <div>
                     <div className="row">
                     {comment}
                     </div>
                   
                </div>
            );
        }
        else {
            return (
                <div> </div>
            );
        }
    }
    
    render() {
        return (
            <div className="row">
              {this.renderDish(this.props.selectedFirm)}   
            </div>
        )
    }
}
export default Branch;

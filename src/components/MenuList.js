import React, { Component } from 'react'
import iskender from '../images/iskender.jpg'
import soup from '../images/soup.jpg'
import salat from '../images/salat.jpeg'
import dessert from '../images/dessert.jpg'

class MenuList extends Component {
    constructor(props) {
        super(props);
        this.state ={
            values : []
        }
    }

    createUI(){
        return this.state.values.map((el, i) => 
            <div key={i}>
              <li value={el||''} onChange={this.handleNameChange.bind(this, i)}></li>
            </div>                     
        )
    }

     handleNameChange(i, event) {
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({ values });
        console.log("values" , values)
       
      }
    
    addClick(){
        this.setState(prevState => ({ values: [...prevState.values, '']}))
      }
    render() {
        return (
            <div>
            <h1>My Menus</h1>
            <div className="menu-list">
                <div>
                    <ul>
                    <h3>Menu 1</h3>
                        <li>Iskender 20.50 Fr.</li>
                        <li>Soup 5.75 Fr.</li>
                        <li>Salat 8.25 Fr.</li>
                        <li>Dessert 10.25 Fr.</li>
                        {this.createUI()}
                        <img src={iskender} width="60" height="40" alt="..."/>
                        <img src={soup} width="60" height="40" alt="..."/>
                        <img src={salat} width="60" height="40" alt="..."/>
                        <img src={dessert} width="60" height="40" alt="..."/>
                    </ul>
                    <button onClick={this.addClick.bind(this)}>Add Foot</button>
                    </div>
                    <div>
                    <ul>
                        <h3>Menu 2</h3>
                        <li>Iskender 20.50 Fr.</li>
                        <li>Soup 5.75 Fr.</li>
                        <li>Salat 8.25 Fr.</li>
                        <li>Dessert 10.25 Fr.</li>
                        <img src={iskender} width="60" height="40" alt="..."/>
                        <img src={soup} width="60" height="40" alt="..."/>
                        <img src={salat} width="60" height="40" alt="..."/>
                        <img src={dessert} width="60" height="40" alt="..."/>
                    </ul>
                    </div>
                    <div>
                    <ul>
                    <h3>Menu 3</h3>
                        <li>Iskender 20.50 Fr.</li>
                        <li>Soup 5.75 Fr.</li>
                        <li>Salat 8.25 Fr.</li>
                        <li>Dessert 10.25 Fr.</li>
                        <img src={iskender} width="60" height="40" alt="..."/>
                        <img src={soup} width="60" height="40" alt="..."/>
                        <img src={salat} width="60" height="40" alt="..."/>
                        <img src={dessert} width="60" height="40" alt="..."/>
                    </ul>
                    </div> 
                    </div>
                    <div className="menu-list"> 
                    <div>
                    <h3>Menu 4</h3>
                    <button>Add New Menu</button>
                    </div>    
                       
            </div>
        </div>
        )
    }
}

export default MenuList;
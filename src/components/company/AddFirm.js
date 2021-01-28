import React, { Component } from 'react'


class AddFirm extends Component {
   constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }
   
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Enter restaurant name</label>
          <input id="username" ref={(input) => this.input = input} name="username" type="text" />
  
          <label htmlFor="email">Enter restaurant email</label>
          <input id="email" name="email" ref={(input) => this.input = input} type="email" />
  
          <label htmlFor="telephone">Enter your telephone</label>
          <input id="number" name="number" type="number" />

          <label htmlFor="adress">Enter your adress</label>
          <input id="adress" name="adress" type="text" />
  
          <button>Send data!</button>
        </form>
      );
    }
  }
export default AddFirm;



import React, { Component } from 'react'

class CustomerService extends Component {
    static async getCustomerService() {
        let response = await fetch('http://localhost:8080/customers')
        let data = await response.json()
        return data;
    }
    static async createCustomerService(pFirstName, pLastName, pEmail,pPhone) {
        let response = await fetch('http://localhost:8080/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: await JSON.stringify({
                firstName: pFirstName,
                lastName: pLastName,
                email: pEmail,
                phone: pPhone

            })
        });
        let data = await response.json()
        return data;
    }
    
}

export default CustomerService;
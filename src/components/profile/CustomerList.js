import React, { Component } from 'react'

class CustomerList extends Component {
    render() {
        return (
            <div className="container">
                <h2 className="mt-5">Customer List</h2>
                <hr />
                <div className="row">                    
                    <div className="col-md-12">
                    <table class="table table-bordered table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Company</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <img src="https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-vector-user-young-boy-avatar-icon-png-image_1538408.jpg" width="100" alt="..." />
                                </td>
                                <td>Joe</td>
                                <td>Doe</td>
                                <td>joedoe@gmail.com</td>
                                <td>1744  Pinchelone Street Zurigo</td>
                                <td>00410000000</td>
                                <td className="pl-5">
                                    <ul>
                                        <li>Nusret A.Ş.</li>
                                        <li>Gokce A.Ş.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-vector-user-young-boy-avatar-icon-png-image_1538408.jpg" width="100" alt="..." />
                                </td>
                                <td>Joe</td>
                                <td>Doe</td>
                                <td>joedoe@gmail.com</td>
                                <td>1744  Pinchelone Street Zurigo</td>
                                <td>00410000000</td>
                                <td className="pl-5">
                                    <ul>
                                        <li>Nusret A.Ş.</li>
                                        <li>Gokce A.Ş.</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-vector-user-young-boy-avatar-icon-png-image_1538408.jpg" width="100" alt="..." />
                                </td>
                                <td>Joe</td>
                                <td>Doe</td>
                                <td>joedoe@gmail.com</td>
                                <td>1744  Pinchelone Street Zurigo</td>
                                <td>00410000000</td>
                                <td className="pl-5">
                                    <ul>
                                        <li>Nusret A.Ş.</li>
                                        <li>Gokce A.Ş.</li>
                                    </ul>
                                </td>
                            </tr>                            
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerList;
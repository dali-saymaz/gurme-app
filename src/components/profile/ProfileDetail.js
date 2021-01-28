import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ProfileDetail extends Component {
    render() {
        return (
            <div className="container">
                <div className="mt-5 overflow-hidden">
                    <h2 className="float-left">Profile Detail</h2>
                    <Link className="btn btn-primary float-right" to="/update-profile">Update</Link>
                </div>                
                <hr />
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img src="https://png.pngtree.com/png-vector/20190704/ourmid/pngtree-vector-user-young-boy-avatar-icon-png-image_1538408.jpg" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Joe Doe</h5>
                                <p className="card-text text-center">Customer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="row">
                            <label className="col-sm-2"><strong>Email :</strong></label>
                            <div className="col-sm-10">nusret@gmail.com</div>
                        </div>
                        <div className="row">
                            <label className="col-sm-2"><strong>Phone :</strong></label>
                            <div className="col-sm-10">00410000000</div>
                        </div>
                        <div className="row">
                            <label className="col-sm-2"><strong>Address :</strong></label>
                            <div className="col-sm-10">1744  Pinchelone Street Zurigo</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileDetail;
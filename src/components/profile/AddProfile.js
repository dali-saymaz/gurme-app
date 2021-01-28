import React, { Component } from 'react'

class AddProfile extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto">
                    <h2 className="mt-5">Create Profile</h2>
                    <hr />
                    <form className="mt-4">
                        <div className="row">
                            <div className="col">
                            <label>First Name</label>
                            <input type="text" className="form-control" />
                            </div>
                            <div className="col">
                            <label>Last Name</label>
                            <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" />                           
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="email" className="form-control" />                           
                        </div>
                        <div className="form-group">
                            <label>Phone</label>
                            <input type="email" className="form-control" />                           
                        </div>
                        <div className="form-group">
                            <label>Image</label>
                            <input type="file" className="form-control-file" />
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Save</button>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddProfile;
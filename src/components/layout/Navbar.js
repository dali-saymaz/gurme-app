import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

 class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed py-3">
              <div className="container">
              <Link className="navbar-brand" to="/">LOGO</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/profile-detail"><i class="far fa-user-circle mr-1"></i>My Profile</Link>
                  </li>
                  <li className="nav-item ml-2">
                    <Link className="nav-link" to="/create-menu"><i class="fas fa-plus-circle mr-1"></i>Create Menu</Link>
                  </li>
                  <li className="nav-item ml-2">
                    <Link className="nav-link" to="my-restaurants"><i class="fas fa-store mr-1"></i>My restaurants</Link>
                  </li>
                </ul>
              </div>
              </div>
            </nav>
        )
    }
}

export default Navbar;

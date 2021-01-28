import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

import Home  from "./components/Home";
import Navbar  from "./components/layout/Navbar";
import MenuList  from "./components/MenuList";
import Menu  from "./components/Menu";
import Firm from "./components/company/Firm"
import AddProfile from "./components/profile/AddProfile"
import UpdateProfile from "./components/profile/UpdateProfile"
import ProfileDetail from "./components/profile/ProfileDetail"
import CustomerList from "./components/profile/CustomerList"

import Authentication from "./components/authentication/Authentication" 

// import Menu  from "./components/Menu";

class App extends Component {
  render()
  {
    return (

      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/add-profile">
            <AddProfile />
          </Route>
          <Route path="/update-profile">
            <UpdateProfile />
          </Route>
          <Route path="/profile-detail">
            <ProfileDetail />
          </Route>
          <Route path="/customer-list">
            <CustomerList />
          </Route>
          <Route path="/menu-list">
            <MenuList />
          </Route>
          <Route path="/company-list">
            <Firm />
          </Route>
          <Route path="/authentication">
            <Authentication/>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
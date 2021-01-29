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
import ProtectedRoute from "./Service/ProtectedRoute"
import Authentication from "./components/authentication/Authentication" 
import Aboutus from './components/Aboutus';

// import Menu  from "./components/Menu";

class App extends Component {
  render()
  {
    return (

      <Router>
      <Navbar/>
        <Switch>
            <Route path="/authentication" component={Authentication} />
            <Route path="/aboutus" component={Aboutus} />
            <ProtectedRoute exact={true} path="/" component={Home} />
            <ProtectedRoute component={Home} />
            <ProtectedRoute exact={true} path="/add-profile" component={AddProfile} />
            <ProtectedRoute component={AddProfile} />
            <ProtectedRoute exact={true} path="/update-profile" component={UpdateProfile} />
            <ProtectedRoute component={UpdateProfile} />
            <ProtectedRoute exact={true} path="/profile-detail" component={ProfileDetail} />
            <ProtectedRoute component={ProfileDetail} />
            <ProtectedRoute exact={true} path="/menu-list" component={MenuList} />
            <ProtectedRoute component={MenuList} />
            <ProtectedRoute exact={true} path="/company-list" component={Firm} />
            <ProtectedRoute component={Firm} />
        </Switch>
        
    </Router>
      // <Router>
      //   <Navbar />
      //   <Switch>
      //     <Route exact path="/">
      //       <Home />
      //     </Route>
      //     <Route path="/add-profile">
      //       <AddProfile />
      //     </Route>
      //     <Route path="/update-profile">
      //       <UpdateProfile />
      //     </Route>
      //     <Route path="/profile-detail">
      //       <ProfileDetail />
      //     </Route>
      //     <Route path="/customer-list">
      //       <CustomerList />
      //     </Route>
      //     <Route path="/menu-list">
      //       <MenuList />
      //     </Route>
      //     <Route path="/company-list">
      //       <Firm />
      //     </Route>
      //     <Route path="/authentication">
      //       <Authentication/>
      //     </Route>
      //   </Switch>
      // </Router>
    )
  }
}

export default App;
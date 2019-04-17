import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../Portal/portal.css';

import Button from "../../assets/Material/CustomButtons/Button";
import Header from "../../assets/Material/Header/Header";
import HeaderLinks from "../../assets/Material/Header/HeaderLinks";
// import withStyles from "@material-ui/core/styles/withStyles";
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
import classNames from "classnames";

import Footer from "../../assets/Material/Footer/Footer.jsx";
import GridContainer from "../../assets/Material/Grid/GridContainer.jsx";
import GridItem from "../../assets/Material/Grid/GridItem.jsx";
import NavPills from "../../assets/Material/NavPills/NavPills.jsx";
import Parallax from "../../assets/Material/Parallax/Parallax.jsx";

import profile from "../../assets/img/faces/christian.jpg";

import studio1 from "../../assets/img/examples/studio-1.jpg";
import studio2 from "../../assets/img/examples/studio-2.jpg";
import studio3 from "../../assets/img/examples/studio-3.jpg";
import studio4 from "../../assets/img/examples/studio-4.jpg";
import studio5 from "../../assets/img/examples/studio-5.jpg";
import work1 from "../../assets/img/examples/olu-eletu.jpg";
import work2 from "../../assets/img/examples/clem-onojeghuo.jpg";
import work3 from "../../assets/img/examples/cynthia-del-rio.jpg";
import work4 from "../../assets/img/examples/mariya-georgieva.jpg";
import work5 from "../../assets/img/examples/clem-onojegaw.jpg";


import profilePageStyle from "../../assets/jss/material-kit-react/views/profilePage";

/* Once the 'Authservice' and 'withAuth' componenets are created, import them into App.js */
import AuthHelperMethods from '../../components/AuthHelperMethods';


//Our higher order component
import withAuth from '../../components/withAuth';
// import profilePageStyle from "./assets/jss/material-kit-react/views/UserPage";

class Profile extends React.Component {

  state = {
    username: ''
  }
  /* Create a new instance of the 'AuthHelperMethods' compoenent*/
  Auth = new AuthHelperMethods();

  _handleLogout = () => {
    this.Auth.logout()
    this.props.history.replace('/login');
  }



  //Render the protected component
  render() {
    let name = null;
    if (this.props.confirm) {
      name = this.props.confirm.username;
    }
    //let name = this.props.confirm.username;
    console.log("Rendering Appjs!")
   


    return (

      <div>
        <Header
          brand="Job Board"
          color="transparent"
          leftLinks={<Button
            id="logoutbutton"
            color="transparent"
            onClick={this._handleLogout}
          >LOGOUT</Button>}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
        />
       <div className="App">
        <div className="App">
          <div className="main-page">
            <div className="top-section">
              <h1>Welcome, {name}</h1>
            </div>
            <div className="bottom-section">
              <button onClick={this._handleLogout}>LOGOUT</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

//In order for this component to be protected, we must wrap it with a 'Higher Order Component' or HOC.

export default withAuth(Profile);


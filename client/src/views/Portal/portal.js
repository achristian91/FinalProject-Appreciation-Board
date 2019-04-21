import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../Portal/portal.css';

import Button from "../../assets/Material/CustomButtons/Button";
import Header from "../../assets/Material/Header/Header";
import HeaderLinks from "../../assets/Material/Header/HeaderLinks";

/* Once the 'Authservice' and 'withAuth' componenets are created, import them into App.js */
import AuthHelperMethods from '../../components/AuthHelperMethods';

import image from "../../assets/img/bg8.jpg";

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
   
    const { classes, ...rest } = this.props;


    return (

      <div>
        <Header
          brand="Appreciation Board"
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
        <div
                        style={{
                            backgroundImage: "url(" + image + ")",
                            backgroundSize: "cover",
                            backgroundPosition: "top center"
                        }}
                    >


       <div className="App">
        <div className="App">
          <div className="main-page">
            <div className="top-section">
              <h1 id="portal-top">Welcome to the Portal ({name})! </h1>
            </div>
            <div className="bottom-section">
            <h2 id="portal-middle">Click below to access the Feed.</h2>
            </div>
            <div className="button-section">
            <Button id="portal-bottom" size="lg" color="danger" className="form-submit" rel="noopener noreferrer" component={Link} to="feed">Feed </Button>
            </div>
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


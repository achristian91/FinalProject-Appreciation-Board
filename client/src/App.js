import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './App.css';

// import withStyles from "@material-ui/core/styles/withStyles";
import Button from "./assets/Material/CustomButtons/Button";
import Header from "./assets/Material/Header/Header";
import HeaderLinks from "./assets/Material/Header/HeaderLinks";

/* Once the 'Authservice' and 'withAuth' componenets are created, import them into App.js */
import AuthHelperMethods from './components/AuthHelperMethods';

//Our higher order component
import withAuth from './components/withAuth';
// import profilePageStyle from "./assets/jss/material-kit-react/views/UserPage";

class App extends React.Component {

  state = {
    username: ''
  }
  /* Create a new instance of the 'AuthHelperMethods' compoenent*/
  Auth = new AuthHelperMethods();

  _handleLogout = () => {
    this.Auth.logout()
    this.props.history.replace('/');
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

      <div className="App">
        <Header
          color="transparent"
          brand="Appreciation Board"
          rightLinks={
         <Button 
         onClick={this._handleLogout} 
         color="transparent"
          >LOGOUT</Button>}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <div className="App">
          <div className="main-page">
            <div className="top-section">
              <h1>Welcome to Appreciation Board, {name}</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//In order for this component to be protected, we must wrap it with a 'Higher Order Component' or HOC.

export default withAuth(App);


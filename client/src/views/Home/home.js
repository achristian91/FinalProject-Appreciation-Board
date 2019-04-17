/* eslint-disable react/no-unescaped-entities */
import React from "react";

import { Link } from "react-router-dom";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


// core components
import Header from "../../assets/Material/Header/Header";
import GridContainer from "../../assets/Material/Grid/GridContainer.jsx";
import GridItem from "../../assets/Material/Grid/GridItem.jsx";
import HeaderLinks from "../../assets/Material/Header/HeaderLinks.jsx";
import Parallax from "../../assets/Material/Parallax/Parallax.jsx";
import Button from "../../assets/Material/CustomButtons/Button";

import homePageStyle from "../../assets/jss/material-kit-react/views/homePage";

class HomePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          brand="Job Board"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("../../assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Job Board</h1>
                <h4>
                Web Application that allows small businesses to provide a portal 
                where employees can post recognition to their fellow staff 
                for their outstanding merit. 
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  component={Link} to="login"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />Login
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container} />
        </div>
      </div>
    );
  }
}

export default withStyles(homePageStyle)(HomePage);

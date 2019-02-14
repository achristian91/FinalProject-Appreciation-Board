/* eslint-disable react/no-unescaped-entities */
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "../../../assets/Material/Header/Header";
import GridContainer from "../../../assets/Material/Grid/GridContainer.jsx";
import GridItem from "../../../assets/Material/Grid/GridItem.jsx";
import HeaderLinks from "../../../assets/Material/Header/HeaderLinks.jsx";
import Parallax from "../../../assets/Material/Parallax/Parallax.jsx";

import homePageStyle from "../../../assets/jss/material-kit-react/views/homePage";

class HomePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          brand="Appreciation Board"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("../../../assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Appreciation Board</h1>
                <h4>
                Web Application that allows small businesses to provide a portal 
                where fellow employees can post recognition to their fellow staff 
                for their outstanding merit. 
                </h4>
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

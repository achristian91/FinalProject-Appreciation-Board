/*eslint-disable*/
import React, { Component} from "react";
// react components for routing our app without refresh
import { Link, Redirect } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import Button from "../CustomButtons/Button";

import headerLinksStyle from "../../jss/material-kit-react/components/headerLinksStyle";

import AuthHelperMethods from '../../../components/AuthHelperMethods';

//Our higher order component
import withAuth from '../../../components/withAuth';

class HeaderLogout extends Component {

    state = {
      username: ''
    }

Auth = new AuthHelperMethods();


_handleLogout = () => {
    this.Auth.logout()
    this.props.history.replace('/login');
  }


 ({ ...props }) {
    const { classes } = props;
      /* Create a new instance of the 'AuthHelperMethods' compoenent*/
  
    
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <Button
                    component={Link} to="feed"
                    color="transparent"
                >
                    Feed
        </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button
                    onClick={this._handleLogout}
                    color="transparent"
                >
                    Logout
        </Button>
            </ListItem>
        </List>
    );
}

export default withStyles(headerLinksStyle)(withAuth)(HeaderLogout);

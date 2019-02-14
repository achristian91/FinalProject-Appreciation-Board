/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

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

function HeaderLinks({ ...props }) {
  const { classes } = props;
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
          component={Link} to="Portal"
          color="transparent"
        >
          Portal
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);

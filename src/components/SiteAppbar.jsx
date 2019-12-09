import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  appBarButton: {
    marginLeft: theme.spacing(3)
  },
  appBar: {
    background: "black",
    color: "white"
  },
  appBarHeader: {
    textTransform: "uppercase",
    flexGrow: 1
  },
  menuIcon: {
    color: "white"
  }
}));

const SiteAppbar = props => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar>
        <IconButton>
          <MenuIcon className={classes.menuIcon} />
        </IconButton>
        <Typography className={classes.appBarHeader} variant="h6">
          Daniel Varcas
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

SiteAppbar.propTypes = {};

export default SiteAppbar;

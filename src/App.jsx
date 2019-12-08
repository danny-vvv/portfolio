import React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const instagramGradient = "linear-gradient(90deg, #833ab4, #fd1d1d, #fcb045)";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(3)
  },
  myButton: {
    background: instagramGradient,
    color: "white"
  },
  appBarButton: {
    marginLeft: theme.spacing(3)
  },
  appBar: {},
  appBarHeader: {
    textTransform: "uppercase",
    flexGrow: 1
  },
  menuIcon: {
    color: "white"
  }
}));

const SiteAppBar = styled(AppBar)({
  background: "black",
  color: "white"
});

function App() {
  const classes = useStyles();

  const links = [
    { text: "GitHub", icon: "fab fa-github" },
    { text: "LinkedIn", icon: "" },
    { text: "Twitter", icon: "" }
  ];
  const linkButtons = links.map(link => (
    <Button className={[classes.myButton, classes.appBarButton]}>
      <i className={link.icon} />
      {link.text}
    </Button>
  ));

  return (
    <>
      <SiteAppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton>
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
          <Typography className={classes.appBarHeader} variant="h6">
            Daniel Varcas
          </Typography>
          {linkButtons}
        </Toolbar>
      </SiteAppBar>

      <Container>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Box margin={2}>
              <Typography variant="h1">Hello, world.</Typography>
              <Typography variant="h2">Welcome to my website.</Typography>
            </Box>
          </Grid>
          {linkButtons}
        </Grid>
      </Container>
    </>
  );
}

export default App;

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { Typography, Button, Box } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const instaPurple = "#833ab4";
const instaRed = "#fd1d1d";
const instaOrange = "#fcb045";
const instaGradient = `linear-gradient(90deg, ${instaPurple}, ${instaRed}, ${instaOrange})`;

const moonlitAsteroid = "linear-gradient(#0F2027, #203A43, #2C5364)";

const useStyles = makeStyles(theme => ({
  root: {
    background: moonlitAsteroid,
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center"
  },
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(3)
  },
  button: {
    background: instaGradient,
    color: "white"
  },
  textEmphasis: {
    color: "#ff0076"
  }
}));

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
    <Box className={classes.root}>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5" component="h1">
            Hi, I'm <span className={classes.textEmphasis}>Daniel Varcas</span>.
          </Typography>
          <Typography variant="h5" component="h1">
            I'm a full-stack web developer.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button className={classes.button}>
            See my work <ArrowForwardIcon />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;

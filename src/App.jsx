import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { Typography, Button, Box } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { withStyles } from "@material-ui/core/styles";

const instaPurple = "#833ab4";
const instaRed = "#fd1d1d";
const instaOrange = "#fcb045";
const instaGradient = `linear-gradient(90deg, ${instaPurple}, ${instaRed}, ${instaOrange})`;

const moonlitAsteroid = "linear-gradient(90deg, #0F2027, #203A43, #2C5364)";

const styles = theme => ({
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
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWelcomeMessage: true
    };
  }

  hideWelcomeMessage() {
    this.setState({
      showWelcomeMessage: false
    });
  }

  render() {
    const { classes } = this.props;
    const { showWelcomeMessage } = this.state;

    return (
      <>
        <CssBaseline />
        {showWelcomeMessage && (
          <Box className={classes.root}>
            <Box>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h5" component="h1">
                    Hi, I&apos;m{" "}
                    <span className={classes.textEmphasis}>Daniel Varcas</span>.
                  </Typography>
                  <Typography variant="h5" component="h1">
                    I&apos;m a full-stack web developer.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    className={classes.button}
                    onClick={() => this.hideWelcomeMessage()}
                  >
                    See my work <ArrowForwardIcon />
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        )}
      </>
    );
  }
}

export default withStyles(styles)(App);

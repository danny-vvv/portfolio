import React from "react";
import PropTypes from "prop-types";
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

const WelcomeMessage = props => {
  const { classes, hideWelcomeMessage } = props;

  return (
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
              onClick={() => hideWelcomeMessage()}
            >
              See my work <ArrowForwardIcon />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

WelcomeMessage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  classes: PropTypes.object.isRequired,
  hideWelcomeMessage: PropTypes.func.isRequired
};

export default withStyles(styles)(WelcomeMessage);

import React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography, AppBar, Toolbar, Button, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3),
    margin: theme.spacing(3)
  },
  myButton: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  }
}));

const SiteAppBar = styled(AppBar)({
  background: "linear-gradient(45deg, #0F2027, #203A43, #2c5364)",
  color: "white"
});

const MyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
});

function App() {
  const classes = useStyles();

  const numbers = [1, 2, 3, 4, 5];
  const mappedItems = numbers.map(number => (
    <Grid item xs={12} sm={6}>
      <Paper className={classes.paper}>{number}</Paper>
    </Grid>
  ));

  return (
    <>
      <SiteAppBar position="static">
        <Toolbar>
          <Typography variant="h6">DV</Typography>
          {[1, 2, 3].map(() => (
            <MyButton className={classes.myButton}>Hello</MyButton>
          ))}

          <Button color="inherit">Hi</Button>
        </Toolbar>
      </SiteAppBar>

      <Container>
        <Grid container className={classes.root}>
          <Grid item xs={12}>
            <Typography variant="h1" align="center">
              Hello, world.
            </Typography>
            <Typography variant="h2" align="center">
              Welcome to my website.
            </Typography>
          </Grid>
          {mappedItems}
        </Grid>
      </Container>
    </>
  );
}

export default App;

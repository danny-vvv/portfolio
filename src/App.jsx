import React from "react";
import Container from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  Paper,
  Card,
  CardActions,
  CardContent
} from "@material-ui/core";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">DV</Typography>
        </Toolbar>
      </AppBar>

      <Grid container>
        <Grid item xs={12}>
          <Paper>
            <Typography variant="h1">Hello, world.</Typography>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default App;

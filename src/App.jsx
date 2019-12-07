import React from 'react';
import Container from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
  Typography, AppBar, Toolbar, Button, Paper, Card, CardActions, CardContent,
} from '@material-ui/core';

function App() {
  return (
    <>

      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            DV
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h1">Hello, world.</Typography>
        </Grid>

        <Grid item xs={12}>
          <Paper>
            <Typography variant="h2">Hello, world.</Typography>

            <p>Adipisicing quis mollit velit nostrud amet. Dolore occaecat ad quis ad deserunt anim consectetur eiusmod. Est elit nulla dolor tempor labore tempor anim ut eiusmod do labore. Velit deserunt tempor qui duis eiusmod elit. Dolor elit officia reprehenderit laborum eiusmod consectetur voluptate elit proident id. Aute ipsum esse aute sint.</p>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Paper>
            <Typography variant="h2">Hello, world.</Typography>

            <p>Adipisicing quis mollit velit nostrud amet. Dolore occaecat ad quis ad deserunt anim consectetur eiusmod. Est elit nulla dolor tempor labore tempor anim ut eiusmod do labore. Velit deserunt tempor qui duis eiusmod elit. Dolor elit officia reprehenderit laborum eiusmod consectetur voluptate elit proident id. Aute ipsum esse aute sint.</p>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Paper>
            <Typography variant="h2">Hello, world.</Typography>

            <p>Adipisicing quis mollit velit nostrud amet. Dolore occaecat ad quis ad deserunt anim consectetur eiusmod. Est elit nulla dolor tempor labore tempor anim ut eiusmod do labore. Velit deserunt tempor qui duis eiusmod elit. Dolor elit officia reprehenderit laborum eiusmod consectetur voluptate elit proident id. Aute ipsum esse aute sint.</p>
          </Paper>
        </Grid>

        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
          Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
          hello
            </Typography>
            <Typography color="textSecondary">
          world
            </Typography>
            <Typography variant="body2" component="p">
          Hi
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

      </Grid>

    </>
  );
}

export default App;

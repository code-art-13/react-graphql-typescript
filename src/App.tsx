import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nutrition from './containers/Nutrition';
import { Grid, Paper, ListItem, List } from '@material-ui/core';

function App() {
  return (
    <Grid container className="App" component={List} justify="center">
      <ListItem>
        <h1>Nutritions Application</h1>
      </ListItem>
      <ListItem>
        <Nutrition/>
      </ListItem>
    </Grid>
  );
}

export default App;

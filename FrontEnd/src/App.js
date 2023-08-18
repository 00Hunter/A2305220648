import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TrainList from './components/TrainList';
import TrainDetails from './components/TrainDetails';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { makeStyles } from '@mui/styles';
import ApiClient from './ApiClient';

const useStyles = makeStyles({
  container: {
    padding: '20px',
  },
});

const App = () => {
  const [trains, setTrains] = useState([]);
  const classes = useStyles();

  

  return (
    <Router>
      <CssBaseline />
      <Container className={classes.container}>
        <Switch>
          <Route exact path="/">
            <TrainList trains={trains} />
          </Route>
          <Route path="/apii/:trainId">
            <TrainDetails trains={trains} />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;

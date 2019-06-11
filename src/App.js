import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home'

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Redirect to="/" />
    </Switch>
  );
}

export default App;

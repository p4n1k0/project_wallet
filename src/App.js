import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
// import Wallet from './pages/Wallet';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SnackbarProvider from 'react-simple-snackbar'

import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import "./App.css";

function App() {
  return (
    <SnackbarProvider>
      <Router>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </SnackbarProvider>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/signed_out/pages/Home";
import Login from "./components/signed_out/pages/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;

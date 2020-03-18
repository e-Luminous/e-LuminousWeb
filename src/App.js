import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/signed_out/pages/Home";
import Login from "./components/signed_out/pages/Login";
import Register from "./components/signed_out/pages/Register";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;

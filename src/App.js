import React, { useEffect, useState } from "react";
import "./App.css";
import { auth } from "./utils/firebase";
import { Route, Switch } from "react-router-dom";
import Home from "./components/signed_out/pages/Home";
import Login from "./components/signed_out/pages/Login";
import Register from "./components/signed_out/pages/Register";

function App() {
  const [user, setuser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        setuser(user);
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
      } else {
        // User is signed out.
        // ...
        setuser(user);
      }
    });
  }, []);

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

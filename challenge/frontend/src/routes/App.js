import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../components/Login";
import UserInfo from "../components/UserInfo";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/">
          <h1>
            <Link to="/login">Go to login.</Link>
          </h1>
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/user-info" component={UserInfo} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../containers/home";
import Contact from "../containers/contact";
import Layout from "../components/common/layout";
const PublicRoutes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Layout>
  );
};

export default PublicRoutes;

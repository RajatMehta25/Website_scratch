import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoutes from "./privateRoutes";
import PublicRoutes from "./publicRoutes";

const Routes = ({ user }) => {
  return <Switch>{user?.loggedIn ? <PrivateRoutes /> : <PublicRoutes />}</Switch>;
};

export default Routes;

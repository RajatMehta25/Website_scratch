import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const Routes = ({ user }) => {
  console.log(user);
  return user?.loggedIn ? <PrivateRoutes /> : <PublicRoutes />;
};

export default Routes;

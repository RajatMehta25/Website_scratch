import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoutes = ({ user }) => {
  return (
    <Layout>
      <Route path="/private">{user?.isLoggedIn ? <Contact /> : <Redirect to="/login" />}</Route>
    </Layout>
  );
};

export default PrivateRoutes;

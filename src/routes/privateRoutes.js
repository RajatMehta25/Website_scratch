import React from "react";
import { Redirect, Route } from "react-router-dom";
import Layout from "../components/common/layout";
import Contact from "../containers/contact";
const PrivateRoutes = ({ user }) => {
  return (
    <div>empty</div>
    // <Layout>
    // {/* <Route path="/private">{user?.isLoggedIn ? <Contact /> : <Redirect to="/login" />}</Route> */}
    // </Layout>
  );
};

export default PrivateRoutes;

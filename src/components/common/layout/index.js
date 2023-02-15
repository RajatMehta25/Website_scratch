import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <HEader></HEader>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;

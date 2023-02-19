import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav style={{ textAlign: "center", marginTop: "20px" }}>
      <Link to="/" style={{ padding: "10px" }}>
        Home
      </Link>

      <Link to="/contact" style={{ padding: "10px" }}>
        Contact
      </Link>

      <Link to="/about" style={{ padding: "10px" }}>
        About
      </Link>
    </nav>
  );
};

export default Header;

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Routes from "./routes";
import Layout from "./components/common/layout";

function App() {
  const [user, setUser] = useState({ loggedIn: false, name: "ABC" });

  return <Routes user={user} />;
  // return <Layout user={user} children={Routes} />;
}

export default App;

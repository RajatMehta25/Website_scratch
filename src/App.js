import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Routes from "./routes";

function App() {
  const [user, setUser] = useState({ loggedIn: true, name: "ABC" });

  return <Routes user={user} />;
}

export default App;

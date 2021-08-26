import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import { UserProvider } from "./contexts/UserProvider";
import "antd/dist/antd.css";
import CreateDebate from "./components/debates/CreateDebate";
import Navbar from "./components/Navbar";
import Debates from "./components/debates/Debates";

axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://discoursedebate.com"
    : "http://localhost:5000";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
        <Navbar />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route
              path="/debates/create"
              exact
              component={() => <CreateDebate />}
            />
            <Route
              path="/debates"
              exact
              component={() => <Debates />}
            />
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;

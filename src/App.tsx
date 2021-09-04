import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/general/Home";
import "antd/dist/antd.css";
import CreateDebate from "./components/debates/CreateDebate";
import Navbar from "./components/general/Navbar";
import Debates from "./components/debates/Debates";
import AllProviders from "./contexts/AllProviders";
import LoginPage from "./components/login/LoginPage";
import RegistrationPage from "./components/login/RegistrationPage";

axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://discoursedebate.com"
    : "http://localhost:5000";

function App() {
  return (
    <div className="App">
      <Router>
        <AllProviders>
        <Navbar />
          <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route
              path="/login"
              exact
              component={() => <LoginPage />}
            />
            <Route
              path="/register"
              exact
              component={() => <RegistrationPage />}
            />
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
        </AllProviders>
      </Router>
    </div>
  );
}

export default App;

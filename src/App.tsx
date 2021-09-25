import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/general/LandingPage";
import "antd/dist/antd.css";
import CreateDebate from "./components/debates/CreateDebate";
import Navbar from "./components/general/Navbar";
import Debates from "./components/debates/Debates";
import AllProviders from "./contexts/AllProviders";
import LoginPage from "./components/login/LoginPage";
import RegistrationPage from "./components/login/RegistrationPage";
import DebateRoom from "./components/debates/DebateRoom";

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
            <Route path="/" exact component={() => <LandingPage />} />
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
              path="/home/create"
              exact
              component={() => <CreateDebate />}
            />
            <Route
              path="/home"
              exact
              component={() => <Debates />}
            />
            <Route
              path="/debates/:id"
              exact
              component={DebateRoom}
            />
          </Switch>
        </AllProviders>
      </Router>
    </div>
  );
}

export default App;

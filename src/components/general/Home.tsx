import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Flexbox from "../sharedComponents/Flexbox";
import Login from "../login/Login";
import UserContext from "../../contexts/UserProvider";

const Home = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) history.push("/debates");
  }, [user, history]);

  return (
    <div className="home-grid">
      <div
        style={{
          fontFamily: "'Bebas Neue', cursive",
          alignSelf: "flex-start",
          background: "rgb(201, 224, 230)",
          padding: "20px",
          height: "100%",
          borderRight: "5px solid #d0d0d0",
        }}
      >
        <Flexbox direction="column" justify="flex-start">
          <span className="home-welcome">Welcome to DISCOURSE.</span>
          <span
            style={{
              color: "rgb(60, 60, 60)",
              marginBottom: "20px",
              fontSize: "30px",
            }}
          >
            It's Time To Prove The Internet Wrong.
          </span>
          <button
            onClick={() => history.push("/debates")}
            className="start-btn"
          >
            LET'S GET STARTED!
          </button>
        </Flexbox>
      </div>
      <div
        style={{
          background: "#647d86",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Login />
      </div>
    </div>
  );
};

export default Home;

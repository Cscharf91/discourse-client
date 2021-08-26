import React from "react";
import { Link, useHistory } from "react-router-dom";
import Flexbox from "../../sharedComponents/Flexbox";

const Home = () => {
  const history = useHistory();
  // const { users } = useContext(UserContext);

  return (
    <div
      style={{
        height: "calc(100vh - 70px)",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "4fr 13fr"
      }}
    >
        <div
          style={{
            fontFamily: "'Bebas Neue', cursive",
            alignSelf: "flex-start",
            background: "lightblue",
            padding: "20px",
            height: "100%",
            borderRight: "5px solid white",
          }}
        >
          <Flexbox direction="column" justify="flex-start">
            <span
              style={{ color: "#262626", fontSize: "60px", marginTop: "150px" }}
            >
              Welcome to DISCOURSE.
            </span>
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
          style={{ background: "#647d86" }}
        >
          {/* <div
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "20px",
              width: "300px",
              height: "400px",
              padding: "15px",
              borderRadius: "15px",
              background: "#fff",
            }}
          >
            Sup
          </div> */}
          {/* <span style={{ fontSize: "250px", userSelect: "none", }}>⚔️</span> */}
          {/* <p style={{ fontFamily: "Roboto", fontSize: "20px" }}>Discourse is the place to finally settle: is hotdog a sandwich?</p> */}
        </div>
      {/* <Flexbox style={{ gap: "10px", marginTop: "20px" }}>
        <Link to="/debates/create">
          <Button type="primary">Start Discourse</Button>
        </Link>
        <Link to="/debates">
          <Button type="primary">Find Discourse</Button>
        </Link>
      </Flexbox> */}
    </div>
  );
};

export default Home;

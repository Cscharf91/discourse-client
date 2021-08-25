import React from "react";
import Flexbox from "../../sharedComponents/Flexbox";

const Home = () => {
  // const { users } = useContext(UserContext);

  return (
    <div
      style={{
        height: "calc(100vh - 70px)",
        fontFamily: "'Bebas Neue', cursive",
      }}
    >
      <Flexbox justify="flex-start">
        <Flexbox
          width="40%"
          align="start"
          justify="start"
          direction="column"
          style={{ alignSelf: "flex-start", background: "lightblue", padding: "20px", maxWidth: "500px" }}
        >
          <span style={{ color: "#262626", fontSize: "60px", marginTop: "150px" }}>
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
          <button className="start-btn">LET'S GET STARTED!</button>
        </Flexbox>
        <Flexbox width="calc(100% - 450px)" justify="center" direction="column">
          <span style={{ fontSize: "180px", userSelect: "none", }}>⚔️</span>
          <p style={{ fontFamily: "Roboto", fontSize: "20px" }}>Discourse is the place to finally settle: is hotdog a sandwich?</p>
        </Flexbox>
      </Flexbox>
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

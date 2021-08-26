import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Flexbox from "../sharedComponents/Flexbox";

const Navbar = () => {
  return (
    <div
      style={{
        height: "70px",
        width: "100%",
        background: "rgb(41, 70, 81)",
        borderBottom: "5px solid white",
        boxShadow: "0 1px 3px 0 #626262",
        fontFamily: "'Bebas Neue', cursive",
      }}
    >
      <Flexbox justify="space-between">
        <Link to="/">
          <h1
            className="navbar-logo"
            style={{
              fontWeight: "bolder",
              fontSize: "30px",
              color: "#fff",
              marginLeft: "15px",
              marginTop: "13px",
              height: "50px",
            }}
          >
            DISCOURSE
          </h1>
        </Link>

        <Flexbox gap="8px" justify="flex-end" style={{ marginRight: "15px" }}>
          <Button
            style={{
              borderRadius: "5px",
              background: "rgb(36, 58, 66)",
              color: "#fff",
            }}
          >
            Stuff
          </Button>
          <Button
            style={{
              borderRadius: "5px",
              background: "rgb(36, 58, 66)",
              color: "#fff",
            }}
          >
            Stuff
          </Button>
          <Button
            style={{
              borderRadius: "5px",
              background: "rgb(36, 58, 66)",
              color: "#fff",
            }}
          >
            Stuff
          </Button>
          <Button
            style={{
              borderRadius: "5px",
              background: "rgb(36, 58, 66)",
              color: "#fff",
            }}
          >
            Stuff
          </Button>
        </Flexbox>
      </Flexbox>
    </div>
  );
};

export default Navbar;

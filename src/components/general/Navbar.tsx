import { Button } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../contexts/UserProvider";
import { BellOutlined } from "@ant-design/icons";
import Flexbox from "../sharedComponents/Flexbox";
import { useStore } from "../../stores/useStore";

const Navbar = () => {
  const { user, handleLogOut } = useContext(UserContext);
  const debateSlice = useStore((state) => state.debateSlice);
  const { debateRequests } = debateSlice;

  return (
    <div
      style={{
        height: "70px",
        width: "100%",
        background: "rgb(41, 70, 81)",
        // borderBottom: "5px solid #d0d0d0",
        // boxShadow: "0 1px 3px 0 #626262",
        fontFamily: "'Bebas Neue', cursive",
      }}
    >
      <Flexbox justify="space-between">
        <Link to="/home">
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
          {user ? (
            <>
              <div style={{ position: "relative", display: "flex" }}>
                <Button
                  size="large"
                  style={{
                    borderRadius: "5px",
                    background: "rgb(36, 58, 66)",
                    color: "#fff",
                  }}
                  icon={<BellOutlined />}
                >
                  Notifications
                </Button>
                {debateRequests.length > 0 && (
                  <div
                    style={{
                      borderRadius: "50%",
                      position: "absolute",
                      backgroundColor: "#ae1f1f",
                      color: "#fff",
                      width: "23px",
                      top: "-5px",
                      right: "-5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span>{debateRequests.length}</span>
                  </div>
                )}
              </div>
              <Button
                onClick={handleLogOut}
                size="large"
                style={{
                  borderRadius: "5px",
                  background: "rgb(36, 58, 66)",
                  color: "#fff",
                }}
              >
                Log Out
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button
                size="large"
                style={{
                  borderRadius: "5px",
                  background: "rgb(36, 58, 66)",
                  color: "#fff",
                }}
              >
                Log In
              </Button>
            </Link>
          )}
        </Flexbox>
      </Flexbox>
    </div>
  );
};

export default Navbar;

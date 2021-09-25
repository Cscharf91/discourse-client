import { Col, Row } from "antd";
import React, { useContext } from "react";
import DebateContext from "../../contexts/DebateProvider";
import SubNavbar from "../general/SubNavbar";
import DebateCard from "./DebateCard";
import { DebateFilters } from "./DebateFilters";

const Debates = () => {
  const { debates } = useContext(DebateContext);

  return (
    <>
      <SubNavbar selectedKey="1" />
      <Row justify="center" style={{ margin: "15px 0" }}>
        <Col xs={24} md={22} lg={20} xl={16}>
          <Row>
            {/* Filters Card Here */}
            <Col
              xs={24}
              sm={22}
              md={7}
              lg={7}
              xl={6}
              style={{ minHeight: "500px" }}
            >
              <div style={{ marginTop: "40px", height: "100%" }}>
                <Row justify="center">
                  <Col xs={24} sm={22} md={22}>
                    <DebateFilters />
                  </Col>
                </Row>
              </div>
            </Col>

            {/* Content Cards Go Here */}
            <Col
              className="cards-container"
              xs={24}
              sm={22}
              md={17}
              lg={17}
              xl={18}
              style={{ minHeight: "500px" }}
            >
              {React.Children.toArray(
                debates.map((debate) => {
                  return <DebateCard debate={debate} />;
                })
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Debates;

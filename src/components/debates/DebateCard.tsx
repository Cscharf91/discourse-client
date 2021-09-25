import { Avatar, Col, Row, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React from "react";
import { Debate } from "../../types";
import Flexbox from "../sharedComponents/Flexbox";

interface DebateProps {
  debate: Debate;
}

const DebateCard = ({ debate }: DebateProps) => {
  return (
    <Row justify="center" align="top" style={{ marginTop: "40px" }}>
      <Col xs={24} sm={22} lg={23}>
        <div className="content-card">
          <Flexbox justify="flex-start" gap="15px">
            <Flexbox
              justify="center"
              align="center"
              direction="column"
              style={{
                minHeight: "100px",
                width: "100px",
                borderRight: "1px solid rgb(242, 242, 242)",
              }}
            >
              <Tooltip title={debate.username}>
                <Avatar
                  size={60}
                  src={debate.avatar && debate.avatar}
                  icon={!debate.avatar && <UserOutlined />}
                />
              </Tooltip>
            </Flexbox>

            <Flexbox direction="column" justify="center" align="flex-start">
              <h3 style={{ fontSize: "20px", color: "rgb(72, 72, 72)" }}>
                {debate.topic}
              </h3>
              <h5 style={{ color: "rgb(83, 82, 82)" }}>
                {debate.creator_position}
              </h5>
            </Flexbox>
          </Flexbox>
        </div>
      </Col>
    </Row>
  );
};

export default DebateCard;

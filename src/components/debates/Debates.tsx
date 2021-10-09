import { Col, message, Modal, Row } from "antd";
import axios from "axios";
import React, { useContext, useState } from "react";
import UserContext from "../../contexts/UserProvider";
import { messageError } from "../../helpers/messageError";
import { useStore } from "../../stores/useStore";
import { Debate, RequestForm } from "../../types/types";
import SubNavbar from "../general/SubNavbar";
import DebateCard from "./DebateCard";
import { DebateFilters } from "./DebateFilters";
import { DebateRequestForm } from "./debateRequest/DebateRequestForm";

const Debates = () => {
  const debateSlice = useStore((state) => state.debateSlice);
  const { debates } = debateSlice;
  const { user } = useContext(UserContext);
  const [isChallengeVisible, setIsChallengeVisible] = useState(false);
  const [selectedDebate, setSelectedDebate] = useState<Debate | null>(null);

  const handleChallenge = (debate: Debate) => {
    setSelectedDebate(debate);
    setIsChallengeVisible(true);
  };

  const handleSubmitRequest = async (form: RequestForm) => {
    try {
      if (user && selectedDebate) {
        await axios.post("/debates/requests", {
          ...form,
          challenger_id: user.id,
          debate_id: selectedDebate.id,
          receiver_id: selectedDebate.creator_id,
        });
        setIsChallengeVisible(false);
        message.success("Request sent!");
      }
    } catch (error) {
      messageError("sending your request");
    }
  };

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
                  return (
                    <DebateCard
                      handleChallenge={handleChallenge}
                      debate={debate}
                    />
                  );
                })
              )}
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal
        visible={isChallengeVisible}
        onCancel={() => setIsChallengeVisible(false)}
        destroyOnClose
        footer={null}
      >
        <DebateRequestForm
          debate={selectedDebate}
          onFinish={handleSubmitRequest}
        />
      </Modal>
    </>
  );
};

export default Debates;

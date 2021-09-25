import { Col, Row } from "antd";
import React from "react";
import SubNavbar from "../general/SubNavbar";
import Flexbox from "../sharedComponents/Flexbox";
import DebateForm from "./DebateForm";

// const { Step } = Steps;

const CreateDebate = () => {
  // const [currentStep, setCurrentStep] = useState(0);

  return (
    <>
      <SubNavbar selectedKey="3" />
      <div>
        {/* <Row justify="center" style={{ margin: "20px auto", width: "100%" }}>
        <Col sm={22} md={18}>
          <Steps current={currentStep}>
            <Step title="Create Topic" />
            <Step title="Settings" />
          </Steps>
        </Col>
      </Row> */}
        <Row justify="center" align="middle" style={{ margin: "20px auto" }}>
          <Col xs={24} sm={24} md={18} lg={10} xl={8} xxl={6}>
            <Flexbox style={{ height: "80vh" }}>
              <DebateForm />
            </Flexbox>
          </Col>
          {/* <Col span={6}>
        <p>Sup!</p>
        <p>Sup!</p>
        <p>Sup!</p>
        <p>Sup!</p>
        <p>Sup!</p>
        <p>Sup!</p>
        <p>Sup!</p>
        <p>Sup!</p>
          <p>Sup!</p>
        </Col> */}
        </Row>
      </div>
    </>
  );
};

export default CreateDebate;

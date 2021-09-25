import { Button, Form, Input, message, Radio } from "antd";
import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import DebateContext from "../../contexts/DebateProvider";
import UserContext from "../../contexts/UserProvider";

const { TextArea } = Input;

interface FormSubmission {
  topic: string;
  creator_position: string;
  creator_opening: string;
  days: string;
  is_political: boolean;
}

const DebateForm = () => {
  const { user } = useContext(UserContext);
  const { setDebates } = useContext(DebateContext);
  const history = useHistory();

  const handleSubmit = async (values: FormSubmission) => {
    if (user?.id) {
      try {
        const { data } = await axios.post("/debates", {
          ...values,
          days: +values.days,
          creator_id: user?.id,
        });
        setDebates(prevState => [data, ...prevState]);
        history.push(`/debates/${data.id}`);
      } catch (error) {
        message.error(
          "There was an issue posting this debate. Please try again later."
        );
        console.log("error:", error);
      }
    } else {
      message.error(
        "You must be logged in to post a debate. Please log in and try again."
      );
    }
  };

  return (
    <Form
      style={{ padding: "5px" }}
      name="basic"
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={handleSubmit}
      autoComplete="off"
    >
      <div
        style={{
          padding: "14px",
          borderRadius: "10px",
          width: "100%",
          background: "rgb(255, 255, 255)",
          border: "2px solid rgb(225, 225, 225)",
        }}
      >
        <h1 style={{ margin: "10px", textAlign: "center" }}>Create Debate</h1>
        <Form.Item
          label="Topic"
          name="topic"
          rules={[
            {
              required: true,
              message: "Please input a topic",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Position"
          name="creator_position"
          rules={[
            {
              required: true,
              message: "Enter your position on the topic",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Opening Statement"
          name="creator_opening"
          rules={[
            {
              required: true,
              message: "Please enter a statement",
            },
          ]}
        >
          <TextArea autoSize={{ minRows: 3, maxRows: 3 }} />
        </Form.Item>

        <Form.Item
          label={
            <div style={{ height: "100%" }}>
              How many days would you like to keep this debate open after it
              begins?
            </div>
          }
          name="days"
          rules={[
            {
              required: true,
              message: "Please enter a number of days",
            },
          ]}
        >
          <Input type="number" min={1} max={14} style={{ marginTop: "15px" }} />
        </Form.Item>

        <Form.Item
          label="Is this a political topic?"
          name="is_political"
          rules={[
            {
              required: true,
              message: "Check if this is a non-political or political topic",
            },
          ]}
        >
          <Radio.Group
            options={[
              { label: "Non-Political", value: false },
              { label: "Political", value: true },
            ]}
          />
          {/* <Radio>Non-political</Radio> */}
          {/* <Radio>Political</Radio> */}
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default DebateForm;

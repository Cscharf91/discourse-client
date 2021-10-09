import { Avatar, Button, Divider, Form, Input, Tooltip } from "antd";
import React from "react";
import { formItemLayout } from "../../../helpers/formItemLayout";
import { UserOutlined } from "@ant-design/icons";
import { Debate, RequestForm } from "../../../types/types";
import Flexbox from "../../sharedComponents/Flexbox";

interface DebateRequestFormProps {
  onFinish: (form: RequestForm) => void;
  debate: Debate | null;
}

export const DebateRequestForm = ({
  onFinish,
  debate,
}: DebateRequestFormProps) => {
  return (
    <Form onFinish={onFinish} autoComplete="off">
      {debate && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr" }}>
          <Tooltip title={debate.username}>
            <Avatar
              style={{ justifySelf: "center" }}
              size={60}
              src={debate.avatar && debate.avatar}
              icon={!debate.avatar && <UserOutlined />}
            />
          </Tooltip>
          <div style={{ marginLeft: "15px" }}>
            <h3 style={{ fontSize: "20px", color: "rgb(72, 72, 72)" }}>
              {debate.topic}
            </h3>
            <h5 style={{ color: "rgb(83, 82, 82)" }}>
              <strong>Opponent Position:</strong> {debate.creator_position}
            </h5>
          </div>
        </div>
      )}
      <Divider />
      <Form.Item
        {...formItemLayout}
        rules={[
          {
            required: true,
            message: "Please enter your position",
          },
        ]}
        name="challenger_position"
        label="Position"
      >
        <Input autoFocus />
      </Form.Item>
      <Form.Item
        {...formItemLayout}
        rules={[
          {
            required: true,
            message: "Please enter your opening statement",
          },
        ]}
        name="challenger_opening"
        label="Opening Statement"
      >
        <Input.TextArea />
      </Form.Item>
      <Flexbox justify="flex-end" style={{ width: "80%", margin: "auto" }}>
        <Button type="primary" htmlType="submit">
          Submit Request
        </Button>
      </Flexbox>
    </Form>
  );
};

import { Button, Form, Input } from "antd";
import React, { useContext } from "react";
import UserContext from "../../contexts/UserProvider";
import styles from "./login.module.css";

const LoginForm = () => {
  const { handleLoginSubmit, loginError, loading } = useContext(UserContext);
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={handleLoginSubmit}
      autoComplete="off"
    >
      {loginError && (
        <div className={styles.formErrorContainer}>
          <span className={styles.formErrorSpan}>
            The login info provided is incorrect. Please try again.
          </span>
        </div>
      )}

      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button loading={loading} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;

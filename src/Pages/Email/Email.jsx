import { Button, Form, Input, Typography } from "antd";
import React from "react";
import forget from "../../Images/forget.png";
import logo from "../../Images/Logo.png";
import style from "./Email.module.css";
import { IoIosArrowBack } from 'react-icons/io';

const { Title, Paragraph, Text, Link } = Typography;

const Email = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className={style.emailContainer}>
      <div>
        <img src={forget} alt="" />
      </div>
      <div className={style.formContainer}>
        <div>
          <img src={logo} alt="" />
        </div>
        <div style={{ display: "flex" }}>
          <a
            className="login-form-forgot"
            style={{ color: "#000000" }}
            href=""
          >
            <IoIosArrowBack style={{ width: "40px", fontSize: 40 }}></IoIosArrowBack>
          </a>
          <Title
            level={2}
            style={{
              color: "#000000",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Forget Password
          </Title>
        </div>
        <Paragraph style={{ marginBottom: "30px" }}>
          Enter the email address associated with your account. We'll send you an OTP to your email.
        </Paragraph>

        <Form>
          <div>
            <label htmlFor="email" className={style.label}>
              Email
            </label>
            <Form.Item
              name="email"
              id="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input
                placeholder="Enter your email address"
                className={style.input}
              />
            </Form.Item>
          </div>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
              style={{
                height: "45px",
                fontWeight: "400px",
                fontSize: "18px",
                background: "#E91E63",
                alignSelf: "bottom",
                marginTop: "20px",
              }}
            >
              Send OTP
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Email;

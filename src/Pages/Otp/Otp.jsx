import { Button, Form, Input, Typography } from "antd";
import React from "react";
import otp from "../../Images/otp.png";
import logo from "../../Images/Logo.png";
import style from "./Otp.module.css";
import { IoIosArrowBack } from 'react-icons/io';

const { Title, Paragraph, Text, Link } = Typography;

const Otp = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className={style.otpContainer}>
      <div>
        <img src={otp} alt="" />
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
            Verify OTP
          </Title>
        </div>
        <Paragraph style={{ marginBottom: "30px" }}>
          We'll send a verification code to your email. Check your inbox and
          enter the code here.
        </Paragraph>

        <Form>
          <Input.Group
            style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
          >
            <Input className={style.otpInput} />
            <Input className={style.otpInput} />
            <Input className={style.otpInput} />
            <Input className={style.otpInput} />
            <Input className={style.otpInput} />
            <Input className={style.otpInput} />
          </Input.Group>

          <div className={style.rememberAndPass}>
            <Text>Don't received code?</Text>

            <a
              className="login-form-forgot"
              style={{ color: "#000000" }}
              href=""
            >
              Resend
            </a>
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
              Continue
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Otp;

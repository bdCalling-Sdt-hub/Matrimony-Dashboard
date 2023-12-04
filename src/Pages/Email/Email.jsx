import { Button, Form, Input, Typography } from "antd";
import React from "react";
import forget from "../../Images/forget.png";
import logo from "../../Images/Logo.png";
import style from "./Email.module.css";
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from "react-router-dom";
import baseAxios from "../../../Config";
import Swal from "sweetalert2";

const { Title, Paragraph, Text, Link } = Typography;

const Email = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const handleBack = () => {
    navigate("/signin");
  }
  const navigate = useNavigate();
  const onFinish = (values) => {
    setIsLoading(true);
    console.log("Received values of form: ", values);
    baseAxios
      .post("auth/forgot-password", values)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setIsLoading(false);

        Swal.fire({
          icon: "success",
          title: "OTP Sent Successfully",
          text: "Please Check Your Email!",
        });
        navigate(`/forget-password/${values.email}`);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
        setIsLoading(false);
      });
  };
  return (
    <div className={style.emailContainer}>
      <div>
        <img src={forget} alt="" />

      </div>
      <div>

      </div>
      <div className={style.formContainer}>
        <div>
          <img src={logo} alt="" />
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="login-form-forgot"
            style={{ color: "#000000" }}
            onClick={handleBack}

          >
            <IoIosArrowBack style={{ width: "40px", fontSize: 40 }}></IoIosArrowBack>
          </div>
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

        {
          isLoading ? <h1 style={{color: "black"}}>Loading...</h1> :
            <Form onFinish={onFinish}>
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
        }
      </div>
    </div>
  );
};

export default Email;

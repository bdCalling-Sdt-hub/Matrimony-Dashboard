import { Button, Form, Input, Typography } from "antd";
import React, { useState } from "react";
import otpImg from "../../Images/otp.png";
import logo from "../../Images/icon.png";
import style from "./Otp.module.css";
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from "react-router-dom";
import baseAxios from "../../../Config";
import Swal from "sweetalert2";
import OTPInput from "react-otp-input";

const { Title, Paragraph, Text, Link } = Typography;

const Otp = () => {
  let { email } = useParams();
  const [otp, setOtp] = useState("");

  const onFinish = (values) => {
  };

  const navigate = useNavigate();

  const handelOtp = () => {
    baseAxios
      .post("/auth/verify-email", { email, oneTimeCode: otp })
      .then((response) => {
        // sweet alert for success and error set
        Swal.fire({
          icon: "success",
          title: "OTP Verified Successfully",
          // text: "Please Check Your Email!",
        });
        navigate(`/update-password/${email}`);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "OTP is not verified",
        });
      });
  };
  return (
    <div className={style.otpContainer}>
      <div>
        <img src={otpImg} alt="" />
      </div>
      <div className={style.formContainer}>
        <div>
          <img src={logo} alt="" />
        </div>
        <div style={{ display: "flex" }}>
          <div
            className="login-form-forgot"
            style={{ color: "#000000", cursor: "pointer" }}
            onClick={()=>navigate('/signin')}
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
            Verify OTP
          </Title>
        </div>
        <Paragraph style={{ marginBottom: "30px" }}>
          We'll send a verification code to your email. Check your inbox and
          enter the code here.
        </Paragraph>

        <Form>
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            containerStyle={style.otpFormContainer}
            inputStyle={style.otpInputFild}
            renderSeparator={<span style={{ width: "20px" }}></span>}
            renderInput={(props) => <input {...props} />}
          />

          <Form.Item>
            <div className={style.buttonContainer}>
              <Button
                onClick={handelOtp}
                htmlType="submit"
                className={style.verifyButton}
              >
                Verify
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Otp;

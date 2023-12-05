import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import logo from "../../Images/icon.png";
import isometric from "../../Images/isometric.png";
import style from "./Signin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { UserData, reset } from "../../ReduxSlices/SigninSlice";
import Swal from "sweetalert2";
import Cookies from "js-cookie"; // Import js-cookie

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm(); // Ant Design form instance
  const { isLoading, isError, isSuccess, userData, accessToken, message } = useSelector((state) => state.UserData);

  useEffect(() => {
    if (isError) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
      });
    }
    if (isSuccess) {
      localStorage.setItem("yourInfo", JSON.stringify(userData));
      localStorage.setItem("token", accessToken);
      if (userData.role === "admin") {
        window.location.href = "/";
      }
    }
  }, [isLoading, isError, isSuccess, dispatch, navigate]);

  useEffect(() => {
    const rememberedEmail = Cookies.get("rememberedEmail");
    const rememberedPassword = Cookies.get("rememberedPassword");

    if (rememberedEmail) {
      form.setFieldsValue({
        email: rememberedEmail,
        password: rememberedPassword || "",
        remember: true,
      });
    }
  }, []);

  const onFinish = (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    dispatch(UserData(data));

    if (values.remember) {
      Cookies.set("rememberedEmail", values.email, { expires: 30 });
      Cookies.set("rememberedPassword", values.password, { expires: 30 });
    } else {
      Cookies.remove("rememberedEmail");
      Cookies.remove("rememberedPassword");
    }
  };

  const handleForget = () => {
    navigate("/email");
  };

  return (
    <div className={style.signContainer}>
      <div>
        <img src={isometric} alt="" />
      </div>
      <div className={style.formContainer}>
        <div>
          <img src={logo} alt="" />
        </div>
        <h2
          style={{
            color: "black",
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Hello, Welcome!
        </h2>
        {/* Rest of your JSX content */}
        <Form
          form={form}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
        >
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
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder=" Enter your email address"
                type="email"
                className={style.input}
              />
            </Form.Item>
          </div>

          <div>
            <label htmlFor="email" className={style.label}>
              Password
            </label>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder=" Enter your password"
                className={style.input}
              />
            </Form.Item>
          </div>
          <div className={style.rememberAndPass}>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <div
              className="login-form-forgot"
              style={{ color: "black", cursor: "pointer" }}
              onClick={handleForget}
            >
              Forgot password
            </div>
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
                marginTop: "60px",
              }}
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Signin;

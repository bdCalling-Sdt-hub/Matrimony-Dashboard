import { Button, Form, Input, Typography } from "antd";
import React, { useState } from "react";
import logo from "../../Images/Logo.png";
import style from "./UpdatePass.module.css";
import updatePass from "../../Images/updatePass.png";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';
import baseAxios from "../../../Config";
import Swal from "sweetalert2";
const { Title, Paragraph, Text, Link } = Typography;

const UpdatePass = () => {
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  let { email } = useParams();

  const onFinish = (values) => {
    const { password, confirmPassword } = values;

    // Your password validation logic here

    if (password === confirmPassword) {
      baseAxios
        .post("/auth/reset-password", { email, password })
        .then((response) => {
          // sweet alert for success and error set
          Swal.fire({
            icon: "success",
            title: "Password Updated Successfully",
          });
          navigate(`/signin`);
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data.message,
          });
        });
    } else {
      setErr("Password and Confirm Password not match");
      Swal.fire({
        icon: "error",
        title: "Password and Confirm Password not match",
      });
    }
  };
  return (
    <div className={style.emailContainer}>
      <div>
        <img src={updatePass} alt="" />

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
            Update Password

          </Title>
        </div>

               <Form
           name="normal_login"
           className="login-form"
           initialValues={{
             remember: true,
           }}
           onFinish={onFinish}
         >
           {/* Input fields */}
           <div>
             <label htmlFor="" className={style.label}>
               New Password
             </label>
             <Form.Item
               name="password"
               rules={[
                 {
                   required: true,
                   message: "Please enter new password!",
                 },
               ]}
             >
               <Input
                 type="password"
                 placeholder="Password"
                 className={style.input}
               />
             </Form.Item>
           </div>

           <div>
             <label htmlFor="" className={style.label}>
               Re-type Password
             </label>
             <Form.Item
               name="confirmPassword"
               rules={[
                 {
                   required: true,
                   message: "Please enter confirm Password!",
                 },
               ]}
             >
               <Input
                 type="password"
                 placeholder="Confirm password"
                 className={style.input}
               />
             </Form.Item>
           </div>

           {/* Error message */}
           <label style={{ color: "red" }}>{err}</label>

           {/* Submit Button */}
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
               Confirm
             </Button>
           </Form.Item>
         </Form>

      </div>
    </div>
  );

  // return (
  //   <div className={style.signContainer}>
  //     {/* Similar structure as the Signin page */}
  //     {/* Your logo here */}
  //     <div>
  //       <img src={logo} alt="" />
  //     </div>
  //     <div className={style.formContainer}>
  //       {/* Title and Form */}
  //       <h1 className={style.title}>Update Password</h1>
  //       <Form
  //         name="normal_login"
  //         className="login-form"
  //         initialValues={{
  //           remember: true,
  //         }}
  //         onFinish={onFinish}
  //       >
  //         {/* Input fields */}
  //         <div>
  //           <label htmlFor="" className={style.label}>
  //             New Password
  //           </label>
  //           <Form.Item
  //             name="password"
  //             rules={[
  //               {
  //                 required: true,
  //                 message: "Please enter new password!",
  //               },
  //             ]}
  //           >
  //             <Input
  //               type="password"
  //               placeholder="Password"
  //               className={style.input}
  //             />
  //           </Form.Item>
  //         </div>

  //         <div>
  //           <label htmlFor="" className={style.label}>
  //             Re-type Password
  //           </label>
  //           <Form.Item
  //             name="confirmPassword"
  //             rules={[
  //               {
  //                 required: true,
  //                 message: "Please enter confirm Password!",
  //               },
  //             ]}
  //           >
  //             <Input
  //               type="password"
  //               placeholder="Confirm password"
  //               className={style.input}
  //             />
  //           </Form.Item>
  //         </div>

  //         {/* Error message */}
  //         <label style={{ color: "red" }}>{err}</label>

  //         {/* Submit Button */}
  //         <Form.Item>
  //           <Button
  //             type="primary"
  //             htmlType="submit"
  //             className="login-form-button"
  //             block
  //             style={{
  //               height: "45px",
  //               fontWeight: "400px",
  //               fontSize: "18px",
  //               background: "#E91E63",
  //               marginTop: "60px",
  //             }}
  //           >
  //             Confirm
  //           </Button>
  //         </Form.Item>
  //       </Form>
  //     </div>
  //   </div>
  // );
};

export default UpdatePass;

import { Col, Row } from "antd";
import React, { useEffect } from "react";
import LoginActivityTable from "./LoginActivityTable";
import { useDispatch } from "react-redux";
import { LoginActivitys } from "../../../ReduxSlices/LoginActivitySlice";

const LoginActivity = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoginActivitys());
  }, []);
  return (
    <div>
      <Row>
        <Col lg={{ span: 24 }}>
          <div style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px", borderRadius: "10px" }}>
            <LoginActivityTable />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginActivity;

import { Col, Row } from "antd";
import React from "react";
import LoginActivityTable from "./LoginActivityTable";

const LoginActivity = () => {
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

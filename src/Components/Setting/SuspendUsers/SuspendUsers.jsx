import { Col, Row } from "antd";
import React from "react";
import SuspendUsersTable from "./SuspendUsersTable";

const SuspendUsers = () => {
  return (
    <div>
      <Row>
        <Col lg={{ span: 24 }}>
          <div style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px", borderRadius: "10px" }}>
            <SuspendUsersTable />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SuspendUsers;

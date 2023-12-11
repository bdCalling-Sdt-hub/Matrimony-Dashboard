import { Col, Row } from "antd";
import React from "react";
import SuspendUserListTable from "./SuspendUserList";

const SuspendUserList = () => {
  return (
    <div>
      <Row>
        <Col lg={{ span: 24 }}>
          <div style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px", borderRadius: "10px" }}>
            <SuspendUserListTable />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SuspendUserList;

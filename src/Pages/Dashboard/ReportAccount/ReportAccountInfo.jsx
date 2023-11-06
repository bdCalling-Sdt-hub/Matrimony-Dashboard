import { SearchOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";
import React from "react";
import ReportAccountTable from "./ReportAccountTable";

function ReportAccountInfo() {
  return (
    <div style={{ padding: "0 60px" }}>

      <Row style={{ background: "#FBD2E0", height: "67px", width: "240px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h2
          style={{ fontSize: "18px", margin: "0px 0px", fontWeight: "normal", color: "#E91E63" }}
        >
          Users information
        </h2>
      </Row>

      <Row>
        <Col lg={{ span: 24 }}>
          <ReportAccountTable />
        </Col>
      </Row>
    </div>
  );
}

export default ReportAccountInfo;

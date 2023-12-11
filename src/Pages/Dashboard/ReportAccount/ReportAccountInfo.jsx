import { SearchOutlined } from "@ant-design/icons";
import { Button, Col, Input, Row } from "antd";
import React, { useEffect } from "react";
import ReportAccountTable from "./ReportAccountTable";

function ReportAccountInfo() {
  return (
    <div style={{ padding: "10px 10px" }}>

      <Row style={{ background: "#FBD2E0", height: "67px", width: "240px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <h2
          style={{ fontSize: "18px", margin: "0px 0px", fontWeight: "normal", color: "#E91E63" }}
        >
          All Report List
        </h2>
      </Row>

      <Row>
        <Col lg={{ span: 24 }}>
          <div style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "15px" }}>
            <ReportAccountTable />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ReportAccountInfo;

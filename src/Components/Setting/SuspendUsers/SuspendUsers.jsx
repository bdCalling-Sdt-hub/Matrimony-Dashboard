import { Col, Row } from "antd";
import React, { useEffect } from "react";
import SuspendUsersTable from "./SuspendUsersTable";
import { useDispatch } from "react-redux";
import { SuspendUsersData } from "../../../ReduxSlices/SuspendUsersSlice";

const SuspendUsers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SuspendUsersData());
  }, [])
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

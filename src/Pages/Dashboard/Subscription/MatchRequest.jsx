import { Button, Col, Input, Row } from "antd";
import React, { useState } from "react";
import { AiOutlineCheckCircle, AiOutlinePlus } from 'react-icons/ai';
import { FaCrown } from 'react-icons/fa';
import AddSubscription from "./AddSubscription";
import EditMatchRequest from "./EditMatchRequest";

const MatchRequest = () => {
  const style = {
    cardStyle: {
      background: "#FFFFFF",
      padding: "15px",
      textAlign: "center",
      borderRadius: "10px",
      height: "250px",
      gap: "10px",
      position: "relative",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    },
    cardBtn: {
      color: "white",
    },
  };

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <div style={{ padding: "0px 60px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", marginBottom: "40px" }}>
        <h2>
          Additional Match Requests
        </h2>
      </div>
      <div style={{ background: "#F5F5F5", padding: "30px", borderRadius: "10px" }}>
        <Row gutter={[30, 30]}>
          {[...Array(3).keys()].map((item) => {
            return (
              <Col span={8} key={item}>
                <div style={style.cardStyle}>
                  <h2 style={{ color: "#E91E63", marginTop: "30px", fontSize: "30px", fontWeight: "bold" }}>
                    $ 50
                  </h2>
                  <div style={{ marginTop: "30px" }}>
                    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                      <AiOutlineCheckCircle style={{ color: "#000B90", fontSize: "20px" }} />
                      <p>Send 50 match requests</p>
                    </div>
                  </div>
                  <div style={{ position: "absolute", bottom: "20px", left: "0", width: "100%" }}>
                    <div style={{ display: "flex", gap: "9px", justifyContent: "center" }}>
                      <Button onClick={showModal} style={{ width: "125px", height: "40px", color: "white", background: "#E91E63" }}>
                        Edit
                      </Button>
                      <Button style={{ width: "125px", height: "40px", color: "white", background: "#E91E63" }}>
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      <EditMatchRequest
        modalVisible={modalVisible}
        handleCancel={handleCancel}
        setModalVisible={setModalVisible}
      />
    </div>
  );
};

export default MatchRequest;

import { Button, Col, Input, Row } from "antd";
import React from "react";
import { AiOutlineCheckCircle, AiOutlinePlus } from 'react-icons/ai';
import { FaCrown } from 'react-icons/fa';
import AddSubscription from "./AddSubscription";
import { useState } from "react";


const Subscription = () => {
  const style = {
    cardStyle: {
      background: "#FFFFFF",
      padding: "15px",
      textAlign: "center",
      borderRadius: "10px",
      height: "380px",
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
        <h2
        >
          Subscriptions
        </h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            onClick={showModal}
            style={{
              background: "#000B90",
              color: "#ffffff",
              backgroundColor: "#E91E63",
              height: 45,
              width: "180px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px"
            }}
          >
            <AiOutlinePlus style={{ fontSize: "20px" }} />
            Add Subscription
          </Button>
        </div>
      </div>
      <div
        style={{ background: "white", padding: "30px", borderRadius: "10px" }}
      >
        <Row gutter={[30, 30]}>
          {[...Array(6).keys()].map((item) => {
            return (
              <>
                <Col span={8}>
                  <div style={style.cardStyle} className="sub-card">
                    <p style={{ position: "absolute", top: "33px", left: "15px", color: "white", fontWeight: "bold" }}>1 month</p>
                    <h2 style={{ color: "#000000", marginBottom: "5px", marginTop: "30px", fontSize: "" }}>
                      Silver
                    </h2>
                    <h2 style={{ color: "#E91E63", marginTop: "5px", fontSize: "30px", fontWeight: "bold" }}>
                      $ 100
                    </h2>
                    <div style={{ marginTop: "30px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <AiOutlineCheckCircle style={{ color: "#000B90", fontSize: "20px" }} />
                        <p>Send 80 match requests</p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "5px 0" }}>
                        <AiOutlineCheckCircle style={{ color: "#000B90", fontSize: "20px" }} />
                        <p>Send reminder to up to 10 membersc</p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <FaCrown style={{ color: "#FFC60B", fontSize: "20px" }} />
                        <p>Get a premium badge on profile</p>
                      </div>
                    </div>
                    <div style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "0",
                      width: "100%",
                    }}>
                      <div style={{ display: "flex", gap: "9px", justifyContent: "center" }}>
                        <Button style={{ width: "125px", height: "40px", color: "white", background: "#E91E63" }}>
                          Edit
                        </Button>
                        <Button style={{ width: "125px", height: "40px", color: "white", background: "#E91E63" }}>
                          Delete
                        </Button>
                      </div>
                    </div>

                  </div>
                </Col>
              </>
            );
          })}
        </Row>
      </div>
      <AddSubscription 
        modalVisible={modalVisible} 
        handleCancel={handleCancel} 
        setModalVisible={setModalVisible}
      />
    </div>
  );
};

export default Subscription;

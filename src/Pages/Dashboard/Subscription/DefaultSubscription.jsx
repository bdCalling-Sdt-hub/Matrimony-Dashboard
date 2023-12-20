import { Button, Col, Empty, Input, Row, Typography } from "antd";
import React, { useEffect } from "react";
import { AiOutlineCheckCircle, AiOutlinePlus } from 'react-icons/ai';
import { FaCrown } from 'react-icons/fa';
import AddDefaultSubscription from "./AddDefaultSubscription";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DefaultSubscriptionData } from "../../../ReduxSlices/DefaultSubscriptionSlice";
import EditDefaultSubscription from "./EditDefaultSubscription";
import Swal from "sweetalert2";
import baseAxios from "../../../../Config";
const { Title } = Typography;

const DefaultSubscription = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.DefaultSubscriptionData.DefaultSubscriptionList);
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
  const [reload, setReload] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [editModelVisible, setEditModelVisible] = useState(false);
  const [dataItem, setDataItem] = useState(null);

  useEffect(() => {
    const page = 1;
    dispatch(DefaultSubscriptionData(page));
  }, [reload]);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    window.location.reload();
    setModalVisible(false);
  };

  const showEditModal = (item) => {
    setDataItem(item);
    setEditModelVisible(true);
  };

  const handleEditCancel = () => {
    setEditModelVisible(false);
    window.location.reload();
  };


  return (
    <div style={{ padding: "0px 60px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", marginBottom: "40px" }}>
        <h2>Default Subscription</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
        </div>
      </div>


      <div style={{ background: "#F5F5F5", padding: "30px", borderRadius: "10px" }}>
        <Row gutter={[30, 30]}>
          {(data && data?.length > 0) ? data?.map((item) => {
            return (
              <>
                <Col span={8}>
                  <div style={style.cardStyle} className="sub-card">
                    <p style={{ position: "absolute", top: "33px", left: "15px", color: "white", fontWeight: "bold" }}>{item.duration} month</p>
                    <h2 style={{ color: "#000000", marginBottom: "5px", marginTop: "30px", fontSize: "" }}>
                      
                    </h2>
                    <h2 style={{ color: "#E91E63", marginTop: "5px", fontSize: "25px", fontWeight: "bold" }}>
                    {item.name}
                    </h2>
                    <div style={{ marginTop: "50px", marginLeft:"20px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <AiOutlineCheckCircle style={{ color: "#000B90", fontSize: "20px" }} />
                        <p>{!item.isMatchRequestsNoLimit ? "Send " + item.matchRequests + " match requests" : "Send unlimited match requests"}</p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "5px 0" }}>
                        <AiOutlineCheckCircle style={{ color: "#000B90", fontSize: "20px" }} />
                        <p>{!item.isMessageNoLimit ? "Send " + item.message + " messages" : "Send unlimited messages"}</p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "5px 0" }}>
                        <AiOutlineCheckCircle style={{ color: "#000B90", fontSize: "20px" }} />
                        <p>{!item.isRemindersNoLimit ? "Send reminder to up to " + item.reminders : "Send unlimited reminders"}</p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "5px 0" }}>
                        <AiOutlineCheckCircle style={{ color: "#000B90", fontSize: "20px" }} />
                        <p>Allowed: First {item.allowFor} Users</p>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "5px 0" }}>
                        <AiOutlineCheckCircle style={{ color: "#000B90", fontSize: "20px" }} />
                        <p>Free trial  {item.active?<span style={{color:"green"}}>Active</span>:<span style={{color:"red"}}>Inactive</span>}</p>
                      </div>

                    </div>
                    <div style={{
                      position: "absolute",
                      bottom: "20px",
                      left: "0",
                      width: "100%",
                    }}>
                      <div style={{ display: "flex", gap: "9px", justifyContent: "center" }}>
                        <Button style={{ width: "125px", height: "40px", color: "white", background: "#E91E63" }} onClick={() => showEditModal(item)}>
                          Edit
                        </Button>
                      </div>
                    </div>

                  </div>
                </Col>
              </>
            );
          }) :<Button
          onClick={showModal}
          style={{
            background: "rgba(236, 236, 236, 1)",
            color: "#ffffff",
            backgroundColor: "#E91E63",
            height: 45,
            width: "180px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
            justifyContent: "center",
            margin: "0 auto"
          }}
        >
          <AiOutlinePlus style={{ fontSize: "20px" }} />
          Add Subscription
        </Button>
          }
        </Row>
      </div>
      <AddDefaultSubscription
        modalVisible={modalVisible}
        handleCancel={handleCancel}
        setModalVisible={setModalVisible}
        setReload={setReload}
      />
      <EditDefaultSubscription
        modalVisible={editModelVisible}
        handleCancel={handleEditCancel}
        setModalVisible={setEditModelVisible}
        requestData={dataItem}
        setReload={setReload}
      />
    </div>
  );
};

export default DefaultSubscription;

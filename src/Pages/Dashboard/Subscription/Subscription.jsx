import { Button, Col, Empty, Input, Row, Typography } from "antd";
import React, { useEffect } from "react";
import { AiOutlineCheckCircle, AiOutlinePlus } from 'react-icons/ai';
import { FaCrown } from 'react-icons/fa';
import AddSubscription from "./AddSubscription";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SubscriptionData } from "../../../ReduxSlices/SubscriptionSlice";
import EditSubscription from "./EditSubscription";
import Swal from "sweetalert2";
import baseAxios from "../../../../Config";
const { Title } = Typography;

const Subscription = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.SubscriptionData.SubscriptionList);
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
    dispatch(SubscriptionData(page));
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

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You are about to delete this item',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const token = localStorage.getItem('token');
        baseAxios
          .delete(`/subscription?id=${id}`, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            setReload((reload) => reload + 1);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };


  return (
    <div style={{ padding: "0px 60px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", marginBottom: "40px" }}>
        <h2>Subscriptions</h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
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
              gap: "5px"
            }}
          >
            <AiOutlinePlus style={{ fontSize: "20px" }} />
            Add Subscription
          </Button>
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
                      {item.name}
                    </h2>
                    <h2 style={{ color: "#E91E63", marginTop: "5px", fontSize: "25px", fontWeight: "bold" }}>
                      {item.pkCountryPrice} PKR 
                    </h2>
                    <h2 style={{ color: "#E91E63", marginTop: "5px", fontSize: "25px", fontWeight: "bold" }}>
                      $ {item.otherCountryPrice}
                    </h2>
                    <div style={{ marginTop: "30px" }}>
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
                        <Button style={{ width: "125px", height: "40px", color: "white", background: "#E91E63" }} onClick={() => showEditModal(item)}>
                          Edit
                        </Button>
                        <Button onClick={()=>handleDelete(item.id)} style={{ width: "125px", height: "40px", color: "white", background: "#E91E63" }}>
                          Delete
                        </Button>
                      </div>
                    </div>

                  </div>
                </Col>
              </>
            );
          }) :<Empty style={{paddingLeft:"600px"}}description={<Title level={5}>No Data Found</Title>} />
          }
        </Row>
      </div>
      <AddSubscription
        modalVisible={modalVisible}
        handleCancel={handleCancel}
        setModalVisible={setModalVisible}
        setReload={setReload}
      />
      <EditSubscription
        modalVisible={editModelVisible}
        handleCancel={handleEditCancel}
        setModalVisible={setEditModelVisible}
        requestData={dataItem}
        setReload={setReload}
      />
    </div>
  );
};

export default Subscription;

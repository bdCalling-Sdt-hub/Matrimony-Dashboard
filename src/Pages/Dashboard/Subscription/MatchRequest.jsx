import { useState, useEffect } from 'react';
import { Button, Col, Input, Row, Modal, Card, Empty, Typography } from 'antd';
import { AiOutlineCheckCircle, AiOutlinePlus } from 'react-icons/ai';
import { FaCrown } from 'react-icons/fa';
import AddMatchRequest from "./AddMatchRequest"; // Import your AddMatchRequest component
import EditMatchRequest from "./EditMatchRequest";
import { useDispatch, useSelector } from "react-redux";
import { AdditionalMatchRequestData } from "../../../ReduxSlices/AdditionalMatchRequestSlice";
import Swal from 'sweetalert2';
import baseAxios from '../../../../Config';
const { Title } = Typography;

const MatchRequest = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.AdditionalMatchRequestData.AdditionalMatchRequestList);
  const [reload, setReload] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [dataItem, setDataItem] = useState(null);
  const [addModalVisible, setAddModalVisible] = useState(false);

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

  const showEditModal = (item) => {
    setModalVisible(true);
    setDataItem(item);
  };

  const handleCancel = () => {
    window.location.reload();
    setDataItem({});
    setModalVisible(false);
  };

  useEffect(() => {
    const page = 1;
    dispatch(AdditionalMatchRequestData(page));
  }, [reload]);

  const showAddModal = () => {
    setAddModalVisible(true);
  };

  const handleAddModalCancel = () => {
    window.location.reload();
    setAddModalVisible(false);
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
          .delete(`/additional-match-requests?id=${id}`, {
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
        <h2>Additional Match Requests</h2>
        <Button
          onClick={showAddModal}
          style={{
            background: "rgba(236, 236, 236, 1)",
            color: "#ffffff",
            backgroundColor: "#E91E63",
            height: 45,
            width: "280px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px"
          }}
        >
          <AiOutlinePlus style={{ fontSize: "20px" }} />
          Add Additional Match Request
        </Button>
      </div>
      <div style={{ background: "#F5F5F5", padding: "30px", borderRadius: "10px" }}>
        <Row gutter={[30, 30]}>
          {
            data && data?.length === 0 ? <>
            <Empty style={{paddingLeft:"600px"}}description={<Title level={5}>No Data Found</Title>} />
            </>
            :
            data?.map((item) => (
              <Col span={8} key={item.id}>
                <div style={style.cardStyle}>
                  <h2 style={{ color: "#E91E63", marginTop: "10px", fontSize: "25px", fontWeight: "bold" }}>
                    {item.pkCountryPrice} PKR
                  </h2>
                  <h2 style={{ color: "#E91E63", marginTop: "10px", fontSize: "25px", fontWeight: "bold" }}>
                    $ {item.otherCountryPrice}
                  </h2>
                  <div style={{ marginTop: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                      <AiOutlineCheckCircle style={{ color: "#000B90", fontSize: "20px" }} />
                      <p>Send {item.matchRequests} match requests</p>
                    </div>
                  </div>
                  <div style={{ position: "absolute", bottom: "20px", left: "0", width: "100%" }}>
                    <div style={{ display: "flex", gap: "9px", justifyContent: "center" }}>
                      <Button onClick={() => showEditModal(item)} style={{ width: "125px", height: "40px", color: "white", background: "#E91E63" }}>
                        Edit
                      </Button>
                      <Button onClick={()=>handleDelete(item.id)} style={{ width: "125px", height: "40px", color: "white", background: "#E91E63" }}>
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>
      </div>
      <EditMatchRequest
        modalVisible={modalVisible}
        handleCancel={handleCancel}
        setModalVisible={setModalVisible}
        requestData={dataItem}
        setReload={setReload}
      />
      <AddMatchRequest
        modalVisible={addModalVisible}
        handleCancel={handleAddModalCancel}
        setModalVisible={setAddModalVisible}
        setReload={setReload}
      />
    </div>
  );
};

export default MatchRequest;

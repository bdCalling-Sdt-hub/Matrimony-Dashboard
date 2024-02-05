import { Col, Divider, Empty, Pagination, Row } from 'antd'
import React, { useRef, useEffect, useState } from 'react'
import "./Notification.css"
import { useNavigate } from "react-router-dom";
import { NotificationsData } from "../../../ReduxSlices/NotificationsSlice";
import baseAxios from "../../../../Config";
import { useDispatch, useSelector } from 'react-redux';

function Notification() {
  const componentRef = useRef();
  const pageSize = 5;
  const dispatch = useDispatch();
  const userFromLocalStorage = JSON.parse(localStorage.getItem("yourInfo"));
  const data = useSelector((state) => state.NotificationsData.AllNotifications);
  const [page, setPage] = useState();
  const dataPagination = useSelector(
    (state) => state.NotificationsData.pagination
  );
  const [modalData, setModalData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const startIndex = (dataPagination?.page - 1) * dataPagination?.limit + 1;
  const endIndex =
    dataPagination?.page * dataPagination?.limit > dataPagination?.totalResults
      ? dataPagination?.totalResults
      : dataPagination?.page * dataPagination?.limit;

  function getTimeAgo(timestamp) {
    const now = new Date();
    const date = new Date(timestamp);

    const secondsAgo = Math.floor((now - date) / 1000);
    const minutesAgo = Math.floor(secondsAgo / 60);
    const hoursAgo = Math.floor(minutesAgo / 60);
    const daysAgo = Math.floor(hoursAgo / 24);
    const yearsAgo = Math.floor(daysAgo / 365);

    if (yearsAgo > 0) {
      return yearsAgo === 1 ? "1 year ago" : `${yearsAgo} years ago`;
    } else if (daysAgo > 0) {
      return daysAgo === 1 ? "1 day ago" : `${daysAgo} days ago`;
    } else if (hoursAgo > 0) {
      return hoursAgo === 1 ? "1 hour ago" : `${hoursAgo} hours ago`;
    } else if (minutesAgo > 0) {
      return minutesAgo === 1 ? "1 minute ago" : `${minutesAgo} minutes ago`;
    } else {
      return "just now";
    }
  }


  const navigate = useNavigate();

  const [notificationsDetails, setNotificationsDetails] = useState([]);
  const [notifications, setNotifications] = useState([]);




  const notificationUpdateHandler = (id) => {
    let data = {
      page: page,
    };
    let token = localStorage.getItem("token");
    baseAxios
      .patch(
        `/api/notifications/${id}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setModalData(res.data.data);
        setIsModalOpen(true);
        dispatch(NotificationsData(data));
      })
      .catch((err) => console.log(err));
  };


  const notificationsDataGetByPagination = (page) => {
    setPage(page);
    dispatch(NotificationsData({ page })); // Update the page in the Redux state
  };


  const comomnData = notifications?.allNotification
    ? notifications?.allNotification
    : data?.allNotification;
  return (

    <div>

      <h2 style={{ fontSize: "30px", marginBottom: "30px" }}>
        All Notifications
      </h2>
      {data?.length > 0 ?
        <>
          <Row>

            {data?.map((item, index) => {
              return (
                <Col lg={{ span: 24 }}>
                  <div className='single-notification' style={{ display: "flex", alignItems: "center" }}>
                    <div className='user-image' style={{ marginRight: "50px" }}>
                      <img style={{ height: "70px", width: "70px", borderRadius: "100%", border: "2px solid gray" }} src={item?.image[0]?.publicFileUrl} />
                    </div>
                    <div className=''>
                      <h1 style={{ fontSize: "15px" }}>{item?.title}</h1>
                      <p>{item?.message}</p>
                      <p style={{ color: "gray", marginTop: "10px" }}>{getTimeAgo(item?.createdAt)}</p>
                    </div>
                  </div>

                  <Divider />

                </Col>


              )
            })}
          </Row>
          <Row>
            <Col lg={{ span: 12 }} style={{ marginBottom: '20px' }}>
              <h1 style={{ fontSize: "20px", color: "#000b90" }}>Showing {startIndex}-{endIndex} of {dataPagination?.totalResults}</h1>
            </Col>
            <Col lg={{ span: 8, offset: 4 }}>
            <Pagination
              defaultCurrent={dataPagination?.page}
              total={dataPagination.totalResults}
              onChange={notificationsDataGetByPagination} // Add onChange to handle page change
              showQuickJumper={false}
              showSizeChanger={false}
            />
            </Col>
          </Row>
        </>
        : <Empty description={<h1 style={{ fontSize: "15px", color: "#000b90" }}>No Notifications Found</h1>} />
      }
    </div>
  )
}

export default Notification
import { Avatar, Button, Drawer, Space, Table, Typography, Empty } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ReportedUserData } from '../../../ReduxSlices/ReportedUserSlice';
import DrawerPage from "../../../Components/DrawerPage/DrawerPage";
const { Title, Text } = Typography;
import {

  CloseOutlined,

} from '@ant-design/icons';
import ReportDetails from "./ReportDetails";
import { Link } from "react-router-dom";

const ReportAccountTable = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.ReportedUserData.ReportedUserList);
  //const data = []
  const pagination = useSelector((state) => state.ReportedUserData.pagination);
  console.log("pagination", pagination);
  const [reload, setReload] = useState(1); // This is for refreshing the table after deleting a record
  const [reportData, setReportData] = useState({});
  useEffect(() => {
    dispatch(ReportedUserData());
  }, [reload])

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = (record) => {
    console.log(record);
    setReportData(record);
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
    window.location.reload();
  };

  const [rentData, setRentData] = useState([]); // Data fetched from the server
  const [totalItems, setTotalItems] = useState(0); // Total number of items
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const pageSize = 12;

  const columns = [
    {
      title: "Image",
      dataIndex: "profileId.photo",
      key: "photo",
      render: (_, record) => (
        <div>
          <img style={{ borderRadius: "100%" }} src={record?.profileId?.photo[0]?.publicFileUrl} height={50} width={50} alt="Profile" />
        </div>
      ),
    },
    {
      title: "Name",
      dataIndex: ["profileId", "name"],
      key: "name",
      responsive: ["md"],
    },
    {
      title: "Age",
      dataIndex: ["profileId", "age"],
      key: "age",
      responsive: ["lg"],
    },
    {
      title: "Religion",
      dataIndex: ["profileId", "religion"],
      key: "religion",
    },
    {
      title: "Status",
      dataIndex: ["profileId", "payment"],
      key: "payment",
      responsive: ["md"],
      render: (_, record) => (
        <div style={{}}>
          <Button type="primary" shape="round" style={{ width: "125px", height: "40px", color: "white", background: `${record?.profileId?.payment === true ? "#A020F0" : "#E91E63"}`, borderRadius: "50" }}>
            {record?.profileId?.payment === true ? "Premium" : "Free"}
          </Button>
        </div>
      ),
    },
    {
      title: "Country",
      dataIndex: ["profileId", "country"],
      key: "country",
    },
    {
      title: "Language",
      dataIndex: ["profileId", "motherTongue"],
      key: "motherTongue",
    },
    {
      title: "Action",
      dataIndex: "id", // Assuming there's an 'id' field in profileId
      key: "id",
      responsive: ["lg"],
      render: (_, record) => (
        <div style={{}}>
          <Button type="text" style={{ marginRight: "10px", paddingBottom: "30px", color: "#00aa00" }}>
            <div onClick={() => showModal(record)}>Details</div>
          </Button>
        </div>
      ),
    },
  ];

  const handlePageChange = (page=1) => {
    setCurrentPage(page);
    console.log(currentPage)
    userDataGetByPagination(page);
  }

  return (
    <>
      {reportData?.length === 0 ?
        <>
          <Empty style={{ padding: "200px", marginTop: "10px" }} description={<Title level={5}>No Data Found</Title>} />
        </> :
        <><Table columns={columns} dataSource={data} pagination={{
          pageSize: pagination.limit,
          showSizeChanger: false,
          total: pagination.totalResults,
          current: pagination.page,
          onChange: handlePageChange,
        }} />

          <ReportDetails
            reload={reload}
            setReload={setReload}
            modalVisible={modalVisible}
            handleCancel={handleCancel}
            setModalVisible={setModalVisible}
            data={reportData}
          /></>}
    </>
  )

};
export default ReportAccountTable;

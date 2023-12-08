import { Avatar, Button, Drawer, Space, Table, Typography } from "antd";
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
  console.log(data);
  useEffect(() => {
    dispatch(ReportedUserData());
  }, [])

  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
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
      dataIndex: ["profileId", "status"],
      key: "status",
      responsive: ["md"],
      render: (_, record) => (
        <div style={{}}>
          <Button type="primary" shape="round" style={{ width: "125px", height: "40px", color: "white", background: "#E91E63", borderRadius: "50" }}>
            Free
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
      dataIndex: ["profileId", "motherToungue"],
      key: "motherToungue",
    },
    {
      title: "Action",
      dataIndex: "profileId.id", // Assuming there's an 'id' field in profileId
      key: "id",
      responsive: ["lg"],
      render: (_, record) => (
        <div style={{}}>
          <Button type="text" style={{ marginRight: "10px", paddingBottom: "30px", color:"#00aa00" }}>
            <Link to={`/pesonal-details/${record.id}`}>Details</Link>
          </Button>
        </div>
      ),
    },
  ];
  
  useEffect(() => {
    // Fetch data from the server when the current page changes
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    // Replace this with your actual API request to fetch data based on pagination
    try {
      const response = await fetch(`/api/data?page=${currentPage}&pageSize=${pageSize}`);
      const result = await response.json();

      setData(result.data);
      setTotalItems(result.totalItems);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log(currentPage)
  }

  return (
    <>
      <Table columns={columns} dataSource={data} pagination={{
        pageSize,
        showSizeChanger: false,
        total: 5000,
        current: currentPage,
        onChange: handlePageChange,
      }} />

      <ReportDetails
        modalVisible={modalVisible}
        handleCancel={handleCancel}
        setModalVisible={setModalVisible}
      />

    </>
  )

};
export default ReportAccountTable;

import { Button, Drawer, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import DrawerPage from "../../../Components/DrawerPage/DrawerPage";
const { Title, Text } = Typography;
import {

  CloseOutlined,

} from '@ant-design/icons';
import ReportDetails from "./ReportDetails";


const data = [
  {
    key: "1",
    invoiceNo: "10",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "2",
    invoiceNo: "11",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "3",
    invoiceNo: "12",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "4",
    invoiceNo: "13",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "5",
    invoiceNo: "14",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "6",
    invoiceNo: "15",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "7",
    invoiceNo: "16",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "8",
    invoiceNo: "17",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "9",
    invoiceNo: "15",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "10",
    invoiceNo: "16",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "11",
    invoiceNo: "17",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "12",
    invoiceNo: "15",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "13",
    invoiceNo: "16",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "14",
    invoiceNo: "17",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "15",
    invoiceNo: "15",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "16",
    invoiceNo: "16",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "17",
    invoiceNo: "17",
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  }
];

const ReportAccountTable = () => {

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
      dataIndex: "invoiceNo",
      key: "invoiceNo",
    },
    {
      title: "Name",
      dataIndex: "time",
      key: "time",
      responsive: ["md"],
    },
    {
      title: "Age",
      dataIndex: "username",
      key: "username",
      responsive: ["lg"],
    },
    {
      title: "Religion",
      dataIndex: "method",
      key: "method",
    },
    {
      title: "Status",
      dataIndex: "amount",
      key: "amount",
      responsive: ["md"],
    },
    {
      title: "Country",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Language",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      dataIndex: "printView",
      key: "printView",
      responsive: ["lg"],
      render: (_, record) => (
        <div style={{}}>
          <Button onClick={showModal} style={{ width: "125px", height: "40px", color: "white", background: "#E91E63" }}>
            Details
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

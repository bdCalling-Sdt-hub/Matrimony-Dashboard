import { Avatar, Button, Drawer, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { LiaSaveSolid } from "react-icons/lia";
import DrawerPage from "../../../Components/DrawerPage/DrawerPage";
const { Title, Text } = Typography;
import { CloseOutlined, } from '@ant-design/icons';
import { Link } from "react-router-dom";


const data = [
  {
    key: "1",
    invoiceNo: <Avatar src={<img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aFkmK5B0Zw_udaEn6Z9hLJ17h0l2gm43jw&usqp=CAU'} alt="avatar" />} />,
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "2",
    invoiceNo: <Avatar src={<img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aFkmK5B0Zw_udaEn6Z9hLJ17h0l2gm43jw&usqp=CAU'} alt="avatar" />} />,
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "Free",
    status: "complete",
    printView: "Button",
  },
  {
    key: "3",
    invoiceNo: <Avatar src={<img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aFkmK5B0Zw_udaEn6Z9hLJ17h0l2gm43jw&usqp=CAU'} alt="avatar" />} />,
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "4",
    invoiceNo: <Avatar src={<img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aFkmK5B0Zw_udaEn6Z9hLJ17h0l2gm43jw&usqp=CAU'} alt="avatar" />} />,
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "5",
    invoiceNo: <Avatar src={<img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aFkmK5B0Zw_udaEn6Z9hLJ17h0l2gm43jw&usqp=CAU'} alt="avatar" />} />,
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "6",
    invoiceNo: <Avatar src={<img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aFkmK5B0Zw_udaEn6Z9hLJ17h0l2gm43jw&usqp=CAU'} alt="avatar" />} />,
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "7",
    invoiceNo: <Avatar src={<img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aFkmK5B0Zw_udaEn6Z9hLJ17h0l2gm43jw&usqp=CAU'} alt="avatar" />} />,
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "8",
    invoiceNo: <Avatar src={<img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aFkmK5B0Zw_udaEn6Z9hLJ17h0l2gm43jw&usqp=CAU'} alt="avatar" />} />,
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "9",
    invoiceNo: <Avatar src={<img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aFkmK5B0Zw_udaEn6Z9hLJ17h0l2gm43jw&usqp=CAU'} alt="avatar" />} />,
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "10",
    invoiceNo: <Avatar src={<img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aFkmK5B0Zw_udaEn6Z9hLJ17h0l2gm43jw&usqp=CAU'} alt="avatar" />} />,
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "11",
    invoiceNo: <Avatar src={<img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aFkmK5B0Zw_udaEn6Z9hLJ17h0l2gm43jw&usqp=CAU'} alt="avatar" />} />,
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "12",
    invoiceNo: <Avatar src={<img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aFkmK5B0Zw_udaEn6Z9hLJ17h0l2gm43jw&usqp=CAU'} alt="avatar" />} />,
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "13",
    invoiceNo: <Avatar src={<img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aFkmK5B0Zw_udaEn6Z9hLJ17h0l2gm43jw&usqp=CAU'} alt="avatar" />} />,
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "14",
    invoiceNo: <Avatar src={<img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aFkmK5B0Zw_udaEn6Z9hLJ17h0l2gm43jw&usqp=CAU'} alt="avatar" />} />,
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "15",
    invoiceNo: <Avatar src={<img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aFkmK5B0Zw_udaEn6Z9hLJ17h0l2gm43jw&usqp=CAU'} alt="avatar" />} />,
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "16",
    invoiceNo: <Avatar src={<img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aFkmK5B0Zw_udaEn6Z9hLJ17h0l2gm43jw&usqp=CAU'} alt="avatar" />} />,
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "17",
    invoiceNo: <Avatar src={<img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6aFkmK5B0Zw_udaEn6Z9hLJ17h0l2gm43jw&usqp=CAU'} alt="avatar" />} />,
    time: "18 Jul, 2023  4:30pm",
    username: "Tushar",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  }
];

const MembersInformationTable = () => {
  const [rentData, setRentData] = useState([]); // Data fetched from the server
  const [totalItems, setTotalItems] = useState(0); // Total number of items
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const pageSize = 12;


  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [invoiceData, setInvoiceData] = useState(null);

  const showDrawer = (record) => {
    setIsDrawerVisible(true);
    setInvoiceData(record);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
    setInvoiceData(null);
  };


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
    // {
    //   title: "Status",
    //   dataIndex: "amount",
    //   key: "amount",
    //   responsive: ["md"],
    // },
    {
      title: "Status",
      dataIndex: "amount",
      key: "amount",
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
          <Button type="text" style={{ marginRight: "10px", paddingBottom: "35px" }}>
            <Link to="/pesonal-details/:id"><BsInfoCircle style={{ fontSize: "20px", color: "#2BA24C" }} /></Link>
          </Button>
          {/* <Button onClick={() => showDrawer(record)} type="text" style={{ paddingBottom: "35px" }}>
            <LiaSaveSolid style={{ fontSize: "30px", color: "#999999" }} />
          </Button> */}
        </div>
      ),
    },
  ];

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
      <Drawer

        title={
          <div>
            <Typography>
              <Title level={5} strong>
                Invoice# Trip No.{invoiceData?.invoiceNo}
              </Title>
              <Text>See all information about the trip no. 68656</Text>
            </Typography>
          </div>
        }
        placement="right"
        onClose={closeDrawer}
        open={isDrawerVisible}
        width={500}
        closable={false}
        extra={
          <Space>
            <Button style={{ borderRadius: "100%", backgroundColor: "white", color: "red", height: "50px", width: "50px", textAlign: "center" }} onClick={closeDrawer}><CloseOutlined /></Button>

          </Space>
        }

      >
        {invoiceData && <DrawerPage invoiceData={invoiceData} />}
      </Drawer>

    </>
  )

};
export default MembersInformationTable;

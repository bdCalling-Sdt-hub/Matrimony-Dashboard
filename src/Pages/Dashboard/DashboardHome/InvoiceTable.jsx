import { Avatar, Button, Drawer, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import { LiaSaveSolid } from "react-icons/lia";
import DrawerPage from "../../../Components/DrawerPage/DrawerPage";
const { Title, Text } = Typography;
import {

  CloseOutlined,

} from '@ant-design/icons';


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
    amount: "$850.00",
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

];

const InvoiceTable = () => {
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
      title: "Religion",
      dataIndex: "username",
      key: "username",
      responsive: ["lg"],
    },
    {
      title: "Country",
      dataIndex: "method",
      key: "method",
    },
    {
      title: "Language",
      dataIndex: "amount",
      key: "amount",
      responsive: ["md"],
    },
    {
      title: "Details",
      dataIndex: "printView",
      key: "printView",
      responsive: ["lg"],
      render: (_, record) => (
        <div style={{}}>
          {/* <Button type="text" style={{ marginRight: "10px", paddingBottom: "35px" }}>
            <AiOutlinePrinter style={{ fontSize: "30px", color: "#999999" }} />
          </Button> */}
          <Button style={{ width: "125px", height: "40px", color: "white", background: "#E91E63" }}>
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
      <Table columns={columns} dataSource={data} pagination={false} />
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
export default InvoiceTable;

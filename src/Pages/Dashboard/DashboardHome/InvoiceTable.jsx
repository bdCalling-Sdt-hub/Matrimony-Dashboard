import { Avatar, Button, Drawer, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import { LiaSaveSolid } from "react-icons/lia";
import DrawerPage from "../../../Components/DrawerPage/DrawerPage";
const { Title, Text } = Typography;
import {

  CloseOutlined,

} from '@ant-design/icons';
import { Link } from "react-router-dom";

const InvoiceTable = ({data}) => {
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
      dataIndex: "photo",
      key: "photo",
      render: (_, record) => (
        <div >
          <img style={{ borderRadius: "100%" }} src={record?.photo[0]?.publicFileUrl} height={50} width={50} />
        </div>
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      responsive: ["md"],
    },
    {
      title: "Religion",
      dataIndex: "religion",
      key: "religion",
      responsive: ["lg"],
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Language",
      dataIndex: "motherTongue",
      key: "motherTongue",
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
          <Link to={`/personal-details/${record.id}`}>Details</Link>
          </Button>
        </div>
      ),
    },
  ];
  const handlePageChange = (page) => {
    setCurrentPage(page);
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

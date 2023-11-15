import { Button, Drawer, Table, Typography } from "antd";
import React, { useState } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { LiaSaveSolid } from "react-icons/lia";
import DrawerPage from "../../../Components/DrawerPage/DrawerPage";
import EarnInvoice from "./EarnInvoice";
const { Title, Text } = Typography;

const data = [
  {
    tripNo: "1373700510",

    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "2",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "padding",
    printView: "Button",
  },
  {
    key: "3",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "padding",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "padding",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "padding",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "padding",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "padding",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "complete",
    printView: "Button",
  },
  {
    key: "1",
    tripNo: "1373700510",
    time: "18 Jul, 2023  4:30pm",
    username: "Fahim",
    method: "Credit Card",
    amount: "$850.00",
    status: "padding",
    printView: "Button",
  },
];

const EarnHistoryTable = () => {


  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const columns = [
    {
      title: "Month No.",
      dataIndex: "tripNo",
      key: "tripNO",
    },
    {
      title: "Total Users",
      dataIndex: "time",
      key: "time",
      responsive: ["md"],
    },
    {
      title: "Amount",
      dataIndex: "username",
      key: "username",
      responsive: ["lg"],
    },

    {
      title: "Action",
      dataIndex: "printView",
      key: "printView",
      responsive: ["lg"],
      render: (
        _,
        record // Use the second parameter 'record'
      ) => (
        <div style={{ textAlign: "left" }}>
          <Button type="text" style={{ marginRight: "10px" }}>
            <AiOutlinePrinter style={{ fontSize: "30px", color: "#999999" }} />
          </Button>
          <Button onClick={() => showModal(record)} type="text">
            <LiaSaveSolid style={{ fontSize: "30px", color: "#999999" }} />
          </Button>
        </div>
      ),
    },
  ];


  return (
    <div>
      <Table style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;", borderRadius: "15px" }} columns={columns} dataSource={data} />

      <EarnInvoice
        modalVisible={modalVisible}
        handleCancel={handleCancel}
        setModalVisible={setModalVisible}
      />
    </div>
  );
};

export default EarnHistoryTable;

import { Button, Drawer, Table, Typography } from "antd";
import React, { useState } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { LiaSaveSolid } from "react-icons/lia";
import DrawerPage from "../../../Components/DrawerPage/DrawerPage";
import EarnInvoice from "./EarnInvoice";
const { Title, Text } = Typography;


const EarnHistoryTable = ({data}) => {


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
      dataIndex: "monthNo",
      key: "monthNo",
    },
    {
      title: "Total Users",
      dataIndex: "userCount",
      key: "userCount",
      responsive: ["md"],
    },
    {
      title: "Amount",
      dataIndex: "uv",
      key: "uv",
      responsive: ["lg"],
    },

    // {
    //   title: "Action",
    //   dataIndex: "printView",
    //   key: "printView",
    //   responsive: ["lg"],
    //   render: (
    //     _,
    //     record // Use the second parameter 'record'
    //   ) => (
    //     <div style={{ textAlign: "left" }}>
    //       <Button type="text" style={{ marginRight: "10px" }}>
    //         <AiOutlinePrinter style={{ fontSize: "30px", color: "#999999" }} />
    //       </Button>
    //       <Button onClick={() => showModal(record)} type="text">
    //         <LiaSaveSolid style={{ fontSize: "30px", color: "#999999" }} />
    //       </Button>
    //     </div>
    //   ),
    // },
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

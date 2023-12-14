import { Button, Drawer, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import DrawerPage from "../../DrawerPage/DrawerPage";
import { useDispatch, useSelector } from "react-redux";
import { SuspendUsersData } from "../../../ReduxSlices/SuspendUsersSlice";
import { Link } from "react-router-dom";
const { Title, Text } = Typography;


const SuspendUsersTable = () => {
  const data = useSelector((state) => state.SuspendUsersData.SuspendUsersList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SuspendUsersData());
  }, [])

  const columns = [
    {
      title: "Image",
      dataIndex: "photo",
      key: "photo",
      render: (_, record) => (
        <div >
          <img style={{ borderRadius: "100%" }} src={record.photo[0].publicFileUrl} height={50} width={50} />
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
      title: "Age",
      dataIndex: "age",
      key: "age",
      responsive: ["lg"],
    },
    {
      title: "Religion",
      dataIndex: "religion",
      key: "religion",
    },
    // {
    //   title: "Status",
    //   dataIndex: "amount",
    //   key: "amount",
    //   responsive: ["md"],
    // },
    {
      title: "Status",
      dataIndex: "status",
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
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Language",
      dataIndex: "motherTongue",
      key: "motherTongue",
    },
    {
      title: "Action",
      dataIndex: "printView",
      key: "printView",
      responsive: ["lg"],
      render: (_, record) => (
        <div>
          <Button type="primary" style={{ width: "125px", height: "40px", color: "white", background: "#E91E63" }}>
            Un-suspend
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default SuspendUsersTable;

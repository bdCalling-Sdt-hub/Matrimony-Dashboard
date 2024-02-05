import { Button, Drawer, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { BsEye } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import {
  UndoOutlined, DeleteOutlined
} from '@ant-design/icons';
import DrawerPage from "../../../Components/DrawerPage/DrawerPage";
import LoginActivity from './LoginActivity';
import { useDispatch, useSelector } from "react-redux";
import { LoginActivitys } from "../../../ReduxSlices/LoginActivitySlice";
const { Title, Text } = Typography;
import moment from 'moment';
import baseAxios from "../../../../Config";
import Swal from "sweetalert2";

const LoginActivityTable = () => {
  const { loginActivity } = useSelector((state) => state.LoginActivity);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(LoginActivitys())
  }, [])

  const handleSignOut = (id) => {
    baseAxios.delete(`/activity/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "User Sign Out Successfully",
        timer: 2000,
      });
      dispatch(LoginActivitys())
    })
    .catch((err) => {
      console.log(err);
    });
  };
  
  const columns = [
    {
      title: "Browser",
      dataIndex: "browser",
      key: "browser",
    },
    {
      title: "Operating System",
      dataIndex: "operatingSystem",
      key: "operatingSystem",
      responsive: ["md"],
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      responsive: ["lg"],
    },
    {
      title: "Time",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => <span>{moment(text).format('YYYY-MM-DD HH:mm:ss')}</span>
    },
    {
      title: "ACTIONS",
      dataIndex: "actions",
      key: "actions",
      responsive: ["lg"],
      render: (_, record) => (
        <div style={{ textAlign: "center" }}>
          <Button
            type="text"
            style={{ marginRight: "10px", background: "#E91E63", color: "white" }}
            onClick={()=>{handleSignOut(record._id)}}
          >
            Sign Out
            {/* <DeleteOutlined style={{ fontSize: "25px", color: "#999999" }} /> */}
          </Button>
          {/* <Button type="text">
            <UndoOutlined style={{ fontSize: "25px", color: "#999999"}} />
          </Button> */}
        </div>
      ),
    },
  ];

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [hostData, setHostData] = useState(null);

  const showDrawer = (record) => {
    setIsDrawerVisible(true);
    setHostData(record);
  };

  const closeDrawer = () => {
    setIsDrawerVisible(false);
    setHostData(null);
  };

  return (
    <div>
      <Table columns={columns} dataSource={loginActivity?.data?.attributes} />
    </div>
  );
};

export default LoginActivityTable;

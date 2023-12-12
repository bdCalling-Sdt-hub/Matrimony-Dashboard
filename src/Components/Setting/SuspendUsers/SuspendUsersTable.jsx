import { Button, Drawer, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import DrawerPage from "../../DrawerPage/DrawerPage";
import { useDispatch, useSelector } from "react-redux";
import { SuspendUsersData } from "../../../ReduxSlices/SuspendUsersSlice";
const { Title, Text } = Typography;


const SuspendUsersTable = () => {
  const data = useSelector((state) => state.SuspendUsersData.SuspendUsersList);
  const dispatch = useDispatch();
  console.log(data);
  useEffect(()=>{
    dispatch(SuspendUsersData());
  }, [])
  const columns = [
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "EMAIL",
      dataIndex: "email",
      key: "email",
      responsive: ["md"],
    },
    {
      title: "CONTACT",
      dataIndex: "contact",
      key: "contact",
      responsive: ["lg"],
    },
    {
      title: "JOINING DATE",
      dataIndex: "joiningDate",
      key: "joiningDate",
    },
    {
      title: "INE",
      dataIndex: "ine",
      key: "ine",
      responsive: ["md"],
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
      <Table columns={columns} dataSource={data} />
      <Drawer
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography>
              <Title level={5} strong>
                Invoice# Trip No.{hostData?.tripNo}
              </Title>
              <Text>See all information about the trip no. 68656</Text>
            </Typography>
            <Button type="text" onClick={closeDrawer}>
              <IoMdClose fontSize={25} />
            </Button>
          </div>
        }
        closable={false}
        placement="right"
        onClose={closeDrawer}
        open={isDrawerVisible}
        width={600}
      >
        {hostData && <DrawerPage hostData={hostData} />}
      </Drawer>
    </div>
  );
};

export default SuspendUsersTable;

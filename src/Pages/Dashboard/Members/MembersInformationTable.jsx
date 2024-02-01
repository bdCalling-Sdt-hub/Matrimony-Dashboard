import { Avatar, Button, Drawer, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlinePrinter } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { LiaSaveSolid } from "react-icons/lia";
import DrawerPage from "../../../Components/DrawerPage/DrawerPage";
const { Title, Text } = Typography;
import { CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { UserInformationData } from "../../../ReduxSlices/UserInformationSlice";
import ShowingPegination from "../../../Components/ShowingPegination/ShowingPegination";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const MembersInformationTable = ({ activeKey }) => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState("");
  const [reload, setReload] = useState(1);
  const pageSize = 10;
  const data = useSelector((state) => state.UserInformationData.UserInfoList);
  const dataPagination = useSelector(
    (state) => state.UserInformationData.pagination
  );
  const isLoading = useSelector((state) => state.UserInformationData.Loading);

  // console.log(dataPagination);

  const dispatch = useDispatch();

  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    let data = {
      search: searchData,
      page: 1,
    };
    if (searchData === "") {
      dispatch(UserInformationData(data));
    }
  }, [searchData, reload]);

  const userDataGetByPagination = (page, gender) => {
    let data = {
      search: searchData,
      page: page,
      gender: gender,
    };
    dispatch(UserInformationData(data));
  };

  const searchByGender = (gender) => {
    var gender;
    if (activeKey !== 1) {
      if (activeKey == 2) {
        gender = "Male";
      } else if (activeKey == 2) {
        gender = "Female";
      } else {
        gender = "Others";
      }
    }
    const data = {
      gender: gender,
      search: searchData,
      page: page,
    };
    dispatch(UserInformationData(data));
  };
  var [currentPage, setCurrentPage] = useState(0); // Current page number
  const userDataGetBySearch = (currentPage) => {
    let data = {
      search: searchData,
      page: currentPage,
    };

    dispatch(UserInformationData(data));
    // console.log("with search");
  };

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
        <div>
          <img
            style={{ borderRadius: "100%" }}
            src={record.photo[0].publicFileUrl}
            height={50}
            width={50}
          />
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
          {record?.subscription && (
            <Button
              type="primary"
              shape="round"
              style={{
                width: "125px",
                height: "40px",
                color: "white",
                background: "green",
                borderRadius: "50",
              }}
            >
              {record?.subscription?.name}
            </Button>
          )}
          {!record?.subscription && (
            <Button
              type="primary"
              shape="round"
              style={{
                width: "140px",
                height: "40px",
                color: "white",
                background: "red",
                borderRadius: "50",
              }}
            >
              No Subscription
            </Button>
          )}
        </div>
      ),
    },

    {
      title: "Country",
      dataIndex: "country",
      key: "country",
    },
    {
      title: "Action",
      dataIndex: "printView",
      key: "printView",
      responsive: ["lg"],
      render: (_, record) => (
        <div style={{}}>
          <Button
            type="text"
            style={{ marginRight: "10px", paddingBottom: "35px" }}
          >
            <div onClick={() => navigate(`/personal-details/${record.id}`)}>
              <BsInfoCircle style={{ fontSize: "20px", color: "#2BA24C" }} />
            </div>
          </Button>
        </div>
      ),
    },
  ];

  const handlePageChange = (page = 1) => {
    let gender = "";
    if (activeKey === "2") {
      gender = "Male";
    } else if (activeKey === "3") {
      gender = "Female";
    } else if (activeKey === "4") {
      gender = "Others";
    }
    setCurrentPage(page);
    userDataGetByPagination(page, gender);
  };
  console.log("pages", dataPagination, dataPagination.totalPages);

  console.log("data", data);

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: dataPagination.limit,
          showSizeChanger: false,
          total: 20,
          current: dataPagination.page,
          onChange: handlePageChange,
        }}
      />
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
            <Button
              style={{
                borderRadius: "100%",
                backgroundColor: "white",
                color: "red",
                height: "50px",
                width: "50px",
                textAlign: "center",
              }}
              onClick={closeDrawer}
            >
              <CloseOutlined />
            </Button>
          </Space>
        }
      >
        {invoiceData && <DrawerPage invoiceData={invoiceData} />}
      </Drawer>
    </>
  );
};
export default MembersInformationTable;

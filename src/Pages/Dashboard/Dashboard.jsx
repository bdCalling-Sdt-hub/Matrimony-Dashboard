/* eslint-disable no-unused-vars */
import { CarOutlined, MenuOutlined, SettingOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, Layout, Menu, Select, Space, theme } from "antd";
import { Divider } from "antd";
import { GiReceiveMoney } from "react-icons/gi";
import { MdCarRental, MdPayment, MdPeopleOutline } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { MdSubscriptions } from "react-icons/md";
import { BsWindowPlus } from "react-icons/bs";
import { GoPeople } from "./../../../node_modules/react-icons/go/index.esm";

import { RiUserSearchLine } from "react-icons/ri";

import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import logo from "../../Images/Logo.png";
import Styles from "./Dashboard.module.css";

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;

const profileItems = [
  {
    key: 1,
    label: (
      <Link to="/setting/personal-information" style={{ height: "50px" }} rel="noreferrer">
        <div
          className={Styles.everyNotify}
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            style={{ marginRight: "20px" }}
            width="30"
            height="30"
            src="https://img.icons8.com/windows/32/gender-neutral-user.png"
            alt="gender-neutral-user"
          />
          <div className="" style={{ marginTop: "" }}>
            <p>Profile</p>
          </div>
        </div>
      </Link>
    ),
  },
  // {
  //   key: 2,
  //   label: (
  //     <Link to="/notification" style={{}} rel="noreferrer">
  //       <div
  //         className={Styles.everyNotify}
  //         style={{ display: "flex", alignItems: "center" }}
  //       >
  //         <img
  //           style={{ marginRight: "20px" }}
  //           width="30"
  //           height="30"
  //           src="https://img.icons8.com/ios/50/appointment-reminders--v1.png"
  //           alt="appointment-reminders--v1"
  //         />
  //         <div className="" style={{ marginTop: "" }}>
  //           <p>Notification</p>
  //         </div>
  //       </div>
  //     </Link>
  //   ),
  // },
  {
    key: 3,
    label: (
      <div
        style={{ border: "none", backgroundColor: "transparent" }}
        rel="noreferrer"
      >
        <div
          className={Styles.everyNotify}
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            style={{ marginRight: "20px" }}
            width="25"
            height="25"
            src="https://img.icons8.com/ios/50/exit--v1.png"
            alt="exit--v1"
          />
          <div className="" style={{ marginTop: "" }}>
            <p>Logout</p>
          </div>
        </div>
      </div>
    ),
  },
];

const items = [...Array(5).keys()].map((item, index) => {
  return {
    key: index,
    label: (
      <Link to="/notification" style={{}} rel="noreferrer">
        <div
          className={Styles.everyNotify}
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            style={{
              backgroundColor: "#d9cffb",
              borderRadius: "100%",
              padding: "5px",
              marginRight: "15px",
            }}
            width="30"
            height="30"
            src="https://img.icons8.com/3d-fluency/94/person-male--v2.png"
            alt="person-male--v2"
          />
          <div className="" style={{ marginTop: "" }}>
            <p>
              <span>Sanchej haro manual </span>started a new trip from mexico.
            </p>
            <span style={{ color: "#d2d2d2" }}>1 hr ago</span>
          </div>
        </div>
      </Link>
    ),
  };
});

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.lang);
  const userData = JSON.parse(localStorage.getItem("yourInfo"));

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [t, i18n] = useTranslation("global");

  const handleSelectLanguage = (value) => {
    setSelectedLanguage(value);
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("lang", value);
  };

  const handleSearch = (value) => {
    console.log(value);
  };

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

  const menu = (
    <Menu>
      <Menu.Item disabled>
        <h2
          style={{
            color: "#333",
            fontWeight: "500",
            borderBottom: "1px solid #e6e7f4",
            paddingBottom: "20px",
          }}
        >
          Recent Notification
        </h2>
        {/* <span style={{ fontWeight: 'bold', color: '#000' }}>Notifications</span> */}
      </Menu.Item>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "15px",
        }}
      >
        <Button
          type="primary"
          block
          style={{
            height: "50px",
            backgroundColor: "#E91E63",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          <Link to="/notification">View All</Link>
        </Button>
      </div>
    </Menu>
  );

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Sider
        width="260px"
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "auto",
          position: "fixed",
          height: "100vh",
          zIndex: 2,
          backgroundColor: "black",
        }}
      >
        <div className="demo-logo-vertical" />
        <div
          className="logo"
          style={{
            background: "#222222",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // marginTop: "30px",
            marginBottom: "45px",
          }}
        >
          <img
            style={{
              marginTop: "20px",
              marginBottom: "20px",
            }}
            src={logo}
          // height={collapsed ? "40px" : "40px"}
          // width={collapsed ? "40px" : "40px"}
          />
        </div>

        <Menu
          style={{ padding: collapsed ? "0px" : "10px", border: "none", background: "#171726", color: "white" }}
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item
            key="1"
            icon={<RxDashboard style={{ fontSize: "14px" }} />}
          >
            <Link to="/" style={{ fontSize: "16px" }}>
              {t("dashboard")}
            </Link>
          </Menu.Item>

          <Menu.Item
            key="6"
            icon={<GoPeople style={{ fontSize: "14px" }} />}
          >
            <Link to="/user-info" style={{ fontSize: "16px" }}>
              {t("members")}
            </Link>
          </Menu.Item>

          <SubMenu
            style={{ fontSize: "16px" }}
            key="4"
            icon={<MdSubscriptions style={{ fontSize: "14px" }} />}
            title={t("hostInfo.title")}
          >
            <Menu.Item key="39" style={{ fontSize: "14px" }} >
              <Link to="/subscription">{t("hostInfo.subTitle2")}</Link>
            </Menu.Item>
            <Menu.Item key="40" style={{ fontSize: "14px" }}>
              <Link to="/match-request">{t("hostInfo.subTitle1")}</Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item
            key="3"
            icon={<GiReceiveMoney style={{ fontSize: "14px" }} />}
          >
            <Link to="/earning/today-income" style={{ fontSize: "16px" }}>
              {t("earning.title")}
            </Link>
          </Menu.Item>

          <Menu.Item
            key="7"
            icon={<MdPayment style={{ fontSize: "14px" }} />}
          >
            <Link to="/wallet" style={{ fontSize: "16px" }}>
              {t("wallet")}
            </Link>
          </Menu.Item>

          <Menu.Item
            key="8"
            icon={<BsWindowPlus style={{ fontSize: "14px" }} />}
          >
            <Link to="/kyc-form" style={{ fontSize: "16px" }}>
              {t("kyc.title")}
            </Link>
          </Menu.Item>

          <Menu.Item
            key="5"
            icon={<MdPeopleOutline style={{ fontSize: "14px" }} />}
          >
            <Link to="/report-account" style={{ fontSize: "16px" }}>
              {t("reportAccount")}
            </Link>
          </Menu.Item>


          {/* <Divider /> */}



          <Menu.Item
            key="9"
            icon={<SettingOutlined style={{ fontSize: "14px" }} />}
          >
            <Link to="/setting" style={{ fontSize: "16px" }}>
              {t("setting.title")}
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout
      // style={{ background: "white" }}
      >
        <Header
          style={{
            position: "fixed",
            width: "100vw",
            height: "100px",
            zIndex: 1,
            padding: 0,
            backgroundColor: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            paddingRight: "60px",
          }}
        >
          <div className="" style={{ display: "flex", alignItems: "center" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuOutlined /> : <MenuOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                marginLeft: collapsed ? "125px" : "360px",
                fontSize: "16px",
                width: 45,
                height: 45,
                marginRight: "10px",
              }}
            />
            <Space.Compact size="large" style={{ width: "416px", padding: " 10px" }}>
              <Input addonBefore={<SearchOutlined />} placeholder="Search User" onChange={(e) => handleSearch(e.target.value)}/>
            </Space.Compact>
          </div>

          <div
            className={Styles.notificatonProfileSection}
            style={{ display: "flex", alignItems: "center", lineHeight: 0 }}
          >
            <div className="" style={{ marginRight: "40px" }}>
              <Select
                value={selectedLanguage}
                style={{ width: 150 }}
                onChange={handleSelectLanguage}
              >
                <Option value="en">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="https://cdn.britannica.com/29/22529-004-ED1907BE/Union-Flag-Cross-St-Andrew-of-George.jpg"
                      alt="English"
                      style={{ marginRight: 8, width: 16, height: 16 }}
                    />
                    English
                  </div>
                </Option>
                <Option value="es">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src="https://e0.pxfuel.com/wallpapers/630/608/desktop-wallpaper-spain-flag-in-collection.jpg"
                      style={{ marginRight: 8, width: 16, height: 16 }}
                    />
                    Spanish
                  </div>
                </Option>
              </Select>
            </div>
            <div className={Styles.notificaton}>
              <Dropdown
                overlay={menu}
                placement="bottomRight"
                arrow={{
                  pointAtCenter: true,
                }}
              >
                <img
                  style={{ cursor: "pointer" }}
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios/50/appointment-reminders--v1.png"
                  alt="appointment-reminders--v1"
                />
              </Dropdown>
            </div>
            <div className={Styles.profile}>
              <Dropdown
                menu={{
                  items: profileItems,
                }}
                placement="bottomRight"
                arrow={{
                  pointAtCenter: true,
                }}
              >
                <img
                  style={{ cursor: "pointer" }}
                  width="40"
                  height="40"
                  src={userData?.photo[0].publicFileUrl}
                  alt="person-male--v2"
                />
              </Dropdown>
            </div>

            <div style={{ lineHeight: "1.2" }}>
              <h1 style={{ fontSize: "16px" }}>{userData.name}</h1>
              <p style={{ fontSize: "14px" }}>Admin</p>
            </div>
          </div>

        </Header>
        <Content
          style={{
            marginTop: "120px",
            marginBottom: "50px",
            marginLeft: collapsed ? "130px" : "360px",
            marginRight: "60px",
            // background: "#FFF",
            borderRadius: "10px",
            // padding: 50,
            minHeight: 280,
            overflow: "auto",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout >
  );
};
export default Dashboard;

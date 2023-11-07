import { Pie } from "@ant-design/plots";
import { Button, Col, Drawer, Dropdown, Modal, Progress, Row, Space, Typography } from "antd";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { AiOutlineAreaChart } from "react-icons/ai";
import { TbChartArea } from "react-icons/tb";
import { TbChartInfographic } from "react-icons/tb";
import WalletCard from "./WalletTable";
import MembersUpChart from "../DashboardHome/MembersUpChart";
import WalletOverView from "./WalletOverview";
const { Title, Text } = Typography;
import { DownOutlined } from '@ant-design/icons';
import { DatePicker } from 'antd';
import WalletTable from "./WalletTable";

const Wallet = () => {

  const items = [
    {
      label: <a href="">Monthly</a>,
      key: '0',
    },
    {
      label: <a href="">Yearly</a>,
      key: '1',
    }
  ];

  const { RangePicker } = DatePicker;
  const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };
  const onOk = (value) => {
    console.log('onOk: ', value);
  };

  return (
    <div style={{ padding: "0 60px" }}>
      <h2
        style={{ fontSize: "25px", marginBottom: "10px", fontWeight: "normal" }}
      >
        Wallet Summary
      </h2>

      <Row gutter={16} style={{ marginBottom: "20px" }}>

        <Col className="gutter-row" style={{ marginBottom: "10px" }} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
          <div className='income-card'>

            <div>
              <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                <div style={{ width: "24px", height: "24px", backgroundColor: "#D7263D", borderRadius: "5px", display: 'flex', justifyContent: "center", alignItems: "center" }}>
                  <AiOutlineDollarCircle fontSize={16} color="white"></AiOutlineDollarCircle>
                </div>
                <h1 style={{ fontSize: "1.2rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>Total Income</h1>
              </div>
              <h3 style={{ fontSize: "2.5rem", letterSpacing: "1px", marginBottom: "15px" }}>$120.12k</h3>
            </div>

            <div style={{ marginTop: "20px" }}>
              <MembersUpChart></MembersUpChart>
              <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                <h1 style={{ fontSize: "1.5rem", fontWeight: "300" }}>+10%</h1>
                <AiOutlineArrowUp fontSize={20}></AiOutlineArrowUp>
              </div>
            </div>
          </div>
        </Col>

        <Col className="gutter-row" style={{ marginBottom: "10px" }} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
          <div className='income-card'>
            <div>
              <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                <div style={{ width: "24px", height: "24px", backgroundColor: "#E91E63", borderRadius: "5px", display: 'flex', justifyContent: "center", alignItems: "center" }}>
                  <TbChartArea fontSize={16} color="white"></TbChartArea>
                </div>
                <h1 style={{ fontSize: "1.2rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>This Month</h1>
              </div>

              <h3 style={{ fontSize: "2.5rem", letterSpacing: "1px", marginBottom: "15px" }}>5.0K</h3>
            </div>
            <div style={{ marginTop: "20px" }}>
              <MembersUpChart></MembersUpChart>
              <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                <h1 style={{ fontSize: "1.5rem", fontWeight: "300" }}>+10%</h1>
                <AiOutlineArrowUp fontSize={20}></AiOutlineArrowUp>
              </div>
            </div>
          </div>
        </Col>

        <Col className="gutter-row" style={{ marginBottom: "10px" }} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
          <div className='income-card'>
            <div>
              <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                <div style={{ width: "24px", height: "24px", backgroundColor: "#2BA24C", borderRadius: "5px", display: 'flex', justifyContent: "center", alignItems: "center" }}>
                  <TbChartInfographic fontSize={16} color="white"></TbChartInfographic>
                </div>
                <h1 style={{ fontSize: "1.2rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>This 6 Month</h1>
              </div>

              <h3 style={{ fontSize: "2.5rem", letterSpacing: "1px", marginBottom: "15px" }}>5.0K</h3>
            </div>
            <div style={{ marginTop: "20px" }}>
              <MembersUpChart></MembersUpChart>
              <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                <h1 style={{ fontSize: "1.5rem", fontWeight: "300" }}>+10%</h1>
                <AiOutlineArrowUp fontSize={20}></AiOutlineArrowUp>
              </div>
            </div>
          </div>
        </Col>

        <Col className="gutter-row" style={{ marginBottom: "10px" }} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
          <div className='income-card'>
            <div>
              <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                <div style={{ width: "24px", height: "24px", backgroundColor: "#FFC60B", borderRadius: "5px", display: 'flex', justifyContent: "center", alignItems: "center" }}>
                  <AiOutlineAreaChart fontSize={16} color="white"></AiOutlineAreaChart>
                </div>
                <h1 style={{ fontSize: "1.2rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>This Years</h1>
              </div>

              <h3 style={{ fontSize: "2.5rem", letterSpacing: "1px", marginBottom: "15px" }}>$15.03k</h3>
            </div>
            <div style={{ marginTop: "20px" }}>
              <MembersUpChart></MembersUpChart>
              <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                <h1 style={{ fontSize: "1.5rem", fontWeight: "300" }}>+10%</h1>
                <AiOutlineArrowUp fontSize={20}></AiOutlineArrowUp>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={14}>
          <div style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px", padding: "10px", borderRadius: '10px', marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontWeight: 600, fontSize: "18px", marginBottom: "20px", padding: "10px" }}>Overview Balance</p>
              <div>
                <Button
                  onClick={() => setEarn("weeklyEarn")}
                  style={{
                    height: "40px",
                    background: "#F4F4F4",
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 30px",
                    gap: "10px",
                    borderRadius: "60px",
                  }}
                >
                  {/* <span>  Weekly Earning </span> */}
                  <Dropdown
                    menu={{
                      items,
                    }}
                    trigger={['click']}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Monthly
                        <DownOutlined />
                      </Space>
                    </a>
                  </Dropdown>
                </Button>

              </div>
            </div>
            <p style={{ fontWeight: 600, fontSize: "30px", marginBottom: "20px", padding: "10px", color: "#2BA24C" }}>$432,415</p>
            <div style={{ marginBottom: "20px" }}>
              <WalletOverView></WalletOverView>
            </div>
          </div>
        </Col>

        <Col span={10}>
          <div style={{ boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px", padding: "10px", borderRadius: '10px', marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontWeight: 600, fontSize: "18px", marginBottom: "20px", padding: "10px" }}>Wallet Activity</p>
              <div>
                <Button
                  style={{
                    height: "40px",
                    background: "#F4F4F4",
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 10px",
                    gap: "10px",
                  }}
                >
                  <span> Date Range </span>
                  <RangePicker
                    style={{ width: "200px" }}
                    showTime={{
                      // format: 'mm:DD',
                    }}
                    format="YYYY-MM-DD"
                    onChange={onChange}
                    onOk={onOk}
                  />
                  {/* <MdKeyboardArrowDown fontSize={16}></MdKeyboardArrowDown> */}
                </Button>
              </div>
            </div>
            <div style={{ marginBottom: "20px" }}>
              <WalletTable></WalletTable>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Wallet;

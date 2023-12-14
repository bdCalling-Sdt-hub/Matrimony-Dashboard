import { Pie } from "@ant-design/plots";
import { Button, Col, Drawer, Dropdown, Menu, Modal, Progress, Row, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { PaymentData } from "../../../ReduxSlices/PaymentSlice";

const Wallet = () => {

  const dispatch = useDispatch();
  const paymentData = useSelector((state) => state.PaymentData.PaymentList)
  const [toDate, setToDate] = useState(null);
  const [fromDate, setFromDate] = useState(null);

  useEffect(() => {
    const page = 1;
    dispatch(PaymentData(page));
    setSelectedFrequency('yearly');
  }, [])

  console.log("payment Data", paymentData)

  const [paymentShowing, setPaymentShowing] = useState({
    monthly: paymentData?.monthly, // Monthly payment amount
    yearly: paymentData?.yearly, // Yearly payment amount
  });

  const [selectedFrequency, setSelectedFrequency] = useState('monthly');

  const handleMenuClick = (e) => {
    setSelectedFrequency(e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="monthly">Monthly</Menu.Item>
      <Menu.Item key="yearly">Yearly</Menu.Item>
    </Menu>
  );

  const handlePayment = () => {
    const paymentAmount = paymentShowing[selectedFrequency];
    // Use the paymentAmount as needed (e.g., pass it to a function or component)
    console.log(`Payment amount for ${selectedFrequency} is: ${paymentAmount}`);
    // Here, you can perform actions with the payment amount based on the selected frequency
  };

  const { RangePicker } = DatePicker;
  const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
    setFromDate(dateString[0])
    setToDate(dateString[1])

  };
  const onOk = (value) => {
    console.log('onOk: ', value);
  };

  return (
    <div style={{ padding: "0 10px" }}>
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
              <h3 style={{ fontSize: "2.5rem", letterSpacing: "1px", marginBottom: "15px" }}>{paymentData.total}</h3>
            </div>

            <div style={{ marginTop: "20px" }}>
              <MembersUpChart></MembersUpChart>
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

              <h3 style={{ fontSize: "2.5rem", letterSpacing: "1px", marginBottom: "15px" }}>{paymentData.monthly}</h3>
            </div>
            <div style={{ marginTop: "20px" }}>
              <MembersUpChart></MembersUpChart>
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

              <h3 style={{ fontSize: "2.5rem", letterSpacing: "1px", marginBottom: "15px" }}>{paymentData.sixMonth}</h3>
            </div>
            <div style={{ marginTop: "20px" }}>
              <MembersUpChart></MembersUpChart>
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

              <h3 style={{ fontSize: "2.5rem", letterSpacing: "1px", marginBottom: "15px" }}>{paymentData.yearly}</h3>
            </div>
            <div style={{ marginTop: "20px" }}>
              <MembersUpChart></MembersUpChart>
            </div>
          </div>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={14}>
          <div style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", padding: "10px", borderRadius: '10px', marginBottom: "20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontWeight: 600, fontSize: "18px", marginBottom: "20px", padding: "10px" }}>Overview Balance</p>
              <div>
                <Dropdown overlay={menu} trigger={['click']}>
                  <Button
                    style={{
                      height: '40px',
                      background: '#F4F4F4',
                      color: 'black',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '10px 30px',
                      gap: '10px',
                      borderRadius: '60px',
                    }}
                    onClick={handlePayment}
                  >
                    {selectedFrequency === 'monthly' ? 'Monthly' : 'Yearly'} <DownOutlined />
                  </Button>
                </Dropdown>
              </div>
            </div>
            {selectedFrequency === 'monthly' && (
              <p style={{ fontWeight: 600, fontSize: "30px", marginBottom: "20px", padding: "10px", color: "#2BA24C" }}>{paymentData.monthly}</p>
            )}
            {selectedFrequency === 'yearly' && (
              <p style={{ fontWeight: 600, fontSize: "30px", marginBottom: "20px", padding: "10px", color: "#2BA24C" }}>{paymentData.yearly}</p>
            )}
            <div style={{ marginBottom: "20px", }}>
              <WalletOverView data={paymentData.monthlyCounts}></WalletOverView>
            </div>
          </div>
        </Col>

        <Col span={10}>
          <div style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", padding: "10px", borderRadius: '10px', marginBottom: "20px" }}>
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
              <WalletTable date={{ fromDate: fromDate, toDate: toDate }}></WalletTable>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Wallet;

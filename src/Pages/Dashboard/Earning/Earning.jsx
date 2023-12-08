import { Button, Col, Row } from "antd";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import { AiOutlineArrowUp } from 'react-icons/ai';
import { GiQueenCrown } from 'react-icons/gi';
import { FiTrendingUp } from 'react-icons/fi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import EarnHistoryTable from "./EarnHistoryTable";
import style from "./Earning.module.css";
import MembersUpChart from "../DashboardHome/MembersUpChart";
import { DatePicker, Space } from 'antd';
import { PaymentData } from "../../../ReduxSlices/PaymentSlice";
import { useDispatch, useSelector } from "react-redux";


import React, { useEffect, useState } from 'react';
import WeeklyEarn from "./WeeklyEarn";

const Earning = () => {

  const [earn, setEarn] = useState("");
  const dispatch = useDispatch();
  const paymentData = useSelector((state) => state.PaymentData.PaymentList)

  useEffect(()=>{
    const page = 1;
    dispatch(PaymentData(page));
  },[])

  console.log("payment Data",paymentData)

  const { RangePicker } = DatePicker;
  const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
  };
  const onOk = (value) => {
    console.log('onOk: ', value);
  };

  return (
    <div style={{ padding: "10px 10px" }}>
      {/* <h2 style={{ fontSize: "25px", fontWeight: "normal" }}>Earnings</h2> */}
      {
        !earn &&
        <Row gutter={16} style={{ marginBottom: "20px" }}>

          <Col className="gutter-row" style={{ marginBottom: "10px" }} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
            <div className='income-card'>
              <div>
                <h1 style={{ fontSize: "1.2rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>Total Earnings</h1>
                <h3 style={{ fontSize: "2.2rem", letterSpacing: "1px", marginBottom: "15px", color: "#E91E63" }}>$ {paymentData.total}</h3>
              </div>
              <div style={{ marginTop: "20px" }}>
                <MembersUpChart></MembersUpChart>
              </div>
            </div>
          </Col>

          <Col className="gutter-row" style={{ marginBottom: "10px" }} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
            <div className='income-card'>
              <div>
                <h1 style={{ fontSize: "1.2rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>Last Week  Earnings</h1>
                <h3 style={{ fontSize: "2.2rem", letterSpacing: "1px", marginBottom: "15px", color: "#E91E63" }}>$ {paymentData.weekly}</h3>
              </div>
              <div style={{ marginTop: "20px" }}>
                <MembersUpChart></MembersUpChart>
              </div>
            </div>
          </Col>

          <Col className="gutter-row" style={{ marginBottom: "10px" }} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
            <div className='income-card'>
              <div>
                <h1 style={{ fontSize: "1.2rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>Last Month Earnings</h1>
                <h3 style={{ fontSize: "2.2rem", letterSpacing: "1px", marginBottom: "15px", color: "#E91E63" }}>$ {paymentData.monthly}</h3>
              </div>
              <div style={{ marginTop: "20px" }}>
                <MembersUpChart></MembersUpChart>
              </div>
            </div>
          </Col>

          <Col className="gutter-row" style={{ marginBottom: "10px" }} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
            <div className='income-card'>
              <div>
                <h1 style={{ fontSize: "1.2rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>Yearly earnings</h1>
                <h3 style={{ fontSize: "2.2rem", letterSpacing: "1px", marginBottom: "15px", color: "#E91E63" }}>$ {paymentData.yearly}</h3>
              </div>
              <div style={{ marginTop: "20px" }}>
                <MembersUpChart></MembersUpChart>
              </div>
            </div>
          </Col>
        </Row>
      }
      {
        earn === "weeklyEarn" &&
        <div>
          <p style={{ fontWeight: 600, fontSize: "30px", marginBottom: "20px", padding: "10px" }}>Last Week Earnings</p>
          <div style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", padding: "10px", borderRadius: '10px', marginBottom: "20px" }}>
            <p style={{ fontWeight: 600, fontSize: "18px", marginBottom: "20px", padding: "10px" }}>Week Earning Revenue</p>
            <div style={{ marginBottom: "20px" }}>
              <WeeklyEarn data={paymentData.weeklyCounts} />
            </div>
          </div>
        </div>
      }

      {
        earn === "monthlyEarn" &&
        <div>
          <p style={{ fontWeight: 600, fontSize: "30px", marginBottom: "20px", padding: "10px" }}>Last Years Earnings</p>
          <div style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", padding: "10px", borderRadius: '10px', marginBottom: "20px" }}>
            <p style={{ fontWeight: 600, fontSize: "18px", marginBottom: "20px", padding: "10px" }}>Years Earning Revenue</p>
            <div style={{ marginBottom: "20px" }}>
            <WeeklyEarn data={paymentData.monthlyCounts} />
            </div>
          </div>
        </div>
      }



      <Row gutter={16}>
        <Col className="gutter-row" style={{ marginBottom: "10px" }} xs={{ span: 12 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
          <div>
            <Button
              style={{
                height: "45px",
                background: "#F4F4F4",
                color: "black",
                display: "flex",
                alignItems: "center",
                padding: "10px 30px",
                gap: "10px",
              }}
            >
              <span> Date Range </span>
              <RangePicker
                style={{ width: "230px" }}
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
        </Col>
        <Col className="gutter-row" style={{ display: "flex", gap: 10, marginBottom: "10px", justifyContent: "flex-end" }} xs={{ span: 12 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
          <div>
            <Button
              onClick={() => setEarn("weeklyEarn")}
              style={{
                height: "45px",
                background: "#F4F4F4",
                color: "black",
                display: "flex",
                alignItems: "center",
                padding: "10px 30px",
                gap: "10px",
              }}
            >
              <span>  Weekly Earning </span>
            </Button>
          </div>

          <div>
            <Button
              onClick={() => setEarn("monthlyEarn")}
              style={{
                height: "45px",
                background: "#F4F4F4",
                color: "black",
                display: "flex",
                alignItems: "center",
                padding: "10px 30px",
                gap: "10px",
              }}
            >
              <span> Monthly Earning </span>
            </Button>
          </div>
        </Col>
      </Row>

      {/* <h2 style={{ fontSize: "16px", margin: "30px 0px", fontWeight: "normal" }}>
        Showing results 1-25 of 25
      </h2> */}

      <EarnHistoryTable data = {paymentData.monthlyCounts} />
    </div>
  );
};

export default Earning;

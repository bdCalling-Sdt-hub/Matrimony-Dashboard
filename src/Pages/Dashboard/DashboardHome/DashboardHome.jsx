import { Col, Divider, Row } from "antd";
import React, { useEffect } from "react";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import "./DashboardHome.css";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { GrHistory } from "react-icons/gr";
import { MdCarRental } from "react-icons/md";
import { SlRefresh } from "react-icons/sl";
import InvoiceTable from "./InvoiceTable";
import MostRentCarChart from "./MostRentCarChart";
import DailyRentChart from "./dailyRentChart";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import FreeMembersChart from "./FreeMembersChart";
import MembersUpChart from "./MembersUpChart";
import { AiOutlineArrowUp } from 'react-icons/ai';
import { GiQueenCrown } from 'react-icons/gi';
import { FiTrendingUp } from 'react-icons/fi';
import VisitorsChart from "./VisitorsChart";
import { PaymentData } from "../../../ReduxSlices/PaymentSlice";
import { SubscriptionCountData } from "../../../ReduxSlices/SubscriptionCountSlice";
import { useDispatch, useSelector } from "react-redux";
import { UserInformationData } from "../../../ReduxSlices/UserInformationSlice";
import { useNavigate } from "react-router-dom";

function DashboardHome() {
  const onChange = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };
  const navigate = useNavigate()
  const paymentData = useSelector((state) => state.PaymentData.PaymentList)
  const subscriptionCountData = useSelector((state) => state.SubscriptionCountData.SubscriptionCountList)
  const userData = useSelector((state) => state.UserInformationData.UserInfoList)
  const dispatch = useDispatch();
  useEffect(() => {
    const limit = {
      limit: 3,
      page: 1,
    };
    dispatch(SubscriptionCountData());
    dispatch(PaymentData());
    dispatch(UserInformationData(limit));
  }, [])
  console.log("user Count", userData)

  return (
    <div>
      <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>Overview</h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={6}>
          <div className='free-members'>
            <div style={{ display: 'flex', justifyContent: "space-between", paddingLeft: "20px", paddingRight: "20px" }}>
              <div>
                <h2 style={{ paddingLeft: "10px", paddingTop:"12.5px"}}>Free Members</h2>
                <h1 style={{ fontSize: "52px",  paddingLeft: "10px" }}>{subscriptionCountData?.free?.freeUsers}</h1>
              </div>
            </div>
            <FreeMembersChart data={subscriptionCountData?.free}></FreeMembersChart>
          </div>
        </Col>
        <Col className="gutter-row" span={18}>
          <Row gutter={16}>
            {
              subscriptionCountData?.paid ? subscriptionCountData.paid.map((item, index) =>
                <Col span={8}>
                  <div className='income-card'>
                    <div>
                      <div style={{ display: 'flex', alignItems: "center", gap: "10px",paddingLeft: "5px", paddingTop:"5px" }}>
                        <GiQueenCrown fontSize={20} color="orange"></GiQueenCrown>
                        <h1 style={{ fontWeight: "normal", fontSize: "20px" }}>{item.packageName}</h1>
                      </div>
                      <h3 style={{ fontSize: "2.5rem", letterSpacing: "1px", marginBottom: "15px", paddingLeft: "5px" }}>{item.count}</h3>
                    </div>
                  </div>
                </Col>) : null
            }
          </Row>
        </Col>
      </Row>

      <Row gutter={24} style={{marginTop:"30px"}}>
        <Col lg={{ span: 16 }}>
          <div
            className=""
            style={{
              padding: "30px 30px",
              borderRadius: "15px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              background: "white"
            }}
          >
            <h3 style={{ color: "black", paddingBottom: "8px", marginBottom: "8px", borderBottom: "2px solid #D3D3D3" }}>Earning Revenue</h3>
            <MostRentCarChart data={paymentData.monthlyCounts} />
          </div>
        </Col>

        <Col lg={{ span: 8 }}>
          <Row gutter={24}>
            <Col span={12}>
              <div className='shadow-design' style={{ marginBottom: "25px", background: "white", padding: "20px", borderRadius: "10px" }}>
                <div >
                  <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                    <h1 style={{ fontSize: "1.0rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>Total Earnings</h1>
                  </div>

                  <h3 style={{ fontSize: "2.0rem", letterSpacing: "1px", marginBottom: "15px", color: "#2BA24C" }}>$ {paymentData.total}</h3>
                </div>
                <div style={{ textAlign: "right" }}>
                  <FiTrendingUp fontSize={20} color="#E91E63"></FiTrendingUp>
                </div>
              </div>

              <div className='shadow-design' style={{ marginBottom: "10px", background: "white", padding: "20px", borderRadius: "10px" }}>
                <div >
                  <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                    <h1 style={{ fontSize: "1.0rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>Last Week Earnings</h1>
                  </div>

                  <h3 style={{ fontSize: "2.0rem", letterSpacing: "1px", marginBottom: "15px", color: "#2BA24C" }}>$ {paymentData.weekly}</h3>
                </div>
                <div style={{ textAlign: "right" }}>
                  <FiTrendingUp fontSize={20} color="#E91E63"></FiTrendingUp>
                </div>
              </div>

            </Col>
            <Col span={12}>
              <div className='shadow-design' style={{ marginBottom: "25px", background: "white", padding: "20px", borderRadius: "10px" }}>
                <div >
                  <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                    <h1 style={{ fontSize: "1.0rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>Last Month Earnings</h1>
                  </div>

                  <h3 style={{ fontSize: "2.0rem", letterSpacing: "1px", marginBottom: "15px", color: "#2BA24C" }}>$ {paymentData.monthly}</h3>
                </div>
                <div style={{ textAlign: "right" }}>
                  <FiTrendingUp fontSize={20} color="#E91E63"></FiTrendingUp>
                </div>
              </div>

              <div className='shadow-design' style={{ marginBottom: "10px", background: "white", padding: "20px", borderRadius: "10px" }}>
                <div >
                  <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                    <h1 style={{ fontSize: "1.0rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>Yearly Earnings</h1>
                  </div>

                  <h3 style={{ fontSize: "2.0rem", letterSpacing: "1px", marginBottom: "15px", color: "#2BA24C" }}>$ {paymentData.yearly}</h3>
                </div>
                <div style={{ textAlign: "right" }}>
                  <FiTrendingUp fontSize={20} color="#E91E63"></FiTrendingUp>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row style={{ marginTop: "20px" }} gutter={24}>
        <Col lg={{ span: 16 }}>
          <div
            className=""
            style={{
              padding: "30px 30px",
              borderRadius: "15px",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              background: "white"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "2px solid #D3D3D3" }}>
              <h3 style={{ color: "black", paddingBottom: "8px", marginBottom: "8px" }}>User List</h3>
              <h3 style={{ color: "black", paddingBottom: "8px", marginBottom: "8px", cursor: "pointer" }} onClick={()=> navigate('/user-info')}>See All</h3>
            </div>
            <InvoiceTable data = {userData} />
          </div>
        </Col>

        <Col className="gutter-row" style={{ marginBottom: "10px" }} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
          <div className='shadow-design' style={{ marginBottom: "25px", background: "white", padding: "20px", borderRadius: "10px" }}>
            <div >
              <div style={{ display: 'flex', alignItems: "center", gap: "10px", borderBottom: "2px solid #D3D3D3" }}>

                <h3 style={{ color: "black", marginTop: "10px", marginBottom: "15px", }}>Visitors</h3>
              </div>

              <div>
                <VisitorsChart
                  width={400}
                  height={180}></VisitorsChart>
              </div>
            </div>

            <div style={{ display: "flex", background: "white", borderRadius: "10px" }}>

              <div style={{ backgroundColor: "#2BA24C", padding: "5px 20px", margin: "10px", borderRadius: "8px", width: "100%", textAlign: "center", height: "90px" }}>
                <h3 style={{ fontSize: "2.0rem", fontWeight: "200", letterSpacing: "1px", marginBottom: "0px", color: "white" }}>2,124</h3>
                <h1 style={{ fontSize: "1.0rem", fontWeight: "200", marginTop: "0px", marginBottom: "10px", color: "white" }}>Last Month</h1>
              </div>

              <div style={{ backgroundColor: "#E91E63", padding: "5px 20px", margin: "10px", borderRadius: "8px", width: "100%", textAlign: "center", height: "90px" }}>
                <h3 style={{ fontSize: "2.0rem", fontWeight: "200", letterSpacing: "1px", marginBottom: "0px", color: "white" }}>7,124</h3>
                <h1 style={{ fontSize: "1.0rem", fontWeight: "200", marginTop: "0px", marginBottom: "10px", color: "white" }}>Last 1 Years</h1>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default DashboardHome;

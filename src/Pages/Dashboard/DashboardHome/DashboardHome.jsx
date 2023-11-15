import { Col, Divider, Row } from "antd";
import React from "react";
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

function DashboardHome() {
  const onChange = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  return (
    <div>
      <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>Overview</h1>
      <Row gutter={16} style={{ marginBottom: "20px" }}>
        <Col className="gutter-row" style={{ marginBottom: "10px" }} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
          <div className='free-members'>
            <div style={{ display: 'flex', justifyContent: "space-between", paddingLeft: "20px", paddingRight: "20px" }}>
              <div>
                <h1 style={{ fontSize: "1.5rem", fontWeight: "300", marginTop: "15px", marginBottom: "15px" }}>Free Members</h1>
                <h3 style={{ fontSize: "2.5rem", letterSpacing: ".2rem", marginBottom: "15px" }}>14.0k</h3>
              </div>
              <div style={{ marginTop: "20px" }}>
                <MembersUpChart></MembersUpChart>
                <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                  <h1 style={{ fontSize: "1.5rem", fontWeight: "300" }}>+10%</h1>
                  <AiOutlineArrowUp fontSize={20}></AiOutlineArrowUp>
                </div>
              </div>
            </div>

            <FreeMembersChart></FreeMembersChart>
          </div>
        </Col>
        <Col className="gutter-row" style={{ marginBottom: "10px" }} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 6 }}>
          <div className='income-card'>
            <div>
              <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                <GiQueenCrown fontSize={25} color="orange"></GiQueenCrown>
                <h1 style={{ fontSize: "1.2rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>Silver Members</h1>
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
          <div className='income-card'>
            <div>
              <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                <GiQueenCrown fontSize={25} color="orange"></GiQueenCrown>
                <h1 style={{ fontSize: "1.2rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>Diamond Members</h1>
              </div>
              {/* <h1 style={{ fontSize: "1.2rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>Diamond Members</h1> */}
              <h3 style={{ fontSize: "2.5rem", letterSpacing: "1px", marginBottom: "15px" }}>5.3K</h3>
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
                <GiQueenCrown fontSize={25} color="orange"></GiQueenCrown>
                <h1 style={{ fontSize: "1.2rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>Silver Members</h1>
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
          <div className='income-card'>
            <div>
              <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                <GiQueenCrown fontSize={25} color="orange"></GiQueenCrown>
                <h1 style={{ fontSize: "1.2rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>Diamond Members</h1>
              </div>
              {/* <h1 style={{ fontSize: "1.2rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>Diamond Members</h1> */}
              <h3 style={{ fontSize: "2.5rem", letterSpacing: "1px", marginBottom: "15px" }}>5.3K</h3>
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
                <GiQueenCrown fontSize={25} color="orange"></GiQueenCrown>
                <h1 style={{ fontSize: "1.2rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>Silver Members</h1>
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
          <div className='income-card'>
            <div>
              <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                <GiQueenCrown fontSize={25} color="orange"></GiQueenCrown>
                <h1 style={{ fontSize: "1.2rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>Diamond Members</h1>
              </div>
              {/* <h1 style={{ fontSize: "1.2rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>Diamond Members</h1> */}
              <h3 style={{ fontSize: "2.5rem", letterSpacing: "1px", marginBottom: "15px" }}>5.3K</h3>
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



      <Row gutter={24}>
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
            <MostRentCarChart />
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

                  <h3 style={{ fontSize: "2.0rem", letterSpacing: "1px", marginBottom: "15px", color: "#2BA24C" }}>$ 3,235</h3>
                </div>
                <div style={{ textAlign: "right" }}>
                  <FiTrendingUp fontSize={20} color="#E91E63"></FiTrendingUp>
                </div>
              </div>

              <div className='shadow-design' style={{ marginBottom: "10px", background: "white", padding: "20px", borderRadius: "10px" }}>
                <div >
                  <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                    <h1 style={{ fontSize: "1.0rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>Total Earnings</h1>
                  </div>

                  <h3 style={{ fontSize: "2.0rem", letterSpacing: "1px", marginBottom: "15px", color: "#2BA24C" }}>$ 3,235</h3>
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
                    <h1 style={{ fontSize: "1.0rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>Total Earnings</h1>
                  </div>

                  <h3 style={{ fontSize: "2.0rem", letterSpacing: "1px", marginBottom: "15px", color: "#2BA24C" }}>$ 3,235</h3>
                </div>
                <div style={{ textAlign: "right" }}>
                  <FiTrendingUp fontSize={20} color="#E91E63"></FiTrendingUp>
                </div>
              </div>

              <div className='shadow-design' style={{ marginBottom: "10px", background: "white", padding: "20px", borderRadius: "10px" }}>
                <div >
                  <div style={{ display: 'flex', alignItems: "center", gap: "10px" }}>
                    <h1 style={{ fontSize: "1.0rem", fontWeight: "200", marginTop: "10px", marginBottom: "15px" }}>Total Earnings</h1>
                  </div>

                  <h3 style={{ fontSize: "2.0rem", letterSpacing: "1px", marginBottom: "15px", color: "#2BA24C" }}>$ 3,235</h3>
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
              <h3 style={{ color: "black", paddingBottom: "8px", marginBottom: "8px" }}>See All</h3>
            </div>
            <InvoiceTable />
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

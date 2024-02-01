import { Button, Col, DatePicker, Image, Input, Row, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import dayjs from "dayjs";
import React, { useState } from "react";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { FaCrown } from 'react-icons/fa';
const dateFormat = "YYYY-MM-DD";
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { GoDownload } from 'react-icons/go';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UserInformationData } from "../../../ReduxSlices/UserInformationSlice";
import baseAxios from "../../../../Config";
import ReactToPrint from "react-to-print";

const PersonalDetails = () => {
  const { id } = useParams()
  const [data, setData] = useState({});
  const [subscription, setSubscription] = useState("");
  const token = localStorage.getItem("token");
  const componentRef = React.useRef();

  console.log(id)
  useEffect(() => {
    baseAxios.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setData(res.data.data.attributes.user);
      setSubscription(res.data.data.attributes.mySubscription);
    });
  }, []);




  return (
    <>
      {
        <div ref={componentRef} style={{padding:"20px"}}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", gap: "20px" }}>
              <Image
                width={200}
                style={{ borderRadius: "6px" }}
                src={data.photo && data.photo[0].publicFileUrl}
              />
              <div style={{ marginTop: "60px" }}>
                <h2>{data.name}</h2>
                <p>{data.occupation + ',  ' + data.age + " years"}</p>
                <p style={{ display: 'flex', alignItems: "center", gap: "2px" }}><HiOutlineLocationMarker></HiOutlineLocationMarker> {data.country}</p>
              </div>
            </div>
            <div>
              <ReactToPrint
                trigger={() => (<Button

                  style={{
                    height: "40px",
                    background: "#E91E63",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    padding: "10px 20px",
                    gap: "10px",
                  }}
                  onClick={() => window.print()}
                >
                  <BsFileEarmarkPdfFill fontSize={16} />
                  <span> Bio Data.pdf</span>
                  <GoDownload fontSize={16}></GoDownload>
                </Button>
                )}
                content={() => componentRef.current}
              />
            </div>
          </div>

          <div>
            <Button

              style={{
                height: "60px",
                background: "#FFC60B",
                color: "white",
                display: "flex",
                alignItems: "center",
                padding: "10px 30px",
                gap: "10px",
              }}
            >
              <FaCrown fontSize={16} />
              <span style={{ fontSize: "16px" }}> {subscription} Mamber</span>
            </Button>
          </div>

          <div style={{ marginTop: "20px" }}>
            <h1 style={{ fontSize: "16px" }}>About {data.name}</h1>
            <p style={{ marginTop: "20px", fontSize: "16px" }}>{data.aboutMe}</p>
          </div>


          <Row style={{ marginBottom: "15px" }}>
            <Col span={6}>
              <div style={{ borderRight: "#A7A7A7 1px solid", marginRight: "10px", height: "340px" }}>
                <p style={{ marginTop: "20px", fontSize: "16px", fontWeight: 'bold' }}>Personal Details</p>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Name : </p>
                  <p>{data.name}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Gender : </p>
                  <p>{data.gender}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Marital Status :</p>
                  <p>{data.maritalStatus}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Age :</p>
                  <p>{data.age} years</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Height :</p>
                  <p>{data.height ? '0' : data.height} cm</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Religion :</p>
                  <p>{data.religion}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Mother tongue :</p>
                  <p>{data.motherTongue}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>City :</p>
                  <p>{data.city}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Country :</p>
                  <p>{data.country}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Residential Status :</p>
                  <p>{data.residentialStatus}</p>
                </div>

              </div>
            </Col>
            <Col span={6}>
              <div style={{ borderRight: "#A7A7A7 1px solid", margin: "10px", height: "340px" }}>
                <p style={{ marginTop: "20px", fontSize: "16px", fontWeight: 'bold' }}>Career Details</p>
                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Education :</p>
                  <p>{data.education}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Work Experience :</p>
                  <p>{data.workExperience}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Occupation :</p>
                  <p>{data.occupation}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Annual Income :</p>
                  <p>{data.annualIncome}</p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div style={{ borderRight: "#A7A7A7 1px solid", margin: "10px", height: "340px" }}>
                <p style={{ marginTop: "20px", fontSize: "16px", fontWeight: 'bold' }}>Lifestyle</p>
                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Habits :</p>
                  <p>{data?.habits}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Hobbies :</p>
                  <p>{data?.hobbies}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Favorite music :</p>
                  <p>{data.favouriteMusic}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Favorite movies :</p>
                  <p>{data.favouriteMovies}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Sports :</p>
                  <p>{data.sports}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Tv shows :</p>
                  <p>{data.tvShows}</p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div style={{ margin: "10px", height: "340px" }}>
                <p style={{ marginTop: "20px", fontSize: "16px", fontWeight: 'bold' }}>Contact Information</p>
                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Contact No :</p>
                  <p>{data.phoneNumber}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Mail Address :</p>
                  <p>{data.email}</p>
                </div>
              </div>
            </Col>
          </Row>

          <Row style={{ marginTop: "10px" }}>
            <Col span={12}>
              <div style={{ borderRight: "#A7A7A7 1px solid", marginRight: "10px", height: "340px" }}>
                <p style={{ marginTop: "20px", fontSize: "16px", fontWeight: 'bold' }}>Family Information</p>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", paddingTop: "10px" }}>
                  <p>Family status :</p>
                  <p>{data.familyStatus}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", marginTop: "10px" }}>
                  <p>Family values :</p>
                  <p>{data.familyValues}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", marginTop: "10px" }}>
                  <p>Family Type :</p>
                  <p>{data.familyType}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", marginTop: "10px" }}>
                  <p>Family income :</p>
                  <p>{data.familyIncome}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", marginTop: "10px" }}>
                  <p>Father's occupation :</p>
                  <p>{data.fathersOccupation}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", marginTop: "10px" }}>
                  <p>Mother's occupation :</p>
                  <p>{data.mothersOccupation}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", marginTop: "10px" }}>
                  <p>No of brothers :</p>
                  <p>{data.brothers}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", marginTop: "10px" }}>
                  <p>No of sisters :</p>
                  <p>{data.sisters}</p>
                </div>

              </div>
            </Col>
            <Col span={12}>
              <div style={{ marginRight: "10px", height: "340px" }}>
                <p style={{ marginTop: "20px", fontSize: "16px", fontWeight: 'bold', paddingLeft: "100px" }}>Partner Preferences</p>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", marginTop: "10px", paddingLeft: "100px" }}>
                  <p>Age :</p>
                  <p>{data.age}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", marginTop: "10px", paddingLeft: "100px" }}>
                  <p>Height :</p>
                  <p>{data.height}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", marginTop: "10px", paddingLeft: "100px" }}>
                  <p>City :</p>
                  <p>{data.city}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", marginTop: "10px", paddingLeft: "100px" }}>
                  <p>Country :</p>
                  <p>{data.country}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", marginTop: "10px", paddingLeft: "100px" }}>
                  <p>Marital status :</p>
                  <p>{data.maritalStatus}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", marginTop: "10px", paddingLeft: "100px" }}>
                  <p>Religion :</p>
                  <p>{data.religion}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", marginTop: "10px", paddingLeft: "100px" }}>
                  <p>Mother tongue :</p>
                  <p>{data.motherTongue}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", marginTop: "10px", paddingLeft: "100px" }}>
                  <p>Education :</p>
                  <p>{data.education}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", marginTop: "10px", paddingLeft: "100px" }}>
                  <p>Occupation :</p>
                  <p>{data.occupation}</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", marginTop: "10px", paddingLeft: "100px" }}>
                  <p>Income :</p>
                  <p>Around {data.income}</p>
                </div>

              </div>
            </Col>
          </Row >
        </div>
      }
    </>
  );
};

export default PersonalDetails;

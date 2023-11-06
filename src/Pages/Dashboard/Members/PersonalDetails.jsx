import { Button, Col, DatePicker, Image, Input, Row, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import dayjs from "dayjs";
import React, { useState } from "react";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { FaCrown } from 'react-icons/fa';
const dateFormat = "YYYY-MM-DD";
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { GoDownload } from 'react-icons/go';

const PersonalDetails = () => {


  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <>
      {
        <>
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
                src="https://yt3.googleusercontent.com/Qy5Gk9hccQxiZdX8IxdK-mF2ktN17gap3ZkGQZkGz8NB4Yep3urmucp5990H2tjXIISgUoYssJE=s900-c-k-c0x00ffffff-no-rj"
              />
              <div>
                <h2>Fahima</h2>
                <p>Student , 24 years</p>
                <p style={{ display: 'flex', alignItems: "center", gap: "2px" }}><HiOutlineLocationMarker></HiOutlineLocationMarker> Pakistan</p>
              </div>
            </div>
            <div>
              <Button

                style={{
                  height: "40px",
                  background: "#E91E63",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  padding: "10px 20px",
                  gap: "10px",
                }}
              >
                <BsFileEarmarkPdfFill fontSize={16} />
                <span> Bio Data.pdf</span>
                <GoDownload fontSize={16}></GoDownload>
              </Button>
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
              <span style={{ fontSize: "16px" }}> Diamond Mamber</span>
            </Button>
          </div>

          <div style={{ marginTop: "20px" }}>
            <h1 style={{ fontSize: "16px" }}>About Rida</h1>
            <p style={{ marginTop: "20px", fontSize: "16px" }}>Hello there! I'm Rida, seeking a lifelong adventure partner. A blend of tradition and modernity, I find joy in the simple moments and cherish family values. With a heart that believes in love's magic, I'm looking for someone to share happiness.</p>
          </div>


          <Row style={{ marginBottom: "15px" }}>
            <Col span={6}>
              <div style={{ borderRight: "#A7A7A7 1px solid", marginRight: "10px", height: "340px" }}>
                <p style={{ marginTop: "20px", fontSize: "16px", fontWeight: 'bold' }}>Personal Details</p>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Name : </p>
                  <p>Rida Anam</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Gender : </p>
                  <p>Female</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Marital Status :</p>
                  <p>Unmarried</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Age :</p>
                  <p>24 years</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Height :</p>
                  <p>5 Ft 3 In</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Religion :</p>
                  <p>Islam</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Mother tongue :</p>
                  <p>Urdu</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>City :</p>
                  <p>Karachi</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Country :</p>
                  <p>Pakistan</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Citizenship :</p>
                  <p>Pakistan</p>
                </div>

              </div>
            </Col>
            <Col span={6}>
              <div style={{ borderRight: "#A7A7A7 1px solid", margin: "10px", height: "340px" }}>
                <p style={{ marginTop: "20px", fontSize: "16px", fontWeight: 'bold' }}>Career Details</p>
                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Education :</p>
                  <p>Software Engineering</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Work Experience :</p>
                  <p>Govt Job</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Occupation :</p>
                  <p>Job Holder</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Annual Income :</p>
                  <p>$3600</p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div style={{ borderRight: "#A7A7A7 1px solid", margin: "10px", height: "340px" }}>
                <p style={{ marginTop: "20px", fontSize: "16px", fontWeight: 'bold' }}>Lifestyle</p>
                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Habits :</p>
                  <p>5 times prayes</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Hobbies :</p>
                  <p>Traveling</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Favorite music :</p>
                  <p>Pop</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Favorite movies :</p>
                  <p>Action</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Sports :</p>
                  <p>Cricket</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Tv shows :</p>
                  <p>Thriller</p>
                </div>
              </div>
            </Col>
            <Col span={6}>
              <div style={{ margin: "10px", height: "340px" }}>
                <p style={{ marginTop: "20px", fontSize: "16px", fontWeight: 'bold' }}>Contact Information</p>
                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Contact No :</p>
                  <p>(+44) 555-0103</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "10px", marginTop: "10px" }}>
                  <p>Mail Address :</p>
                  <p>abc@gmail.com</p>
                </div>
              </div>
            </Col>
          </Row>

          <Row style={{ marginTop: "10px" }}>
            <Col span={12}>
              <div style={{ borderRight: "#A7A7A7 1px solid", marginRight: "10px", height: "340px" }}>
                <p style={{ marginTop: "20px", fontSize: "16px", fontWeight: 'bold' }}>Family Information</p>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", marginTop: "10px" }}>
                  <p>Family status :</p>
                  <p>Rida Anam</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", paddingLeft: "100px", marginTop: "10px" }}>
                  <p>Family values :</p>
                  <p>Female</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", paddingLeft: "100px", marginTop: "10px" }}>
                  <p>Family Type :</p>
                  <p>Unmarried</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", paddingLeft: "100px", marginTop: "10px" }}>
                  <p>Family income :</p>
                  <p>24 years</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", paddingLeft: "100px", marginTop: "10px" }}>
                  <p>Father’s occupation :</p>
                  <p>5 Ft 3 In</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", paddingLeft: "100px", marginTop: "10px" }}>
                  <p>Mother’s occupation :</p>
                  <p>Islam</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", paddingLeft: "100px", marginTop: "10px" }}>
                  <p>No of brothers :</p>
                  <p>Urdu</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", paddingLeft: "100px", marginTop: "10px" }}>
                  <p>No of sisters :</p>
                  <p>Karachi</p>
                </div>

              </div>
            </Col>
            <Col span={12}>
              <div style={{ marginRight: "10px", height: "340px" }}>
                <p style={{ marginTop: "20px", fontSize: "16px", fontWeight: 'bold', paddingLeft: "100px" }}>Family Information</p>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", paddingLeft: "100px", marginTop: "10px" }}>
                  <p>Age :</p>
                  <p>Rida Anam</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", paddingLeft: "100px", marginTop: "10px" }}>
                  <p>Height :</p>
                  <p>Female</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", paddingLeft: "100px", marginTop: "10px" }}>
                  <p>City :</p>
                  <p>Unmarried</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", paddingLeft: "100px", marginTop: "10px" }}>
                  <p>Country :</p>
                  <p>24 years</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", paddingLeft: "100px", marginTop: "10px" }}>
                  <p>Marital status :</p>
                  <p>5 Ft 3 In</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", paddingLeft: "100px", marginTop: "10px" }}>
                  <p>Religion :</p>
                  <p>Islam</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", paddingLeft: "100px", marginTop: "10px" }}>
                  <p>Mother tongue :</p>
                  <p>Urdu</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", paddingLeft: "100px", marginTop: "10px" }}>
                  <p>Education :</p>
                  <p>Karachi</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", paddingLeft: "100px", marginTop: "10px" }}>
                  <p>Occupation :</p>
                  <p>Urdu</p>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingRight: "200px", paddingLeft: "100px", marginTop: "10px" }}>
                  <p>Income :</p>
                  <p>Around $5000</p>
                </div>

              </div>
            </Col>
          </Row >
        </>

      }
    </>
  );
};

export default PersonalDetails;

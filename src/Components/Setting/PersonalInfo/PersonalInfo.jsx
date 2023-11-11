import { Button, Col, DatePicker, Image, Input, Row, Space, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import dayjs from "dayjs";
import React, { useState } from "react";
import { LiaEditSolid } from "react-icons/lia";
const dateFormat = "YYYY-MM-DD";

const PersonalInfo = () => {
  const [profileEdit, setProfileEdit] = useState(false);

  const handleChange = () => {
    setProfileEdit(true);
  };

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
      {!profileEdit ? (
        <>
          <Row gutter={24}>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6 }} lg={{ span: 8 }}
            >
              <div style={{
                background: "white",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 18px 50px -10px",
                padding: "10px",
                borderRadius: "10px"
              }}>
                <div>
                  <Button
                    onClick={handleChange}
                    style={{
                      background: "#e91e63 ",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <LiaEditSolid fontSize={16} />
                    Edit
                  </Button>
                </div>
                <div style={{ textAlign: "center", lineHeight: "40px" }}>
                  <h2 style={{ fontSize: "15px" }}>Profile</h2>
                  <Image
                    width={"50%"}
                    style={{ borderRadius: "50%" }}
                    src="https://yt3.googleusercontent.com/Qy5Gk9hccQxiZdX8IxdK-mF2ktN17gap3ZkGQZkGz8NB4Yep3urmucp5990H2tjXIISgUoYssJE=s900-c-k-c0x00ffffff-no-rj"
                  />
                  <h2 style={{}}>Admin</h2>
                </div>
              </div>

            </Col>

            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }}>
              <Row gutter={15} style={{ marginBottom: "15px" }}>
                <Col span={12}>
                  <label htmlFor="">Full Name</label>
                  <Input
                    style={{ height: "45px" }}
                    defaultValue={"Fahim"}
                    readOnly
                  />
                </Col>

                <Col span={12}>
                  <label htmlFor="">Last Name</label>
                  <Input
                    style={{ height: "45px" }}
                    defaultValue={"Fahim"}
                    readOnly
                  />
                </Col>
              </Row>
              <Row gutter={15} style={{ marginBottom: "15px" }}>
                <Col span={24}>
                  <label htmlFor="">Email</label>
                  <Input
                    style={{ height: "45px" }}
                    defaultValue={"siffahim25@gmail.com"}
                    readOnly
                  />
                </Col>
              </Row>
              <Row gutter={15} style={{ marginBottom: "15px" }}>
                <Col span={12}>
                  <div>
                    <label htmlFor="" style={{ marginTop: "10px", }}>Phone Number</label>
                    <Space.Compact>
                      <Input
                        style={{
                          width: '20%',
                        }}
                        defaultValue="+1"
                      />
                      <Input
                        style={{
                          width: '80%',
                          height: '45px'
                        }}
                        defaultValue="26888888"
                      />
                    </Space.Compact>
                  </div>
                </Col>
                <Col span={12}>
                  <label htmlFor="">Date of Birth</label>
                  <DatePicker
                    style={{ height: "45px", width: "100%" }}
                    defaultValue={dayjs("2023-08-27", dateFormat)}
                    disabled
                  />
                </Col>
              </Row>
              <Row style={{ marginBottom: "15px" }}>
                <Col span={24}>
                  <label htmlFor="">Address</label>
                  <Input
                    style={{ height: "45px" }}
                    defaultValue={"Mogbazer,Dhaka"}
                    readOnly
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Row gutter={24}>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }} lg={{ span: 8 }}>
              <div>
                <div>
                  <p>Profile</p>
                  <ImgCrop rotationSlider>
                    <Upload
                      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                      listType="picture-circle"
                      fileList={fileList}
                      onChange={onChange}
                      onPreview={onPreview}
                    >
                      {fileList.length < 5 && "+ Upload"}
                    </Upload>
                  </ImgCrop>

                  <h2>Admin</h2>
                </div>
              </div>
            </Col>

            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }}>
              <Row gutter={15} style={{ marginBottom: "15px" }}>
                <Col span={12}>
                  <label htmlFor="">Full Name</label>
                  <Input style={{ height: "45px" }} defaultValue={"Fahim"} />
                </Col>
                <Col span={12}>
                  <label htmlFor="">Last Name</label>
                  <Input style={{ height: "45px" }} defaultValue={"Fahim"} />
                </Col>
              </Row>
              <Row gutter={15} style={{ marginBottom: "15px" }}>
                <Col span={24}>
                  <label htmlFor="">Email</label>
                  <Input
                    style={{ height: "45px" }}
                    defaultValue={"siffahim25@gmail.com"}
                  />
                </Col>

              </Row>
              <Row gutter={15} style={{ marginBottom: "15px" }}>
                <Col span={12}>
                  <label htmlFor="">Phone Number</label>
                  <Input style={{ height: "45px" }} defaultValue={"01646524028"} />
                </Col>
                <Col span={12}>
                  <label htmlFor="">Date of Birth</label>
                  <DatePicker
                    style={{ height: "45px", width: "100%" }}
                    defaultValue={dayjs("2023-08-27", dateFormat)}
                  />
                </Col>
              </Row>
              <Row style={{ marginBottom: "15px" }}>
                <Col span={24}>
                  <label htmlFor="">Address</label>
                  <Input
                    style={{ height: "45px" }}
                    defaultValue={"Mogbazer,Dhaka"}
                  />
                </Col>
              </Row>
              <Button
                style={{
                  height: "45px",
                  background: "#E91E63",
                  color: "#fff",
                  marginTop: "20px",
                }}
                block
              >
                Save
              </Button>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default PersonalInfo;

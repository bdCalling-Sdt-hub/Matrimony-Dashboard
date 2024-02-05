import { Button, Col, DatePicker, Image, Input, Row, Space, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import dayjs from "dayjs";
import React, { useState } from "react";
import { LiaEditSolid } from "react-icons/lia";
import baseAxios from '../../../../Config';
import Swal from "sweetalert2";

const dateFormat = "YYYY-MM-DD";

const PersonalInfo = () => {
  const [profileEdit, setProfileEdit] = useState(false);
  const data = JSON.parse(localStorage.getItem("yourInfo"));
  const [name, setName] = useState(data.name);
  const [country, setCountry] = useState(data.country);
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber);
  const [photo, setPhoto] = useState(data.photo[0]);

  const handleEdit = () => {
    setProfileEdit(false);
    const formData = new FormData();
    formData.append('name', name);
    formData.append('country', country);
    formData.append('phoneNumber', phoneNumber);
    formData.append('photo', photo);

    baseAxios.patch(`users/${data.id}`, formData, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }).then((res) => {
      Swal.fire({
        icon: "success",
        title: "Profile updated successfully",
      });
      localStorage.setItem(
        "yourInfo",
        JSON.stringify(res.data.data.attributes)
      );
      setProfileEdit(false);
      window.location.reload();
    }).catch((err) => {
      console.log(err);
    })
  };

  const handleChange = () => {
    setProfileEdit(true);
  };

  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: data?.photo[0]?.publicFileUrl,
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
                    width={"180px"}
                    height={"180px"}
                    style={{ borderRadius: "50%" }}
                    src={data?.photo[0]?.publicFileUrl}
                  />
                  <h2 style={{}}>Admin</h2>
                </div>
              </div>

            </Col>

            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }}>
              <Row gutter={15} style={{ marginBottom: "15px" }}>
                <Col span={24}>
                  <label htmlFor="">Full Name</label>
                  <Input
                    style={{ height: "45px" }}
                    defaultValue={data.name}
                    readOnly
                  />
                </Col>
              </Row>
              <Row gutter={15} style={{ marginBottom: "15px" }}>
                <Col span={24}>
                  <label htmlFor="">Email</label>
                  <Input
                    style={{ height: "45px" }}
                    defaultValue={data.email}
                    disabled
                  />
                </Col>
              </Row>
              <Row gutter={15} style={{ marginBottom: "15px" }}>
                <Col span={12}>
                  <div>
                    <label htmlFor="" style={{ marginTop: "10px", }}>Phone Number</label>

                    <Input
                      style={{
                        width: '100%',
                        height: '45px'
                      }}
                      defaultValue={data.phoneNumber}
                    />
                  </div>
                </Col>
                <Col span={12}>
                  <label htmlFor="">Date of Birth</label>
                  <Input
                    style={{ height: "45px", width: "100%" }}
                    defaultValue={data.dataOfBirth} // Adjust format based on the actual date format
                    disabled
                  />
                </Col>
              </Row>
              <Row style={{ marginBottom: "15px" }}>
                <Col span={24}>
                  <label htmlFor="">Address</label>
                  <Input
                    style={{ height: "45px" }}
                    defaultValue={data.country}
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
                      onChange={(e) => setPhoto(e.file)}
                      beforeUpload={(file) => {
                        setFileList([file]); // Restrict to one file
                        return false; // Prevent upload here, handled in onChange
                      }}
                      onPreview={onPreview}
                    >
                      {fileList.length === 0 && "+ Upload"} {/* Show upload button when no file is selected */}
                    </Upload>
                  </ImgCrop>

                  <h2>Admin</h2>
                </div>
              </div>
            </Col>

            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }} lg={{ span: 16 }}>
              <Row gutter={15} style={{ marginBottom: "15px" }}>
                <Col span={24}>
                  <label htmlFor="">Full Name</label>
                  <Input style={{ height: "45px" }} defaultValue={data.name} onChange={(e) => { setName(e.target.value) }} />
                </Col>
              </Row>
              <Row gutter={15} style={{ marginBottom: "15px" }}>
                <Col span={24}>
                  <label htmlFor="">Email</label>
                  <Input
                    style={{ height: "45px" }}
                    defaultValue={data.email}
                    disabled
                  />
                </Col>

              </Row>
              <Row gutter={15} style={{ marginBottom: "15px" }}>
                <Col span={12}>
                  <label htmlFor="">Phone Number</label>
                  <Input style={{ height: "45px" }} defaultValue={data.phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} />
                </Col>
                <Col span={12}>
                  <label htmlFor="">Date of Birth</label>
                  <Input
                    style={{ height: "45px", width: "100%" }}
                    defaultValue={data.dataOfBirth}
                    disabled // Adjust format based on the actual date format
                  />
                </Col>
              </Row>
              <Row style={{ marginBottom: "15px" }}>
                <Col span={24}>
                  <label htmlFor="">Address</label>
                  <Input
                    style={{ height: "45px" }}
                    defaultValue={data.country}
                    onChange={(e) => { setCountry(e.target.value) }}
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
                onClick={handleEdit}
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

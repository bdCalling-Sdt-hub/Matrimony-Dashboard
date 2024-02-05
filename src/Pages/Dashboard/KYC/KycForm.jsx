import {
  Space,
  Col,
  Form,
  Input,
  Dropdown,
  Row,
  Select,
  Upload,
  message,
  Button,
} from "antd";
import { DownOutlined } from '@ant-design/icons';
const { Search } = Input;
import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { AiOutlineCloudDownload } from "react-icons/ai";
//import DatePicker from "react-multi-date-picker";
import styleForm from "./KycForm.module.css";
const { Option } = Select;
const { Dragger } = Upload;

const items = [
  {
    label: "Male",
    key: '0',
  },
  {
    label: "FeMale",
    key: '1',
  },
  {
    label: 'Others',
    key: '3',
  },
];

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
  },
};

const KycForm = () => {
  const [formType, setFormType] = useState("host");

  const [selectedCountry, setSelectedCountry] = useState("usa");

  const handleCountryChange = (value) => {
    setSelectedCountry(value);
  };

  const style = {
    formContainer: {
      background: "white",
      // padding: "10px",
      borderRadius: "10px",
    },
    formNavigateBtn: {
      height: "50px",
    },
    input: {
      height: "45px",
      background: "#F6F6F6",
    },
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
          height: "45px",
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div style={{ padding: "10px 10px" }}>
      <h2 style={{ marginBottom: "10px", fontWeight: "600" }}>User KYC From</h2>
      <div style={style.formContainer}>

        <div style={{ padding: "20px 20px", boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", borderRadius: "10px" }}>
          <Form>
            <Row gutter={16}>
              <Col span={8}>
                <div>
                  <label htmlFor="" style={{ fontWeight: "bold" }}>Full Name</label>
                  <Form.Item name="name">
                    <Input
                      style={style.input}
                      placeholder="Enter your first name"
                    />
                  </Form.Item>
                </div>

                <div style={{ margin: "15px 0", fontWeight: "bold" }}>
                  <label htmlFor="">Date of Birth</label>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <Input style={{ height: "40px", background: "#F6F6F6" }} format="DD" />
                    <Input
                      style={{ height: "40px", background: "#F6F6F6" }}
                      format="MM"
                      onlyMonthPicker
                    />
                    <Input style={{ height: "40px", background: "#F6F6F6" }} onlyYearPicker />
                  </div>
                </div>


                <div style={{ margin: "15px 0", fontWeight: "bold" }}>
                  <label htmlFor="">Mother tongue</label>
                  <div>
                    <Form.Item
                      name="motherTongue :"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter your Mother tongue"
                        style={style.input}
                      />
                    </Form.Item>
                  </div>
                </div>

                <div>
                  <label htmlFor="" style={{ fontWeight: "bold" }} >Education</label>
                  <Form.Item name="education">
                    <Input
                      style={style.input}
                      placeholder="Enter your education"
                    />
                  </Form.Item>
                </div>

                <div>
                  <label htmlFor="" style={{ fontWeight: "bold" }}>Caste</label>
                  <Form.Item name="caste">
                    <Input style={style.input} placeholder="Enter your caste" />
                  </Form.Item>
                </div>

                <div>
                  <label htmlFor="" style={{ fontWeight: "bold" }}>Family status</label>
                  <Form.Item name="familyStatus">
                    <Input style={style.input} placeholder="Enter your Family status" />
                  </Form.Item>
                </div>

                <div>
                  <label htmlFor="" style={{ fontWeight: "bold" }}>Family income</label>
                  <Form.Item name="familyIncome">
                    <Input style={style.input} placeholder="Enter your Family income" />
                  </Form.Item>
                </div>

                <div>
                  <label htmlFor="" style={{ fontWeight: "bold" }}>No of brothers</label>
                  <Form.Item name="noBrothers">
                    <Input style={style.input} placeholder="Enter your No of brothers" />
                  </Form.Item>
                </div>

                <div>
                  <label htmlFor="" style={{ fontWeight: "bold" }}>Height</label>
                  <Form.Item name="height">
                    <Input style={style.input} placeholder="Enter your Height" />
                  </Form.Item>
                </div>

                <div>
                  <label htmlFor="" style={{ fontWeight: "bold" }}>Marital status</label>
                  <Form.Item name="caste">
                    <Input style={style.input} placeholder="Enter your Marital Status" />
                  </Form.Item>
                </div>

              </Col>

              <Col span={8}>
                <div style={{ fontWeight: "bold" }}>
                  <label
                    htmlFor=""
                    style={{ display: "block", }}
                  >
                    Gender
                  </label>
                  <Dropdown menu={{ items }} trigger={['click']}>
                    <a onClick={(e) => e.preventDefault()}>
                      <Button style={{
                        display: "flex", justifyContent: "space-between", justifyItems: "center", alignItems: "center", width: "100%", height: "45px", background: "#F6F6F6"
                      }}> Enter your gender
                        <DownOutlined />
                      </Button>
                    </a>
                  </Dropdown>
                </div>


                <div style={{ marginTop: "10px", fontWeight: "bold" }}>
                  <label htmlFor="" style={{ marginTop: "10px", fontWeight: "bold" }}>Height</label>
                  <Form.Item name="height">
                    <Input
                      style={style.input}
                      placeholder="Enter your height"
                    />
                  </Form.Item>
                </div>

                <div style={{ marginTop: "10px", fontWeight: "bold" }}>
                  <label htmlFor="" style={{ marginTop: "10px", fontWeight: "bold" }}>Country</label>
                  <Form.Item name="country">
                    <Input
                      style={style.input}
                      placeholder="Enter your Country"
                    />
                  </Form.Item>
                </div>

                <div>
                  <label htmlFor="" style={{ marginTop: "10px", fontWeight: "bold" }}>Work Experience</label>
                  <Form.Item name="workExperience">
                    <Input style={style.input} placeholder="Enter your Employed" />
                  </Form.Item>
                </div>
                <div>
                  <label htmlFor="" style={{ marginTop: "10px", fontWeight: "bold" }}>Residential Status</label>
                  <Form.Item name="residential">
                    <Input style={style.input} placeholder="Enter your Residential Status" />
                  </Form.Item>
                </div>

                <div>
                  <label htmlFor="" style={{ marginTop: "10px", fontWeight: "bold" }}>Phone Number</label>
                  <Space.Compact style={{ width: "100%" }}>
                    <Input
                      style={{
                        width: '20%',
                        background: "#F6F6F6"
                      }}
                      defaultValue="+1"
                    />
                    <Input
                      style={{
                        width: '80%',
                        height: '45px',
                        background: "#F6F6F6",
                      }}
                      defaultValue="26888888"
                    />
                  </Space.Compact>
                </div>

                <div style={{ marginTop: "25px", fontWeight: "bold" }}>
                  <label htmlFor="" style={{ marginTop: "10px", fontWeight: "bold" }}>Family values</label>
                  <Form.Item name="familyValue">
                    <Input style={style.input} placeholder="Enter your Family values" />
                  </Form.Item>
                </div>

                <div>
                  <label htmlFor="" style={{ marginTop: "10px", fontWeight: "bold" }}>Father’s occupation</label>
                  <Form.Item name="fatherOccupation">
                    <Input style={style.input} placeholder="Enter your Father’s occupation" />
                  </Form.Item>
                </div>

                <div>
                  <label htmlFor="" style={{ marginTop: "10px", fontWeight: "bold" }}>No of sisters</label>
                  <Form.Item name="noSisters">
                    <Input style={style.input} placeholder="Enter your No of sisters" />
                  </Form.Item>
                </div>

                <div>
                  <label htmlFor="" style={{ marginTop: "10px", fontWeight: "bold" }}>City</label>
                  <Form.Item name="city">
                    <Input style={style.input} placeholder="Enter your City" />
                  </Form.Item>
                </div>

                <div>
                  <label htmlFor="" style={{ marginTop: "10px", fontWeight: "bold" }}>Religion</label>
                  <Form.Item name="religion">
                    <Input style={style.input} placeholder="Enter your Religion" />
                  </Form.Item>
                </div>

                <div>
                  <label htmlFor="" style={{ marginTop: "10px", fontWeight: "bold" }}>Occupation</label>
                  <Form.Item name="occupation">
                    <Input style={style.input} placeholder="Enter your Occupation" />
                  </Form.Item>
                </div>
              </Col>

              <Col span={8}>
                <div>
                  <label htmlFor="" style={{ fontWeight: "bold" }}>Full Name</label>
                  <Form.Item name="name">
                    <Input
                      style={style.input}
                      placeholder="Enter your first name"
                    />
                  </Form.Item>
                </div>

                <div style={{ margin: "15px 0", fontWeight: "bold" }}>
                  <label htmlFor="">Date of Birth</label>
                  <div style={{ display: "flex", gap: "15px" }}>
                    <Input style={{ height: "40px", background: "#F6F6F6" }} format="DD" />
                    <Input
                      style={{ height: "40px", background: "#F6F6F6" }}
                      format="MM"
                      onlyMonthPicker
                    />
                    <Input style={{ height: "40px", background: "#F6F6F6" }} onlyYearPicker />
                  </div>
                </div>


                <div style={{ margin: "15px 0", fontWeight: "bold" }}>
                  <label htmlFor="">Mother tongue</label>
                  <div>
                    <Form.Item
                      name="motherTongue :"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter your Mother tongue"
                        style={style.input}
                      />
                    </Form.Item>
                  </div>
                </div>

                <div>
                  <label htmlFor="" style={{ fontWeight: "bold" }} >Education</label>
                  <Form.Item name="education">
                    <Input
                      style={style.input}
                      placeholder="Enter your education"
                    />
                  </Form.Item>
                </div>

                <div>
                  <label htmlFor="" style={{ fontWeight: "bold" }}>Caste</label>
                  <Form.Item name="caste">
                    <Input style={style.input} placeholder="Enter your caste" />
                  </Form.Item>
                </div>

                <div>
                  <label htmlFor="" style={{ fontWeight: "bold" }}>Family status</label>
                  <Form.Item name="familyStatus">
                    <Input style={style.input} placeholder="Enter your Family status" />
                  </Form.Item>
                </div>

                <div>
                  <label htmlFor="" style={{ fontWeight: "bold" }}>Family income</label>
                  <Form.Item name="familyIncome">
                    <Input style={style.input} placeholder="Enter your Family income" />
                  </Form.Item>
                </div>

                <div>
                  <label htmlFor="" style={{ fontWeight: "bold" }}>No of brothers</label>
                  <Form.Item name="noBrothers">
                    <Input style={style.input} placeholder="Enter your No of brothers" />
                  </Form.Item>
                </div>

                <div>
                  <label htmlFor="" style={{ fontWeight: "bold" }}>Height</label>
                  <Form.Item name="height">
                    <Input style={style.input} placeholder="Enter your Height" />
                  </Form.Item>
                </div>

                <div>
                  <label htmlFor="" style={{ fontWeight: "bold" }}>Marital status</label>
                  <Form.Item name="caste">
                    <Input style={style.input} placeholder="Enter your Marital Status" />
                  </Form.Item>
                </div>

              </Col>
            </Row>

            <p style={{ fontWeight: "600", marginBottom: "30px" }}>Upload Bio data</p>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button style={{ width: "210px", height: "40px", color: "#E91E63", border: "1px solid #E91E63" }}>
                <AiOutlineCloudDownload fontSize={16}></AiOutlineCloudDownload>
                <span style={{ marginLeft: "10px" }}>Upload Bio Data</span>
              </Button>
              <Button style={{ width: "210px", height: "40px", color: "white", background: "#E91E63" }}>
                Edit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default KycForm;

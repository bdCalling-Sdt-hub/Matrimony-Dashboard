import { useState } from 'react';
import { Modal, Card, Form, Input, Radio, Checkbox, Button, Row, Col, Switch } from 'antd';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FiPrinter } from 'react-icons/fi';
import { BsDownload } from 'react-icons/bs';
import { FaCrown } from 'react-icons/fa';
import TextArea from 'antd/es/input/TextArea';

const EarnInvoice = ({ modalVisible, handleCancel, setModalVisible }) => {
    const onFinish = (values) => {
        setModalVisible(false);
    };
    return (
        <>
            <Modal
                title="Invoice"
                visible={modalVisible}
                onCancel={handleCancel}
                footer={null}
                style={{ width: "1000px", height: 800 }}
            >
                <Card>
                    <Form
                        name="subscriptionForm"
                        onFinish={onFinish}
                        initialValues={{
                            status: true,
                        }}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        layout="vertical"
                    >
                        <Row gutter={16}>
                            <Col span={24}>
                                <div style={{ display: "flex" }}>
                                    <p style={{ fontSize: '16px', fontWeight: "600", color: "#222" }}>Report Profile Reason : </p>
                                    <p style={{ fontSize: '16px', fontWeight: "500", color: "#222" }}> 2154721478145</p>
                                </div>

                                <div style={{ display: "flex", marginTop: "10px" }}>
                                    <p style={{ fontSize: '16px', fontWeight: "600", color: "#222" }}>Payment date:  </p>
                                    <p style={{ fontSize: '16px', fontWeight: "500", color: "#222" }}> 2023-06-29</p>
                                </div>
                                <div style={{ display: "flex" }}>
                                    <p style={{ fontSize: '16px', fontWeight: "600", color: "#222" }}>Time:  </p>
                                    <p style={{ fontSize: '16px', fontWeight: "500", color: "#222" }}> 00:51:48</p>
                                </div>

                                <div style={{ display: "flex", marginTop: "20px" }}>
                                    <p style={{ fontSize: '16px', fontWeight: "600", color: "#222" }}>Billed To,</p>
                                </div>

                                <div style={{ display: "flex", marginTop: "10px" }}>
                                    <p style={{ fontSize: '16px', fontWeight: "600", color: "#222" }}>Name:  </p>
                                    <p style={{ fontSize: '16px', fontWeight: "500", color: "#222" }}> Olivia Emma</p>
                                </div>

                                <div style={{ display: "flex", marginTop: "10px" }}>
                                    <p style={{ fontSize: '16px', fontWeight: "600", color: "#222" }}>Email:  </p>
                                    <p style={{ fontSize: '16px', fontWeight: "500", color: "#222" }}> oliviaemma@gmail.com</p>
                                </div>

                                <div style={{ display: "flex", marginTop: "10px" }}>
                                    <p style={{ fontSize: '16px', fontWeight: "600", color: "#222" }}>Phone:  </p>
                                    <p style={{ fontSize: '16px', fontWeight: "500", color: "#222" }}> 100200300</p>
                                </div>

                                <div style={{ display: "flex", marginTop: "30px" }}>
                                    <p style={{ fontSize: '16px', fontWeight: "600", color: "#222" }}>Payment Method: </p>
                                    <p style={{ fontSize: '16px', fontWeight: "500", color: "#222" }}> Credit Dard</p>
                                </div>

                                <div style={{ display: "flex" }}>
                                    <p style={{ fontSize: '16px', fontWeight: "600", color: "#222" }}>Payment Status: </p>
                                    <p style={{ fontSize: '16px', fontWeight: "500", color: "#222" }}> Paid</p>
                                </div>
                            </Col>
                        </Row>

                        <p style={{ marginTop: "60px", fontSize: '20px', fontWeight: "600", marginBottom: "10px" }}>Report summary</p>

                        <Row style={{ border: "1px solid black" }}>
                            <Col span={16}>
                                <p style={{ fontSize: '16px', fontWeight: "400", borderRight: "1px solid black", borderBottom: "1px solid black", padding: "5px" }}>Item</p>
                            </Col>
                            <Col span={8}>
                                <p style={{ fontSize: '16px', fontWeight: "400", padding: "5px", borderBottom: "1px solid black", textAlign: "center", }}>Amount</p>
                            </Col>

                            <Col span={16}>
                                <p style={{ fontSize: '16px', fontWeight: "400", borderRight: "1px solid black", borderBottom: "1px solid black", padding: "5px" }}>Last year Earnings</p>
                            </Col>
                            <Col span={8}>
                                <p style={{ fontSize: '16px', fontWeight: "400", padding: "5px", borderBottom: "1px solid black", textAlign: "center", }}>2000$</p>
                            </Col>

                            <Col span={16}>
                                <p style={{ fontSize: '16px', fontWeight: "600", textAlign: "end", borderRight: "1px solid black", padding: "5px" }}>Total Amount</p>
                            </Col>
                            <Col span={8}>
                                <p style={{ fontSize: '16px', fontWeight: "400", padding: "5px", textAlign: "center", }}>2000$</p>
                            </Col>
                        </Row>


                        <Form.Item style={{ textAlign: "center", marginTop: "30px" }}>
                            <Button type="primary" htmlType="submit" style={{ background: "#E91E63", color: "#ffffff", borderRadius: "5px", width: "140px" }}>
                                <FiPrinter fontSize={14}></FiPrinter>
                                <span style={{ marginLeft: "10px", fontSize: "14px" }}>  Print </span>

                            </Button>
                            <Button type="primary" htmlType="submit" style={{ background: "#E91E63", color: "#ffffff", borderRadius: "5px", width: "140px", marginLeft: "10px" }}>

                                <span style={{ marginRight: "10px", fontSize: "14px" }}>  Download </span>
                                <BsDownload fontSize={14}></BsDownload>
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Modal>
        </>
    );
};

export default EarnInvoice;

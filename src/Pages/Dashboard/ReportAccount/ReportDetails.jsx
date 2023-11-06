import { useState } from 'react';
import { Modal, Card, Form, Input, Radio, Checkbox, Button, Row, Col, Switch } from 'antd';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaCrown } from 'react-icons/fa';
import TextArea from 'antd/es/input/TextArea';

const ReportDetails = ({ modalVisible, handleCancel, setModalVisible }) => {
    const onFinish = (values) => {
        console.log('Received values:', values);
        setModalVisible(false);
    };
    return (
        <>
            <Modal
                title="Report"
                visible={modalVisible}
                onCancel={handleCancel}
                footer={null}
                style={{ width: 1000, height: 800 }}
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
                                <p style={{ fontSize: '16px', fontWeight: "600", color: "#222" }}>Report Profile Reason </p>
                                <Radio style={{
                                    marginTop: "10px",
                                }}>Harrasment</Radio>

                            </Col>
                        </Row>

                        <p style={{ marginTop: "60px", fontSize: '20px', fontWeight: "500", marginBottom: "10px" }}>Report summary</p>
                        <TextArea rows={4} placeholder="Lorem ipsum dolor sit amet consectetur. Interdum ipsum scelerisque nisl faucibus vulputate id. Elementum mauris arcu volutpat id ultrices." maxLength={6} />

                        <Form.Item style={{ textAlign: "center", marginTop: "30px" }}>
                            <Button type="primary" htmlType="submit" style={{ background: "#E91E63", color: "#ffffff", borderRadius: "5px", width: "140px" }}>
                                Postponed
                            </Button>
                            <Button type="primary" htmlType="submit" style={{ background: "#E91E63", color: "#ffffff", borderRadius: "5px", width: "140px", marginLeft: "10px" }}>
                                Suspend
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Modal>
        </>
    );
};

export default ReportDetails;

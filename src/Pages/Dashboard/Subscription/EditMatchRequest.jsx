import { useState } from 'react';
import { Modal, Card, Form, Input, Radio, Checkbox, Button, Row, Col, Switch } from 'antd';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaCrown } from 'react-icons/fa';

const EditMatchRequest = ({ modalVisible, handleCancel, setModalVisible }) => {
  const onFinish = (values) => {
    console.log('Received values:', values);
    setModalVisible(false);
  };
  return (
    <>
      <Modal
        title="Add Subscription"
        visible={modalVisible}
        onCancel={handleCancel}
        footer={null}
        style={{ width: 600, height: 800 }}
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
                <Form.Item
                  label="Plan Amount"
                  name="amount"
                  rules={[
                    {
                      message: 'Please enter a Plan Amount!',
                    },
                  ]}
                >
                  <Input placeholder="Enter amount here" type="number" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label="Plan Types" name="plan-types">
              <Input placeholder="Ex. 3 months" />
            </Form.Item>



            <Form.Item style={{ textAlign: "center" }}>
              <Button type="primary" htmlType="submit" style={{ background: "#E91E63", color: "#ffffff", borderRadius: "20px", width: "140px" }}>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Modal>
    </>
  );
};

export default EditMatchRequest;

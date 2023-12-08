import { useState } from 'react';
import { Modal, Card, Form, Input, Radio, Checkbox, Button, Row, Col, Switch } from 'antd';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaCrown } from 'react-icons/fa';

const EditSubscription = ({ modalVisible, handleCancel, setModalVisible, requestData, setReload }) => {
  
  console.log(requestData);
  const onFinish = (values) => {
    console.log('Received values:', values);
    setModalVisible(false);
  };
  return (
    <>
      <Modal
        title="Edit Subscription"
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
            <Form.Item
              label="Plan Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please enter a Plan Name!',
                },
              ]}
            >
              <Input defaultValue={requestData?.name} placeholder="Type full name here" />
            </Form.Item>
            <Row gutter={18}>
              <Col span={12}>
                <Form.Item
                  label="Price for Pakistan"
                  name="pakistan"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter a Plan Amount for Pakistan!',
                    },
                  ]}
                >
                  <Input placeholder="Type full name here" type='number' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Price for other countries"
                  name="others"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter a Plan for other countries!',
                    },
                  ]}
                >
                  <Input placeholder="Enter amount here" type="number" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label="Plan Types" name="plan-types">
              <Input defaultValue={requestData?.duration} placeholder="Ex. 3 months" />
            </Form.Item>

            {/* <Form.Item name="active" valuePropName="checked">
              <Checkbox style={{ color: '#E91E63' }}>
                Active
              </Checkbox>
              <style>
                {`
                  .ant-checkbox-input:focus + .ant-checkbox-inner,
                  .ant-checkbox-checked .ant-checkbox-inner,
                  .ant-checkbox-checked:hover .ant-checkbox-inner {
                    background-color: #E91E63;
                    border-color: #E91E63;
                  }
                  .ant-checkbox-checked .ant-checkbox-inner::after {
                    border-color: #ffffff;
                  }
                `}
              </style>
            </Form.Item> */}

            <Form.Item label="Messages" name="messages">
              <Row justify="space-between" align="middle">
                <Col span={18}>
                  <Input
                  defaultValue={requestData?.message}
                    placeholder="Send unlimited message and check online"
                  />
                </Col>
                <Col span={4} style={{ marginRight: "20px" }}>
                  <Form.Item name="unlimitedMessages" valuePropName="checked" style={{ marginBottom: 0 }}>
                    <Checkbox checked={requestData?.isMessageNoLimit}  style={{ color: '#E91E63' }}>Unlimited</Checkbox>
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item label="Reminder" name="reminder">
              <Row justify="space-between" align="middle">
                <Col span={18} >
                  <Input
                  defaultValue={requestData?.reminders}
                    placeholder="Send unlimited reminder and check online"
                  />
                </Col>
                <Col span={4} style={{ marginRight: "20px" }}>
                  <Form.Item name="unlimitedReminder" valuePropName="checked" style={{ marginBottom: 0 }}>
                    <Checkbox checked={requestData?.isRemindersNoLimit} style={{ color: '#E91E63', }}>Unlimited</Checkbox>
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item label="Match Request" name="match-request">
              <Row justify="space-between" align="middle">
                <Col span={18}>
                  <Input
                  defaultValue={requestData?.matchRequests}
                    placeholder="Send unlimited match request and check online"
                  />
                </Col>
                <Col span={4} style={{ marginRight: "20px" }}>
                  <Form.Item name="unlimitedMatchRequest" valuePropName="checked" style={{ marginBottom: 0 }}>
                    <Checkbox checked={requestData?.isMatchRequestsNoLimit} style={{ color: '#E91E63' }}>Unlimited</Checkbox>
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>

            {/* <Form.Item label="Status" name="status" valuePropName="checked">
              <Switch
                style={{
                  background: "#E91E63",
                  borderRadius: "20px",
                }}
              />
            </Form.Item> */}

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

export default EditSubscription;

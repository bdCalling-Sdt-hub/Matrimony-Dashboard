import { useState } from 'react';
import { Modal, Card, Form, Input, Radio, Checkbox, Button, Row, Col, Switch } from 'antd';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaCrown } from 'react-icons/fa';
import Swal from 'sweetalert2';
import baseAxios from '../../../../Config';

const EditDefaultSubscription = ({ modalVisible, handleCancel, setModalVisible, requestData, setReload }) => {
  const token = localStorage.getItem("token");
  const onFinish = (values) => {
    console.log('Received values:', values);
    if (requestData) {
      baseAxios.post(`/subscription/default`, values, {
        headers: {
          authorization: `Bearer ${token}`,
        }
      })
        .then((res) => {
          console.log('update subs---->', res.data);
          Swal.fire({
            icon: 'success',
            title: 'Default subscription updated successfully',
            showConfirmButton: true,
            timer: 1500
          });
          setReload(reload => reload + 1);
          setModalVisible(false);
        })
        .catch((err) => {
          console.log(err);
          setModalVisible(true);
        });
    }
  };
  return (
    <>
      <Modal
        title="Edit Default Subscription"
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
              name: requestData?.name,
              duration: requestData?.duration,
              message: requestData?.message,
              reminders: requestData?.reminders,
              matchRequests: requestData?.matchRequests,
              isMessageNoLimit: requestData?.isMessageNoLimit,
              isRemindersNoLimit: requestData?.isRemindersNoLimit,
              isMatchRequestsNoLimit: requestData?.isMatchRequestsNoLimit,
              active: requestData?.active,
            }}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            layout="vertical"
          >
            <Form.Item
              label="Plan Name"
              name="name"
            >
              <Input defaultValue={requestData?.name} placeholder="Type full name here" />
            </Form.Item>
          
            <Form.Item label="Plan Types" name="duration">
              <Input defaultValue={requestData?.duration} placeholder="Ex. 3 months" />
            </Form.Item>

            <Form.Item name="active" valuePropName="checked">
              <Checkbox style={{ color: '#E91E63' }}>
                Active
              </Checkbox>
            </Form.Item>

            <Form.Item label="Messages" name="message">
              <Row justify="space-between" align="middle">
                <Col span={18}>
                  <Input
                    defaultValue={requestData?.message}
                    placeholder="Send unlimited message and check online"
                  />
                </Col>
                <Col span={4} style={{ marginRight: "20px" }}>
                  <Form.Item name="unlimitedMessages" valuePropName="checked" style={{ marginBottom: 0 }}>
                    <Checkbox checked={requestData?.isMessageNoLimit} style={{ color: '#E91E63' }}>Unlimited</Checkbox>
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

export default EditDefaultSubscription;

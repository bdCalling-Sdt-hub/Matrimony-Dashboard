import { useState } from 'react';
import { Modal, Card, Form, Input, Checkbox, Button, Row, Col } from 'antd';
import Swal from 'sweetalert2';
import baseAxios from '../../../../Config';

const EditSubscription = ({ modalVisible, handleCancel, setModalVisible, requestData, setReload }) => {
  const token = localStorage.getItem("token");
  const [unlimitedMessages, setUnlimitedMessages] = useState(requestData?.isMessageNoLimit);
  const [unlimitedReminder, setUnlimitedReminder] = useState(requestData?.isRemindersNoLimit);
  const [unlimitedMatchRequest, setUnlimitedMatchRequest] = useState(requestData?.isMatchRequestsNoLimit);

  const onFinish = (values) => {
    const updatedValues = {
      ...values,
      isMessageNoLimit: unlimitedMessages,
      isRemindersNoLimit: unlimitedReminder,
      isMatchRequestsNoLimit: unlimitedMatchRequest,
      reminders: values['reminder'],
      matchRequests: values['match-request'],
      message: values['message'],
      pkCountryPrice: values['pkCountryPrice'],
      otherCountryPrice: values['otherCountryPrice'],
      duration: values['duration']
    };

    console.log(updatedValues);

    if (requestData) {
      baseAxios.put(`/subscription?subscriptionId=${requestData.id}`, updatedValues, {
        headers: {
          authorization: `Bearer ${token}`,
        }
      })
        .then((res) => {
          Swal.fire({
            icon: 'success',
            title: 'Subscription updated successfully',
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
              name: requestData?.name,
              pkCountryPrice: requestData?.pkCountryPrice,
              otherCountryPrice: requestData?.otherCountryPrice,
              duration: requestData?.duration,
              message: requestData?.message,
              reminders: requestData?.reminders,
              matchRequests: requestData?.matchRequests,
              isMessageNoLimit: requestData?.isMessageNoLimit,
              isRemindersNoLimit: requestData?.isRemindersNoLimit,
              isMatchRequestsNoLimit: requestData?.isMatchRequestsNoLimit,
              status: true
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
            <Row gutter={18}>
              <Col span={12}>
                <Form.Item
                  label="Price for Pakistan"
                  name="pkCountryPrice"
                >
                  <Input placeholder="Type full name here" type='number' defaultValue={requestData?.pkCountryPrice} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Price for other countries"
                  name="otherCountryPrice"
                >
                  <Input placeholder="Enter amount here" type="number" defaultValue={requestData?.otherCountryPrice} />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label="Plan Types" name="duration">
              <Input defaultValue={requestData?.duration} placeholder="Ex. 3 months" />
            </Form.Item>

            {/* Messages */}
            <Form.Item label="Messages" name="message">
              <Row justify="space-between" align="middle">
                <Col span={18}>
                  <Input
                    defaultValue={requestData?.message}
                    placeholder="Send unlimited message and check online"
                    disabled={unlimitedMessages}
                  />
                </Col>
                <Col span={4} style={{ marginRight: "20px" }}>
                  <Checkbox
                    checked={unlimitedMessages}
                    style={{ color: '#E91E63' }}
                    onChange={(e) => setUnlimitedMessages(e.target.checked)}
                  >
                    Unlimited
                  </Checkbox>
                </Col>
              </Row>
            </Form.Item>

            {/* Reminder */}
            <Form.Item label="Reminder" name="reminder">
              <Row justify="space-between" align="middle">
                <Col span={18} >
                  <Input
                    defaultValue={requestData?.reminders}
                    placeholder="Send unlimited reminder and check online"
                    disabled={unlimitedReminder}
                  />
                </Col>
                <Col span={4} style={{ marginRight: "20px" }}>
                  <Checkbox
                    checked={unlimitedReminder}
                    style={{ color: '#E91E63' }}
                    onChange={(e) => setUnlimitedReminder(e.target.checked)}
                  >
                    Unlimited
                  </Checkbox>
                </Col>
              </Row>
            </Form.Item>

            {/* Match Request */}
            <Form.Item label="Match Request" name="match-request">
              <Row justify="space-between" align="middle">
                <Col span={18}>
                  <Input
                    defaultValue={requestData?.matchRequests}
                    placeholder="Send unlimited match request and check online"
                    disabled={unlimitedMatchRequest}
                  />
                </Col>
                <Col span={4} style={{ marginRight: "20px" }}>
                  <Checkbox
                    checked={unlimitedMatchRequest}
                    style={{ color: '#E91E63' }}
                    onChange={(e) => setUnlimitedMatchRequest(e.target.checked)}
                  >
                    Unlimited
                  </Checkbox>
                </Col>
              </Row>
            </Form.Item>

            {/* Submit button */}
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

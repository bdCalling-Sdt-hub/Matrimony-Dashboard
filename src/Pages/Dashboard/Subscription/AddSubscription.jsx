import { useState } from 'react';
import { Modal, Card, Form, Input, Radio, Checkbox, Button, Row, Col, Switch } from 'antd';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaCrown } from 'react-icons/fa';
import baseAxios from '../../../../Config';
import Swal from 'sweetalert2';

const AddSubscription = ({ modalVisible, handleCancel, setModalVisible, setReload }) => {
  const [isMessageUnlimited, setMessageUnlimited] = useState(false);
  const [isReminderUnlimited, setReminderUnlimited] = useState(false);
  const [isMatchRequestUnlimited, setMatchRequestUnlimited] = useState(false);
  const [message, setMessage] = useState(0);
  const [reminders, setReminders] = useState(0);
  const [matchRequest, setMatchRequest] = useState(0);
  const [name, setName] = useState('');
  const [pkCountryPrice, setPkCountryPrice] = useState(0);
  const [otherCountryPrice, setOtherCountryPrice] = useState(0);
  const [duration, setDuration] = useState(0);

  const onFinish = (values) => {
    console.log('Received values:', values);
    setModalVisible(false);
    baseAxios.post('/subscription', {
      name: name,
      pkCountryPrice: pkCountryPrice,
      otherCountryPrice: otherCountryPrice,
      duration: duration,
      message: message,
      reminders: reminders,
      matchRequests: matchRequest,
      isMatchRequestsNoLimit: isMatchRequestUnlimited,
      isRemindersNoLimit: isReminderUnlimited,
      isMessageNoLimit: isMessageUnlimited,
    }, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        console.log(res);
        setReload(reload => reload + 1);
        Swal.fire({
          icon: 'success',
          title: 'Subscription added successfully',
        });
        window.location.reload();
        modalVisible(false);
      })
      .catch((err) => console.log(err));


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
              <Input placeholder="Type full name here" onChange={(e) => setName(e.target.value)} />
            </Form.Item>
            <Row gutter={18}>
              <Col span={12}>
                <Form.Item
                  label="Price for Pakistan"
                  name="pkCountryPrice"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter a Plan Amount for Pakistan!',
                    },
                  ]}
                >
                  <Input placeholder="Type full name here" type='number' onChange={(e) => setPkCountryPrice(e.target.value)} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Price for other countries"
                  name="otherCountryPrice"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter a Plan for other countries!',
                    },
                  ]}
                >
                  <Input placeholder="Enter amount here" type="number" onChange={(e) => setOtherCountryPrice(e.target.value)} />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label="Plan Types" name="duration">
              <Input placeholder="Ex. 3 months" type='number' onChange={(e) => setDuration(e.target.value)} />
            </Form.Item>

            <Form.Item label="Messages" name="message">
              <Row justify="space-between" align="middle">
                <Col span={18}>
                  <Input
                    placeholder="Enter number of messages limit"
                    prefix={<AiOutlineCheckCircle style={{ color: '#000000' }} />}
                    disabled={isMessageUnlimited}
                    type='number'
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Col>
                <Col span={4} style={{ marginRight: "20px" }}>
                  <Form.Item name="isMessageNoLimit" valuePropName="true" style={{ marginBottom: 0 }}>
                    <Checkbox style={{ color: '#E91E63' }} onChange={(e) => setMessageUnlimited(e.target.checked)}>Unlimited</Checkbox>
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item label="Reminder" name="reminders">
              <Row justify="space-between" align="middle">
                <Col span={18} >
                  <Input
                    placeholder="Send unlimited reminder and check online"
                    prefix={<AiOutlineCheckCircle style={{ color: '#000000' }} />}
                    disabled={isReminderUnlimited}
                    type='number'
                    onChange={(e) => setReminders(e.target.value)}
                  />
                </Col>
                <Col span={4} style={{ marginRight: "20px" }}>
                  <Form.Item name="isRemindersNoLimit" valuePropName="true" style={{ marginBottom: 0 }}>
                    <Checkbox style={{ color: '#E91E63', }} onChange={(e) => setReminderUnlimited(e.target.checked)}>Unlimited</Checkbox>
                  </Form.Item>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item label="Match Request" name="matchRequests">
              <Row justify="space-between" align="middle">
                <Col span={18}>
                  <Input
                    placeholder="Send unlimited match request and check online"
                    prefix={<FaCrown style={{ color: '#FFC60B' }} />}
                    disabled={isMatchRequestUnlimited}
                    type='number'
                    onChange={(e) => setMatchRequest(e.target.value)}
                  />
                </Col>
                <Col span={4} style={{ marginRight: "20px" }}>
                  <Form.Item name="isMatchRequestsNoLimit" valuePropName="true" style={{ marginBottom: 0 }}>
                    <Checkbox style={{ color: '#E91E63' }} onChange={(e) => setMatchRequestUnlimited(e.target.checked)}>Unlimited</Checkbox>
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

export default AddSubscription;

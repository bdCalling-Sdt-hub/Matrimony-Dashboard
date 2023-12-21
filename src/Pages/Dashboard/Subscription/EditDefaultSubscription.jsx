import { useEffect, useState } from 'react';
import { Modal, Card, Form, Input, Checkbox, Button, Row, Col } from 'antd';
import Swal from 'sweetalert2';
import baseAxios from '../../../../Config';
import { FaCrown } from 'react-icons/fa';

const EditDefaultSubscription = ({ modalVisible, handleCancel, setModalVisible, requestData, setReload }) => {
  const token = localStorage.getItem("token");
  const [formData, setFormData] = useState({
    name: requestData?.name,
    duration: requestData?.duration,
    message: requestData?.message,
    reminders: requestData?.reminders,
    matchRequests: requestData?.matchRequests,
    isMessageNoLimit: requestData?.isMessageNoLimit,
    isRemindersNoLimit: requestData?.isRemindersNoLimit,
    isMatchRequestsNoLimit: requestData?.isMatchRequestsNoLimit,
    active: requestData?.active,
    allowFor: requestData?.allowFor
  });

  const handleCheckboxChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.checked });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      isMessageNoLimit: requestData?.isMessageNoLimit,
      isRemindersNoLimit: requestData?.isRemindersNoLimit,
      isMatchRequestsNoLimit: requestData?.isMatchRequestsNoLimit,
    });
  }, [requestData]);

  const onFinish = (values) => {
    if (requestData) {
      baseAxios.post(`/subscription/default`, formData, {
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
            initialValues={formData}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            layout="vertical"
          >
            <Form.Item
              label="Plan Name"
              name="name"
            >
              <Input defaultValue={requestData?.name} placeholder="Type full name here" onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
            </Form.Item>

            <Form.Item label="Plan Types" name="duration">
              <Input defaultValue={requestData?.duration} placeholder="Ex. 3 months" onChange={(e) => setFormData({ ...formData, duration: e.target.value })}/>
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
                    value={formData.message}
                    placeholder="Send unlimited message and check online"
                    disabled={formData.isMessageNoLimit}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </Col>
                <Col span={4} style={{ marginRight: "20px" }}>
                  <Checkbox
                    checked={formData.isMessageNoLimit}
                    style={{ color: '#E91E63' }}
                    onChange={handleCheckboxChange('isMessageNoLimit')}
                  >
                    Unlimited
                  </Checkbox>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item label="Reminder" name="reminder">
              <Row justify="space-between" align="middle">
                <Col span={18}>
                  <Input
                    value={formData.reminders}
                    placeholder="Send unlimited reminder and check online"
                    disabled={formData.isRemindersNoLimit}
                    onChange={(e) => setFormData({ ...formData, reminders: e.target.value })}
                  />
                </Col>
                <Col span={4} style={{ marginRight: "20px" }}>
                  <Checkbox
                    checked={formData.isRemindersNoLimit}
                    style={{ color: '#E91E63' }}
                    onChange={handleCheckboxChange('isRemindersNoLimit')}
                  >
                    Unlimited
                  </Checkbox>
                </Col>
              </Row>
            </Form.Item>

            <Form.Item label="Match Request" name="match-request">
              <Row justify="space-between" align="middle">
                <Col span={18}>
                  <Input
                    value={formData.matchRequests}
                    placeholder="Send unlimited match request and check online"
                    disabled={formData.isMatchRequestsNoLimit}
                    onChange={(e) => setFormData({ ...formData, matchRequests: e.target.value })}
                  />
                </Col>
                <Col span={4} style={{ marginRight: "20px" }}>
                  <Checkbox
                    checked={formData.isMatchRequestsNoLimit}
                    style={{ color: '#E91E63' }}
                    onChange={handleCheckboxChange('isMatchRequestsNoLimit')}
                  >
                    Unlimited
                  </Checkbox>
                </Col>
              </Row>
            </Form.Item>
            <Form.Item label="Maximum Allowed Users" name="allowFor">
              <Row justify="space-between" align="middle">
                  <Input
                    placeholder="Enter maximum number of users"
                    prefix={<FaCrown style={{ color: '#FFC60B' }} />}
                    type='number'
                    onChange={(e) => setFormData({ ...formData, allowFor: e.target.value })}
                  />
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

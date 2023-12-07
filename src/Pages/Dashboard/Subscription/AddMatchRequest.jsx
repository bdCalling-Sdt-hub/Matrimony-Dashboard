import { useEffect, useState } from 'react';
import { Modal, Card, Form, Input, Button, Row, Col } from 'antd';
import baseAxios from '../../../../Config';
import { AdditionalMatchRequestData } from '../../../ReduxSlices/AdditionalMatchRequestSlice';

const AddMatchRequest = ({ modalVisible, handleCancel, setModalVisible, setReload }) => {
  const token = localStorage.getItem('token');

  const onFinish = (values) => {
    console.log('Received values:', values);
    baseAxios
      .post(`/additional-match-requests`, values, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setReload(reload => reload + 1);
        setModalVisible(false);
      })
      .catch((err) => {
        console.log(err);
        setModalVisible(true);
      });
  };

  return (
    <>
      <Modal
        title="Add Additional Match Request"
        visible={modalVisible}
        onCancel={handleCancel}
        footer={null}
        style={{ width: 600, height: 800 }}
      >
        <Card>
          <Form
            name="subscriptionForm"
            onFinish={onFinish}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            layout="vertical"
          >
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  label="Plan Amount"
                  name="price"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter a Plan Amount!',
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              label="Match Requests"
              name="matchRequests"
              rules={[
                {
                  required: true,
                  message: 'Please enter Match Requests!',
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item style={{ textAlign: "center" }}>
              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Modal>
    </>
  );
};

export default AddMatchRequest;

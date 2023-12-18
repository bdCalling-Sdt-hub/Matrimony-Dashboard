import { useEffect, useState } from 'react';
import { Modal, Card, Form, Input, Button, Row, Col } from 'antd';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import baseAxios from '../../../../Config';
import { useDispatch } from 'react-redux';
import { AdditionalMatchRequestData } from '../../../ReduxSlices/AdditionalMatchRequestSlice';

const EditMatchRequest = ({ modalVisible, handleCancel, setModalVisible, requestData, setReload }) => {
  const token = localStorage.getItem("token");

  const onFinish = (values) => {
    console.log('Received values:', values);
    if (requestData) {
      baseAxios.patch(`/additional-match-requests?id=${requestData.id}`, values, {
        headers: {
          authorization: `Bearer ${token}`,
        }
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
    }
  };

  return (
    <Modal
      title="Edit Additional Match Request"
      visible={modalVisible}
      onCancel={handleCancel}
      footer={null}
      style={{ width: 600, height: 800 }}
    >
      {requestData ? (
        <Card>
          <Form
            name="subscriptionForm"
            onFinish={onFinish}
            initialValues={{
              otherCountryPrice: requestData.otherCountryPrice,
              matchRequests: requestData.matchRequests,
              pkCountryPrice: requestData.pkCountryPrice,
            }}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            layout="vertical"
          >
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  label="Price for Pakistan"
                  name="pkCountryPrice"
                  rules={[
                    {
                      message: 'Please enter amount for Pakistan',
                    },
                  ]}
                >
                  <Input type="number" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  label="Price for Other Countries"
                  name="otherCountryPrice"
                  rules={[
                    {
                      message: 'Please enter amount for other countries',
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
                  message: 'Please enter Match Requests!',
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>

            <Form.Item style={{ textAlign: "center" }}>
              <Button type="primary" htmlType="submit">
                Edit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      ) : (
        <div>No data found...</div>
      )}
    </Modal>
  );
};

export default EditMatchRequest;

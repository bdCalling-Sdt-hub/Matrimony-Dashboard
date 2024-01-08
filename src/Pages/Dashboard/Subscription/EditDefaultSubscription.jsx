import { useEffect, useState } from "react";
import { Modal, Card, Form, Input, Checkbox, Button, Row, Col } from "antd";
import Swal from "sweetalert2";
import baseAxios from "../../../../Config";
import { FaCrown } from "react-icons/fa";

const EditDefaultSubscription = ({
  modalVisible,
  handleCancel,
  setModalVisible,
  requestData,
  setReload,
}) => {
  const token = localStorage.getItem("token");
  const [active, setActive] = useState(requestData?.active);
  const [allowFor, setAllowFor] = useState(requestData?.allowFor);
  const [duration, setDuration] = useState(requestData?.duration);
  const [message, setMessage] = useState(requestData?.message);
  const [reminders, setReminders] = useState(requestData?.reminders);
  const [matchRequests, setMatchRequests] = useState(
    requestData?.matchRequests
  );
  const [name, setName] = useState(requestData?.name);
  const [isMessageNoLimit, setIsMessageNoLimit] = useState(
    requestData?.isMessageNoLimit
  );
  const [isRemindersNoLimit, setIsRemindersNoLimit] = useState(
    requestData?.isRemindersNoLimit
  );
  const [isMatchRequestsNoLimit, setIsMatchRequestsNoLimit] = useState(
    requestData?.isMatchRequestsNoLimit
  );

  useEffect(() => {
    if (requestData) {
      setActive(requestData?.active);
      setAllowFor(requestData?.allowFor);
      setDuration(requestData?.duration);
      setMessage(requestData?.message);
      setReminders(requestData?.reminders);
      setMatchRequests(requestData?.matchRequests);
      setName(requestData?.name);
      setIsMessageNoLimit(requestData?.isMessageNoLimit);
      setIsRemindersNoLimit(requestData?.isRemindersNoLimit);
      setIsMatchRequestsNoLimit(requestData?.isMatchRequestsNoLimit);
    }
  }, [requestData]);

  const onFinish = (values) => {
    let data = {
      name,
      duration,
      message,
      reminders,
      matchRequests,
      isMessageNoLimit,
      isRemindersNoLimit,
      isMatchRequestsNoLimit,
      active,
      allowFor,
    };

    console.log(data);

    if (requestData) {
      baseAxios.post(`/subscription/default`, data, {
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
            // initialValues={formData}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            layout="vertical"
          >
            <Form.Item label="Plan Name" name="name">
              <Input
                defaultValue={requestData?.name}
                placeholder="Type full name here"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Item>

            <Form.Item label="Plan Types" name="duration">
              <Input
                defaultValue={requestData?.duration}
                placeholder="Ex. 3 months"
                onChange={(e) => setDuration(e.target.value)}
              />
            </Form.Item>

            <Form.Item name="active" valuePropName="checked">
              <Checkbox
                onChange={() => setActive(!active)}
                defaultChecked={requestData?.active}
                style={{ color: "#E91E63" }}
              >
                Active
              </Checkbox>
            </Form.Item>

            <Form.Item label="Messages" name="message">
              <Row justify="space-between" align="middle">
                <Col span={18}>
                  <Input
                    defaultValue={requestData?.message}
                    value={message}
                    placeholder="Send unlimited message and check online"
                    disabled={isMessageNoLimit}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Col>
                <Col span={4} style={{ marginRight: "20px" }}>
                  <Checkbox
                    defaultChecked={requestData?.isMessageNoLimit}
                    style={{ color: "#E91E63" }}
                    onChange={(e) => setIsMessageNoLimit(!isMessageNoLimit)}
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
                    defaultValue={requestData?.reminders}
                    placeholder="Send unlimited reminder and check online"
                    disabled={isRemindersNoLimit}
                    onChange={(e) => setReminders(e.target.value)}
                  />
                </Col>
                <Col span={4} style={{ marginRight: "20px" }}>
                  <Checkbox
                    defaultChecked={requestData?.isRemindersNoLimit}
                    style={{ color: "#E91E63" }}
                    onChange={(e) => setIsRemindersNoLimit(!isRemindersNoLimit)}
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
                    defaultValue={requestData?.matchRequests}
                    placeholder="Send unlimited match request and check online"
                    disabled={isMatchRequestsNoLimit}
                    onChange={(e) => setMatchRequests(e.target.value)}
                  />
                </Col>
                <Col span={4} style={{ marginRight: "20px" }}>
                  <Checkbox
                    defaultChecked={requestData?.isMatchRequestsNoLimit}
                    style={{ color: "#E91E63" }}
                    onChange={() =>
                      setIsMatchRequestsNoLimit(!isMatchRequestsNoLimit)
                    }
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
                  defaultValue={requestData?.allowFor}
                  prefix={<FaCrown style={{ color: "#FFC60B" }} />}
                  type="number"
                  onChange={(e) => setAllowFor(e.target.value)}
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
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  background: "#E91E63",
                  color: "#ffffff",
                  borderRadius: "20px",
                  width: "140px",
                }}
              >
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

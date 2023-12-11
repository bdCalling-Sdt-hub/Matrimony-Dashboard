import { useEffect, useState } from 'react';
import { Modal, Card, Form, Input, Radio, Checkbox, Button, Row, Col, Switch, DatePicker } from 'antd';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { FaCrown } from 'react-icons/fa';
import TextArea from 'antd/es/input/TextArea';
import moment from 'moment';
import baseAxios from '../../../../Config';
import Swal from 'sweetalert2';

const ReportDetails = ({ modalVisible, handleCancel, setModalVisible, data }) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState(data.selectedDate || null);
    const [proceedClicked, setProceedClicked] = useState(false);

    const onFinish = () => {
        console.log(data.profileId, localStorage.getItem('token'));
        baseAxios.post('users/suspend', {
            profileId: data.profileId.id,
        }, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } })

            .then((res) => {
                console.log(res);
                Swal.fire({
                    icon: "success",
                    title: "User suspended successfully",
                });
                setModalVisible(true);
                setSelectedDate(null); // Deselect the date when closing modal
            })
            .catch((err) => {
                console.log(err);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: err.response.data.message,
                });
                setSelectedDate(null);
            });


    };

    const handlePostponeClick = () => {
        setShowDatePicker(true);
        setSelectedDate(null);
        setProceedClicked(false); // Reset proceedClicked state
    };

    const handleDateChange = (date, dateString) => {
        setSelectedDate(dateString);
        setShowDatePicker(false);
        setProceedClicked(false); // Reset proceedClicked state
    };

    const handleProceedClick = () => {
        setProceedClicked(true);
        setSelectedDate(null); // Deselect the date when proceeding
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
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        layout="vertical"
                    >
                        <Row gutter={16}>
                            <Col span={24}>
                                <p style={{ fontSize: '16px', fontWeight: '600', color: '#222' }}>
                                    Report Profile Reason
                                </p>
                                <Radio style={{ marginTop: '10px' }} defaultChecked>
                                    {data.reportType}
                                </Radio>
                            </Col>
                        </Row>

                        <p
                            style={{
                                marginTop: '60px',
                                fontSize: '20px',
                                fontWeight: '500',
                                marginBottom: '10px',
                            }}
                        >
                            Report summary
                        </p>
                        <TextArea rows={4} value={data.reportDescription} maxLength={6} disabled />

                        <Form.Item style={{ textAlign: 'center', marginTop: '30px' }}>
                            {!selectedDate && !proceedClicked && (
                                <>
                                    <Button
                                        type="primary"
                                        style={{
                                            background: '#E91E63',
                                            color: '#ffffff',
                                            borderRadius: '5px',
                                            width: '140px',
                                        }}
                                        onClick={handlePostponeClick}
                                    >
                                        Postponed
                                    </Button>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        style={{
                                            background: '#E91E63',
                                            color: '#ffffff',
                                            borderRadius: '5px',
                                            width: '140px',
                                            marginLeft: '10px',
                                        }}
                                        onClick={onFinish}
                                    >
                                        Suspend
                                    </Button>
                                </>
                            )}
                            {selectedDate && !proceedClicked && (
                                <Button
                                    type="primary"
                                    style={{
                                        background: '#E91E63',
                                        color: '#ffffff',
                                        borderRadius: '5px',
                                        width: '140px',
                                    }}
                                    onClick={handleProceedClick}
                                >
                                    Proceed
                                </Button>
                            )}
                        </Form.Item>
                        {showDatePicker && (
                            <DatePicker
                                style={{ position: 'absolute', top: '20px', right: '30px' }}
                                format="YYYY-MM-DD"
                                value={selectedDate ? moment(selectedDate, 'YYYY-MM-DD') : null}
                                onChange={handleDateChange}
                                disabledDate={(current) => current && current < moment().endOf('day')}
                            />
                        )}
                        {selectedDate && (
                            <div style={{ position: 'absolute', top: '20px', right: '30px' }}>
                                <p>Selected Date:</p>
                                <p>{selectedDate}</p>
                            </div>
                        )}
                    </Form>
                </Card>
            </Modal>
        </>
    );
};

export default ReportDetails;



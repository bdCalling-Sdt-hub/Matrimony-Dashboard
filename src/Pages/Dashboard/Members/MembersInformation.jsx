import { Col, Row, Tabs } from "antd";
import React from "react";
import "./MembersInformation";
import MembersInformationTable from "./MembersInformationTable";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserInformationData } from "../../../ReduxSlices/UserInformationSlice";

// const onChange = (key) => {
//   // console.log(key);
// };


function MembersInformation() {
  const dispatch = useDispatch();

  const items = [
    {
      key: '1',
      label: 'All User List',
    },
    {
      key: '2',
      label: 'Male',
    },
    {
      key: '3',
      label: 'Female',
    },
    {
      key: '4',
      label: 'Others'
    },
  ];

  const [activeKey, setActiveKey] = useState('1');
  console.log(activeKey)
  let page = 1;
  const handleTabChange = (key) => {
    setActiveKey(key);
    let gender = "";
    if (key === '2') {
      gender = "Male";
    } else if (key === '3') {
      gender = "Female";
    } else if (key === '4') {
      gender = "Others";
    }
    const data = {
      gender: gender,
      page: page,
    }
    dispatch(UserInformationData(data));

    // You can perform other actions here based on the tab change if needed
  };

  return (
    <div style={{}}>
      <Row>
        <Col lg={{ span: 24 }}>
          <Tabs
            className="tabcolor"
            defaultActiveKey={activeKey}
            items={items}
            type="card"

            onChange={handleTabChange}
          />
        </Col>
        <Col lg={{ span: 24 }}>
          <MembersInformationTable activeKey={activeKey} />
        </Col>
      </Row>
    </div>
  );
}

export default MembersInformation;

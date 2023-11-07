import React from 'react';
import { Space, Table, Tag } from 'antd';
import { AiOutlineDownload } from 'react-icons/ai';

const columns = [
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        {/* <a>Invite {record.name}</a>
        <a>Delete</a> */}
        <div style={{ height: "44px", width: "44px", border: "1px solid #7A7A7A", borderRadius: "6px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <AiOutlineDownload fontSize={24} color='#2BA24C'></AiOutlineDownload>
        </div>
      </Space>
    ),
  },
  {
    title: 'Method',
    dataIndex: 'method',
    key: 'method',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },

];
const data = [
  {
    key: '1',
    method: 'credit',
    date: "06:24:45 AM",
    amount: '$5,553',
  },
  {
    key: '2',
    method: 'credit',
    date: "06:24:45 AM",
    amount: '$5,553',
  },
  {
    key: '3',
    method: 'credit',
    date: "06:24:45 AM",
    amount: '$5,553',
  },
  {
    key: '4',
    method: 'credit',
    date: "06:24:45 AM",
    amount: '$5,553',
  },
  {
    key: '5',
    method: 'credit',
    date: "06:24:45 AM",
    amount: '$5,553',
  },
  {
    key: '6',
    method: 'credit',
    date: "06:24:45 AM",
    amount: '$5,553',
  },

];
const WalletTable = () => <Table columns={columns} dataSource={data} pagination={false} />;
export default WalletTable;
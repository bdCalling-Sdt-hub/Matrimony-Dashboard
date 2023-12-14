import React, { useEffect } from 'react';
import { Space, Table, Tag } from 'antd';
import { AiOutlineDownload } from 'react-icons/ai';
import baseAxios from '../../../../Config';
import moment from 'moment';

const columns = [
  {
    title: '',
    key: '',
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
    dataIndex: 'paymentMethod',
    key: 'paymentMethod',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Date',
    dataIndex: 'createdAt',
    key: 'createdAt',
    // render: (text) => <span>{moment(text).format('YYYY-MM-DD HH:mm:ss')}</span>,
    render: (text) => <span>{moment(text).format('hh:mm:ss A')}</span>,
  },
  {
    title: 'Amount',
    dataIndex: ['paymentData', 'price'],
    key: 'price',
  },

];

//const WalletTable = () => <Table columns={columns} dataSource={data} pagination={false} />;
const WalletTable = ({ date }) => {
  const { fromDate, toDate } = date;
  const [paymentData, setPaymentData] = React.useState([]);

  useEffect(() => {
    baseAxios.get(`/payment?fromDate=${!fromDate?"":fromDate}&toDate=${!toDate?"":toDate}`, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        console.log(res.data.data.attributes);
        setPaymentData(res.data.data.attributes);
      })
      .catch((err) => console.log(err));

  }, [fromDate, toDate]);
  return <Table columns={columns} dataSource={paymentData} pagination={false} />
}
export default WalletTable;
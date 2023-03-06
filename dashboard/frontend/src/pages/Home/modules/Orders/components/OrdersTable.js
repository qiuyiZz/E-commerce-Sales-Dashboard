import {Image, Table} from "antd";
import {useDispatch} from "react-redux";
import {sendOrder} from "../store";

const tableColumns = [
  {
    title: 'Customer Name',
    dataIndex: 'customer_name',
    key: 'customer_name'
  },
  {
    title: 'Customer Phone',
    dataIndex: 'customer_phone',
    key: 'customer_phone'
  },
  {
    title: 'Customer Address',
    dataIndex: 'customer_address',
    key: 'customer_address'
  },
  {
    title: 'Stock name',
    dataIndex: 'stock',
    key: 'stock_name',
    render: (_, record) => {
      return (
        <div>
          <span className={'me-3'}>{record.stock.name}</span>
          <Image src={record.stock.image} width={150}/>
        </div>
      )
    }
  },

  {
    title: 'Price',
    dataIndex: 'stock_price',
    key: 'stock_price',
    render: (val) => {
      return '$' + val
    }
  },
  {
    title: 'Purchase quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Total',
    key: 'total',
    render: (_, record) => {
      return '$' + record.quantity * record.stock_price
    }
  }
]

export const OrdersTable = ({orders = []}) => {
  const dispatch = useDispatch();
  const columns = [
    ...tableColumns,
    {
      title: 'Status',
      key: 'status',
      render: (_, record) => {
        return (
          <div>
            {!record.sent && <button
              onClick={() => {
                dispatch(sendOrder(record._id))
              }}
              className={'btn btn-success'}>Send</button>}
            {record.sent && <button disabled className={'btn btn-secondary'}>Have sent</button>}
          </div>
        )
      }
    }
  ]
  return (
    <Table columns={columns} dataSource={orders}/>
  )
}

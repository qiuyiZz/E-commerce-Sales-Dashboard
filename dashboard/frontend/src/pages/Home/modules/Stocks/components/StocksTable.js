import {Image, Space, Table, Modal} from "antd";
import {useDispatch} from "react-redux";
import {removeStock, SET_EDITING_STOCK} from "../store";

const tableColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (val) => {
      return '$' + val
    }
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity'
  },
  {
    title: "Image",
    dataIndex: 'image',
    key: 'image',
    render: (val) => {
      return <Image width={200} src={val}/>
    }
  },
]

export const StocksTable = ({stocks = []}) => {
  const dispatch = useDispatch();
  const handleDelete = (stock_id) => {
    Modal.confirm({
      title: "Do you want remove this stock?",
      onOk: () => {
        dispatch(removeStock(stock_id));
      }
    })
  }
  const columns = [
    ...tableColumns,
    {
      title: 'Actions',
      key: 'action',
      render: (_, record) => {
        return (
          <Space>
            <button
              onClick={() => {
                dispatch(SET_EDITING_STOCK(record))
              }}
              className={'btn btn-info text-white'}>Edit</button>
            <button
              onClick={() => {
                handleDelete(record._id)
              }}
              className={'btn btn-danger'}>Remove</button>
          </Space>
        )
      }
    }
  ];

  return (
    <div>
      <Table columns={columns} dataSource={stocks}/>
    </div>
  )
}

import {useEffect, useState} from "react";
import {Drawer, Form, Input, InputNumber, notification, DatePicker} from 'antd';
export const Customer = () => {
  const [stocks, setStocks] = useState([]);
  const [stock, setStock] = useState(null);
  useEffect(() => {
    fetch(`/api/users/lookup`)
      .then(res => res.json())
      .then(setStocks)
  }, []);
  const handleSubmit = async (values) => {
    values.date = values.date.toDate();
    await fetch(`/api/orders`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        ...values,
        stock_id: stock?._id,
        stock_price: stock?.price
      })
    })
    notification.success({
      message: "Buy success"
    })
  }
  return (
    <div>
      <Drawer
        placement={'left'}
        open={stock} onClose={() => setStock(null)}>
        <Form onFinish={handleSubmit}>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Not null'
              }
            ]}
            name={'customer_name'}
            label={'Your name'}>
            <Input />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Not null'
              }
            ]}
            name={'customer_phone'}
            label={'Your phone'}>
            <Input />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Not null'
              }
            ]}
            name={'customer_address'}
            label={'Your address'}>
            <Input />
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Not null'
              }
            ]}
            name={'quantity'}
            label={'Buy quantity'}>
            <InputNumber min={1} max={stock?.quantity}/>
          </Form.Item>
          <Form.Item
            rules={[
              {
                required: true,
                message: 'Not null'
              }
            ]}
            name={'date'}
            label={'date'}>
            <DatePicker />
          </Form.Item>
          <Form.Item>
            <button className={'btn btn-primary'}>Buy</button>
          </Form.Item>
        </Form>
      </Drawer>
      <div className={'d-flex overflow-auto'}>
        {stocks.map(stock => {
          return (
            <div style={{width: '18rem'}} key={stock._id} className={'card me-2 mt-2'}>
              <img style={{height: '300px'}} src={stock.image} className={'card-img-top'}/>
              <div className={'card-body'}>
                <h5>{stock.name}</h5>
                <button onClick={() => setStock(stock)} className={'btn btn-primary'}>Buy</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

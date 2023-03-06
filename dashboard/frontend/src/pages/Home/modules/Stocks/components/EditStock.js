import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Drawer, Button, Form, Input, InputNumber} from 'antd';
import {SET_EDITING_STOCK, updateStock} from "../store";
export const EditStock = () => {
  const [open, setOpen] = useState(false);
  const stock = useSelector(state => state.stocks.editingStock);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    dispatch(updateStock(stock._id, values));
  }
  useEffect(() => {
    if (stock) {
      setOpen(true);
      form.setFieldsValue(stock)
    } else {
      form.resetFields();
      setOpen(false);
    }
  }, [stock]);
  return (
    <>
      <Drawer
        placement="left"
        onClose={() => {
          dispatch(SET_EDITING_STOCK(null));
        }}
        title={'Edit stock'}
        open={open}>
        <Form onFinish={handleSubmit} layout={'vertical'} form={form}>
          <Form.Item
            name={'name'}
            rules={[
              {
                required: true,
                message: 'Please enter stock name'
              }
            ]}
            label={'Stock name'}>
            <Input />
          </Form.Item>
          <Form.Item
            name={'price'}
            rules={[
              {
                required: true,
                message: 'Please enter stock price'
              }
            ]}
            label={'Price'}>
            <InputNumber min={1}/>
          </Form.Item>
          <Form.Item
            name={'quantity'}
            rules={[
              {
                required: true,
                message: 'Please enter stock quantity'
              }
            ]}
            label={'Quantity'}>
            <InputNumber min={1}/>
          </Form.Item>
          <Form.Item
            name={'image'}
            rules={[
              {
                required: true,
                message: 'Please enter stock image'
              }
            ]}
            label={'Image'}>
            <Input placeholder={'Enter image url'}/>
          </Form.Item>
          <Form.Item>
            <Button type={'primary'} htmlType={'submit'}>
              Update
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  )
}

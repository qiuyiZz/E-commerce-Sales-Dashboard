import {useState} from "react";
import {Button, Drawer, Form, Input, InputNumber} from 'antd';
import {useDispatch} from "react-redux";
import {createStock} from "../store";
export const AddStock = () => {
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    dispatch(createStock(values))
  }
  return (
    <>
      <Drawer
        title={'Add stock'}
        placement="left"
        onClose={() => setOpen(false)}
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
            <Button type={'primary'} htmlType={'submit'}>Create</Button>
          </Form.Item>
        </Form>
      </Drawer>
      <button
        onClick={() => {
          setOpen(true);
          form.resetFields();
        }}
        className={'btn btn-primary'}>Add New
        <i className="bi bi-plus"></i></button>
    </>
  )
}
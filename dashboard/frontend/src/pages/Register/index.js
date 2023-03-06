import {Button, Form, Input} from "antd";
import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {AuthConsumer as useAuth} from "../../auth";
import {authedRequest} from "../../http";
import {message} from "antd";

export const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const {login} = useAuth();
  const onFinish = async (values) => {
    await authedRequest.post(`/api/users/register`, values);
    message.success("Register successfully! Please login");
    navigate('/login');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={'container mt-5 d-flex flex-column align-items-center'}>
      <h3 className={'mt-5'}>Register</h3>
      <Form
        form={form}
        className={'w-50'}
        name="basic"
        layout={'vertical'}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <p className={'text-end'}>
          Already have account? <Link to={'/login'}>Login!</Link>
        </p>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!'},]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!'},
            {
              type: 'email',
              message: 'Please enter a correct email!'
            }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"

          rules={[
            { required: true, message: 'Please input your password again!' },
            {
              validator: (rule, value, callback) => {
                const password = form.getFieldValue('password');
                if (password !== value) {
                  return Promise.reject();
                }
                return Promise.resolve();
              },
              message: "Two passwords are not same!"
            }
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

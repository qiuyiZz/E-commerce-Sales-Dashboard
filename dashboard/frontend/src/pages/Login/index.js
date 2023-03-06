import React, {useEffect} from 'react';
import {Button, Checkbox, Form, Input, message} from 'antd';
import {Link, useLocation, useNavigate} from "react-router-dom";
import {authedRequest} from "../../http";
import {AuthConsumer as useAuth} from "../../auth";

export const Login = () => {
  const {login} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const redirect = location.search.split('=')[1];
    if (redirect) {
      authedRequest.get(`/api/users/check-auth`)
        .then(res => {
          if (res.status === 200) {
            login()
              .then(() => {
                navigate(redirect, {replace: true})
              })
          }
        }).catch(err => {
          console.log(err);
      })
    }
  }, []);

  const onFinish = async (values) => {
    await authedRequest.post(`/api/users/login`, values);
    message.success("Login successfully! Welcome!");
    login()
      .then(() => {
        navigate('/', {replace: true})
      })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={'container mt-5 d-flex flex-column align-items-center'}>
      <h3 className={'mt-5'}>Login</h3>
      <Form
        className={'w-50'}
        name="basic"
        layout={'vertical'}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <p className={'text-end'}>
          Not have account? <Link to={'/register'}>Register!</Link>
        </p>
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

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

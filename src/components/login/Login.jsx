"use client"
import Image from 'next/image';
import logo from '../../assets/images/logo.png'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
const Login = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };


  return (
    <div className='flex flex-col md:flex-row items-center justify-center min-h-screen'>
        {/* logo Image */}
        <div>
        <Image src={logo} alt='Logo image' width={400} height={200}/>
        </div>
{/* login form  */}
        <div className=''>
        <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button
         style={{ backgroundColor: '#475569', borderColor: '#334155', }} 
         type="primary" htmlType="submit" className="login-form-button w-full  ">
          Log in
        </Button>
      </Form.Item>
    </Form>
        </div>
    </div>
  )
}

export default Login;
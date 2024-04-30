"use client";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Modal, Form, Input, Table } from "antd";
import { useRouter } from "next/navigation";
const dataSource = [
  {
    key: "1",
    email: "ahmed@hossain.com",
    password: "ahmed1",
  },
  {
    key: "2",
    email: "ahmed.hsn.404@gmail.com",
    password: "hossain1",
  },
  {
    key: "3",
    email: "ahmed.404@gmail.com",
    password: "ahmed404",
  },
];

const columns = [
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Password",
    dataIndex: "password",
    key: "password",
  },
];

const Login = () => {
  const router = useRouter();

  const onFinish = (values) => {
    const users = [
      { email: "ahmed@hossain.com", password: "ahmed1" },
      { email: "ahmed.hsn.404@gmail.com", password: "hossain1" },
      { email: "ahmed.404@gmail.com", password: "ahmed404" },
    ];
    const foundUser = users.find(
      (user) => user.email === values.email && user.password === values.password
    );

    if (foundUser) {
      Modal.success({ content: "Login successful!" });
      router.push("/dashboard");
    } else {
      Modal.error({ content: "Invalid email or password." });
    }
  };

  return (
    <div className="flex flex-col  items-center justify-center justify-items-center my-8 px-6">
      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 lg:pr-12 md:pr-10 pr-0 shadow-lg hover:shadow-xl rounded-md border border-gray-400 mb-4 ">
        {/* logo Image */}
        <div>
          <Image src={logo} alt="Logo image" width={400} height={200} />
        </div>
        {/* login form  */}
        <div className="px-2 md:px-0">
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
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
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
                style={{ backgroundColor: "#475569", borderColor: "#334155" }}
                type="primary"
                htmlType="submit"
                className="login-form-button w-full "
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Table
        className="w-[40%]"
        bordered
        pagination={false}
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
};

export default Login;

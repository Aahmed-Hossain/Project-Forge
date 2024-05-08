import React from 'react';
import {  Modal } from "antd";
import {
    Form,
    Input,
  } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const TaskModal = ({ open, onOk, onCancel }) => {
    const [form] = Form.useForm()
    const onFinish = (values) => {
        onOk(values);
        console.log(values)
        }
  return (
    <div>
      <Modal
         title="Add Task"
         visible={open}
         onOk={() => form.submit()} 
         onCancel={onCancel}
         okText="Add"
         cancelText="Cancel"
      >
        <Form onFinish={onFinish}  form={form} {...formItemLayout} variant="filled" style={{ maxWidth: 600 }}>
    <Form.Item label="Title" name="Input" rules={[{ required: true  , message: 'Please input!' }]}>
      <Input placeholder="Task title"/>
    </Form.Item>

    <Form.Item
      label="Description"
      name="TextArea"
      rules={[{ required: true, message: 'Please input description!' }]}
    >
      <Input.TextArea placeholder="Task description" />
    </Form.Item>
  </Form>
      </Modal>
    </div>
  );
};

export default TaskModal;

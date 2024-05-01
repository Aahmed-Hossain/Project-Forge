import React from 'react'
import { Card } from 'antd';
import { EditOutlined, DeleteOutlined ,BorderTopOutlined } from '@ant-design/icons';

const ProjectPage = () => {
  return (
    <div className='m-4'>
    <Card bordered={true} hoverable={true} title="Project Forge" extra={<a href="#">More</a>} style={{ width: 300 }} actions={[
      <BorderTopOutlined key="view" />,
      <EditOutlined key="edit" />,
      <DeleteOutlined key="delete" />,
    ]}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card></div>
  )
}

export default ProjectPage
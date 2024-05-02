
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Card } from "antd";
import {EditOutlined,DeleteOutlined,ArrowsAltOutlined ,
} from "@ant-design/icons";
import { useTasksStore } from '@/zustand/useStore';

const TaskCard = ({tasks}) => {

  const {setCurrentTask, addTask,editTask,deleteTask } = useTasksStore();
  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-6'>
      {tasks?.map(task => (
        <Card
          key={task.id} 
          bordered={true}
          hoverable={true}
          title={task.title}
          style={{ width: 300 }}
          className="shadow-md"
          actions={[
            <ArrowsAltOutlined key="view" />,
            <EditOutlined key="edit" />,
            <DeleteOutlined
            onClick={() => handleDeleteTask(task.id)}
              key="delete" />,
          ]}
        >
          <p className="text-gray-600 font-semibold">{task.description}</p>
        </Card>
      ))}
    </div>
  )
}

export default TaskCard
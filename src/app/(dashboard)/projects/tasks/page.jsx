"use client"
import TaskCard from '@/components/cards/TaskCard'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { useTasksStore } from '@/zustand/useStore';
import { PlusOutlined } from '@ant-design/icons';
import TaskModal from '@/components/modals/TaskModal';
const TasksPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const { tasks } = useTasksStore();
  return (
    <div className='flex flex-col gap-3'>
       <button  onClick={showModal} className="text-gray-500 hover:text-gray-600 border py-1 px-2  hover:border-gray-400 border-gray-300 font-bold w-28 flex gap-2 rounded-md"> <span>Add Task</span> <span><PlusOutlined /></span></button>
       <TaskModal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} />
      <TaskCard tasks={tasks} />
    </div>
  )
}

export default TasksPage
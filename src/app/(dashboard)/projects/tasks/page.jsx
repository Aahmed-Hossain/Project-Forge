"use client"
import TaskCard from '@/components/cards/TaskCard'
import React from 'react'
import { useTasksStore } from '@/zustand/useStore';
const TasksPage = () => {
  const { tasks } = useTasksStore();
  return (
    <div>
      <TaskCard tasks={tasks} />
    </div>
  )
}

export default TasksPage
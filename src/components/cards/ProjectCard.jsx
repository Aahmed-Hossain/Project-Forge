import React from 'react'
import { Card } from "antd";
import {EditOutlined,DeleteOutlined,ArrowsAltOutlined ,
} from "@ant-design/icons";
import { useProjectStore } from '@/zustand/useStore';

const ProjectCard = ({projects}) => {

  const { deleteProject } = useProjectStore();
  const handleDeleteProject = (projectId) => {
    deleteProject(projectId);
  };
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-6'>
      {projects?.map(project => (
        <Card
          key={project.id} 
          bordered={true}
          hoverable={true}
          title={project.title}
          style={{ width: 300 }}
          className="shadow-md"
          actions={[
            <ArrowsAltOutlined key="view" />,
            <EditOutlined key="edit" />,
            <DeleteOutlined
            onClick={() => handleDeleteProject(project.id)}
              key="delete" />,
          ]}
        >
          <p className="text-gray-600 font-semibold">{project.description}</p>
        </Card>
      ))}
    </div>
  )
}

export default ProjectCard
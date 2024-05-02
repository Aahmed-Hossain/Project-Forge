"use client"
import React , { useEffect, useState } from 'react'
import { useProjectStore } from '@/zustand/useStore';


const ProjectDetails = ({params}) => {
  const id = params.projectId;
  const { projects } = useProjectStore();
  console.log(projects);
//   const project  = useProjectStore((state)=>{
  
//    state?.projects.filter(project=>(
//       project.id === id
//     ))
//   });
// console.log(project)

  return (
    
    <div>
      ProjectDetails
      <p>ID: </p>
    </div>
  )
}

export default ProjectDetails
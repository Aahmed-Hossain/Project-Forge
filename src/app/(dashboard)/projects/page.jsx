"use client";
import React from "react";
import useProjectsData from "@/hooks/useProjectsData";
import { Flex, Spin } from "antd";
import ProjectCard from "@/components/cards/ProjectCard";
import { useProjectStore } from '@/zustand/useStore';
const ProjectPage = () => {
  // const  getProjects = useProjectStore((state)=>state.projects);
  // console.log(getProjects)

  const { data,setProjects, isLoading, error, refetch } = useProjectsData();
  useEffect(()=> {if(data){
    setProjects(data);
  }},[])
  if (isLoading);
  return (
    <Flex justify="center" align="center" gap="middle">
      <Spin size="large" />
    </Flex>
  );
  if (error) return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="m-4">
      <ProjectCard projects={getProjects}  />
    </div>
  );
};

export default ProjectPage;

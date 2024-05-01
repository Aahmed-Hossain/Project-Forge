"use client"
import React from "react";
import useProjectsData from "@/hooks/useProjectsData";
import { Flex, Spin } from 'antd';
import ProjectCard from "@/components/cards/ProjectCard";
const ProjectPage = () => {
    const { data: projects, isLoading, error } = useProjectsData();
    if (isLoading) return <Flex justify="center"  align="center" gap="middle">
    <Spin size="large" />
  </Flex>;
  if (error) return <div className="text-red-500">Error: {error.message}</div>;
  return (
    <div className="m-4">
        <ProjectCard projects={projects}/>
     
    </div>
  );
};

export default ProjectPage;



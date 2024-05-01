"use client"
import React from "react";
import { Card } from "antd";

import useProjectsData from "@/hooks/useProjectsData";
import { Flex, Spin } from 'antd';
import ProjectCard from "@/components/cards/ProjectCard";
import { projects } from '@/data/data';
const ProjectPage = () => {
//     const {isLoading, error,data} = useProjectsData('https://raw.githubusercontent.com/Aahmed-Hossain/Project-Forge/main/public/projects.json');
//     console.log(data);
//     if (isLoading) return <Flex align="center" gap="middle">
//     <Spin size="large" />
//   </Flex>;
//   if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="m-4">
      <ProjectCard projects={projects}/>
    </div>
  );
};

export default ProjectPage;
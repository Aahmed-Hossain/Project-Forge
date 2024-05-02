"use client";
import { useQuery } from "react-query";
import React from "react";
import { Flex, Spin } from "antd";
import ProjectCard from "@/components/cards/ProjectCard";
import { useEffect } from "react";
import { useProjectStore } from '@/zustand/useStore';
const ProjectPage = () => {
  const { data, isLoading, error } = useQuery("projects", async () => {
    const response = await fetch(
      "https://raw.githubusercontent.com/Aahmed-Hossain/Project-Forge/main/public/projects.json"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
  const { projects, setProjects } = useProjectStore();

  useEffect(() => {
    if (data) {
      setProjects(data);
    }
  }, [data, setProjects]);
  if (isLoading)
    return (
      <Flex justify="center" align="center" gap="middle">
        <Spin size="large" />
      </Flex>
    );

  if (error) return <div className="text-red-500">Error: {error.message}</div>;
  return (
    <div className="m-4">
      <ProjectCard projects={projects} />
    </div>
  );
};

export default ProjectPage;
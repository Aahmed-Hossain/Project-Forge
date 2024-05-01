import React from "react";
import { Card } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  ArrowsAltOutlined,
} from "@ant-design/icons";
const projects = [
  {
    id: 1,
    title: "project Forge",
    description:
      "Develop a dashboard for a project management application that allows users to manage tasks, and projects.",
    tasks: [
      "Authentication Page",
      "Projects Overview Page",
      "Project Details Page",
    ],
    teamMembers: ["Tonny Bairstow", "Ahmed Hossain", "John Doe"],
    recentActivities: ['Interactive Dashboard', 'Task Filters', 'Search Functionality']
  },
  {
    id: 2,
    title: "Wallet Xpert",
    description:
      "Develop a Website for financial management application that allows users to manage the income and expenses",
    tasks: [
      "Dashboard Interface",
      "Authentication Page",
      "Transaction section",
    ],
    teamMembers: ["Tofail Ahmed", "Ahmed Hossain", "Ridwanul Alam"],
    recentActivities: ['Interactive Dashboard', 'Task Filters', 'Search Functionality']
  },
  {
    id: 3,
    title: "Real Estate",
    description:
      "Develop a real estate project management application that allows users to sell , buy the real estate products.",
    tasks: [
      "Authentication Page",
      "Projects Overview Page",
      "Project Details Page",
    ],
    teamMembers: ["Ahmed Bin Kabir", "Ahmed Hossain", "Hossain Ahmed"],
    recentActivities: ['Interactive Dashboard', 'Price Filters', 'Search Functionality']
  },
];
const ProjectPage = () => {
  return (
    <div className="m-4">
      <Card
        bordered={true}
        hoverable={true}
        title="Project Forge"
        style={{ width: 300 }}
        className="shadow-md"
        actions={[
          <ArrowsAltOutlined key="view" />,
          <EditOutlined key="edit" />,
          <DeleteOutlined key="delete" />,
        ]}
      >
        <p className="text-gray-600 font-normal">
          Develop a dashboard for a project management application that allows
          users to manage tasks, and projects.
        </p>
      </Card>
    </div>
  );
};

export default ProjectPage;

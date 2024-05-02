import {
  FundProjectionScreenOutlined,
  HighlightOutlined 
} from "@ant-design/icons";

export const dataSource = [
    {
      key: "1",
      email: "ahmed@hossain.com",
      password: "ahmed1",
    },
    {
      key: "2",
      email: "ahmed.hsn.404@gmail.com",
      password: "hossain1",
    },
    {
      key: "3",
      email: "ahmed.404@gmail.com",
      password: "ahmed404",
    },
  ];
  
  export const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
  ];

  export const users = [
    { email: "ahmed@hossain.com", password: "ahmed1" },
    { email: "ahmed.hsn.404@gmail.com", password: "hossain1" },
    { email: "ahmed.404@gmail.com", password: "ahmed404" },
  ];

  export const dummyProjects = [
    {
      id: 1,
      title: "Project Forge",
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

  export const paths = [
    { path: "/projects", icon: <FundProjectionScreenOutlined />, label: "Projects" },
    { path: "/projects/tasks", icon: <HighlightOutlined />, label: "Tasks" },
  ];
  export const tasks =[
    {id: 1, title: 'Authentication', projectName: 'Project Forge App', assignedTo: 'Ahmed Hoosain', deadline: '02/05/24', status:'todo'},
    {id: 1, title: 'Landing Page', projectName: 'Real Estate App', assignedTo: 'Hoosain Ahmed', deadline: '31/12/23', status:'done'},
    {id: 1, title: 'Project Showcase', projectName: 'Portfolio App', assignedTo: 'Ahmed Hoosain', deadline: '11/02/23', status:'in_progress'}
  ]
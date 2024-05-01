"use client";
import React from "react";
import { Layout, Menu, theme } from "antd";
import Link from "next/link";
import {paths} from '@/data/data'
const { Sider } = Layout;

const AntdDrawer = ({ children }) => {
  
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
        }}
        onCollapse={(collapsed, type) => {
        }}
        style={{
          minHeight: "100vh",
          position: "fixed",
          left: 0,
          zIndex: 1,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
          {paths.map((item) => (
            <Menu.Item key={item.path} icon={item.icon}>
              <Link href={`${item.path}`}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="lg:ms-[200px] ms-0">
        <Layout.Content
          style={{
            margin: "24px 16px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            padding: 24,
            minHeight: "calc(100vh - 48px)",
          }}
        >
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default AntdDrawer;
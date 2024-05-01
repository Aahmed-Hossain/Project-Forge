"use client"
import React from "react";
import AntdDrawer from "../../../components/drawer/AntdDrawer";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
const layout = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AntdDrawer>{children}</AntdDrawer>
    </QueryClientProvider>
  );
};

export default layout;

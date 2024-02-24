import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/nav/MainNavigation";

const Layout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
 
    </>
  );
};

export default Layout;

import React from 'react';
import HeaderStudentPortal from "./Header";
import SideNavBar from "./StudentSideBar.jsx";
import { Outlet } from "react-router-dom";
import ProperMarginDueToSideNav from "./ProperMarginDueToSideNav";

function App() {
  return (
    <>
      <HeaderStudentPortal />
      <SideNavBar />
      <ProperMarginDueToSideNav>
        <Outlet />
      </ProperMarginDueToSideNav>
   </>
  );
}

export default App;

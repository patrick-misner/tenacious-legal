import React from 'react';
import Navbar from "./nav/Navbar";

const PageLayout = ({ children }) => (
  <div className="page-layout">
    <Navbar />
    <div className="page-layout__content bg-gray-100 h-screen">{children}</div>
  </div>
);
export default PageLayout;
import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './nav/Navbar';

const PageLayout = ({ children }) => (
  <div className="page-layout bg-gray-100 dark:bg-slate-700 h-screen">
    <Navbar />
    <div className="page-layout__content dark:bg-slate-700">{children}</div>
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PageLayout;

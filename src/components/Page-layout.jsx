import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './nav/Navbar';

const PageLayout = ({ children }) => (
  <div className="page-layout bg-gray-100">
    <Navbar />
    <div className="page-layout__content">{children}</div>
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PageLayout;

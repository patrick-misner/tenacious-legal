import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './nav/NavBar';

const PageLayout = ({ children }) => (
  <div className="page-layout bg-gray-100 dark:bg-slate-700 h-screen">
    <Navbar />
    <div className="page-layout__content dark:bg-slate-700">
      <div className="mx-auto p-4 max-w-7xl px-2 sm:px-6 lg:px-8 p-2 px-4 text-gray-300">
        <div className="px-5 pt-5 pb-1 px-4 text-black dark:text-slate-400 dark:bg-slate-900 shadow-xl rounded bg-white grid grid-cols-12">
          {children}
        </div>
      </div>
    </div>
  </div>
);

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default PageLayout;

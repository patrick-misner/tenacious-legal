import React from 'react';
import ServicesComponent from '../services';
import Welcome from '../welcome';
import ServiceAreaComponent from '../service-area';

const DashboardPage = () => (
  <div className="mx-auto p-4 max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="p-2 px-4 text-gray-300">
      <div className="p-5 px-4 text-gray-300 shadow-xl rounded bg-white grid grid-cols-12">
        <Welcome />
        <ServicesComponent />
        <ServiceAreaComponent />
      </div>
    </div>
  </div>
);

export default DashboardPage;

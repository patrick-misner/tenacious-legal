import React from 'react';
import Faq from '../faq';
import FaqHeader from '../faq-header';
import Footer from '../footer';

const FaqPage = () => (
  <div className="mx-auto p-4 max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="p-2 px-4 text-gray-300">
      <div className="px-5 pt-5 pb-1 px-4 text-black dark:text-slate-400 dark:bg-slate-900 shadow-xl rounded bg-white grid grid-cols-12">
        <FaqHeader />
        <Faq />
        <Footer />
      </div>
    </div>
  </div>
);

export default FaqPage;

import React from 'react';

const MissionPage = () => (
  <section className="relative pt-24 pb-28 bg-blueGray-50 overflow-hidden">
    <img
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
      src="flaro-assets/images/faqs/gradient.svg"
      alt=""
    />
    <div className="relative z-10 container px-4 mx-auto">
      <div className="md:max-w-4xl mx-auto">
        <p className="mb-7 text-sm text-indigo-600 text-center font-semibold uppercase tracking-px">
          Have any questions?
        </p>
        <h2 className="mb-16 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">
          Frequently Asked Questions
        </h2>
      </div>
    </div>
  </section>
);

export default MissionPage;

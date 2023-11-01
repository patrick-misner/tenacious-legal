const PricingHeader = () => (
  <div className="col-span-12">
    <div className="">
      <h2 className="mb-4 text-4xl dark:text-white md:text-6xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">
        Routine Service Fee
      </h2>
      <h3 className="mb-8 text-4l text-indigo-800 dark:text-indigo-400 md:text-6l xl:text-10l text-center font-bold font-heading tracking-px-n leading-none">
        If you're paying by credit card, you can use the tool below for a price
        estimate and e-mail{' '}
        <a
          className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"
          href="mailto:sean@tenacious.legal"
        >
          sean@tenacious.legal
        </a>{' '}
        for an invoice.
      </h3>
      {/* <p className="mb-7 text-sm text-indigo-600 text-center font-semibold uppercase tracking-px">
        Pricing calculator
      </p> */}
    </div>
  </div>
);
export default PricingHeader;

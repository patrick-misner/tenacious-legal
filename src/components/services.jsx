const ServicesComponent = () => (
  <div className="col-span-12 text-black px-3 my-3 mr-5">
    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300" />
    <div className="flex justify-center">
      <p className="font-bold mb-5 text-xl">Services</p>
    </div>
    <div className="flex justify-between md:justify-evenly">
      <div>
        <ul className="list-disc">
          <li>Process Serving</li>
          <li>Skip Trace and Location</li>
        </ul>
      </div>
      <div>
        <ul className="list-disc">
          <li>Filing and Court Research</li>
          <li>Foreclosure Posting</li>
        </ul>
      </div>
    </div>
  </div>
);

export default ServicesComponent;

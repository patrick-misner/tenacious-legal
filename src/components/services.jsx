const ServicesComponent = () => (
  <div className="col-span-12 text-black px-3 my-3 mr-5">
    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300" />
    <div className="flex justify-center">
      <p className="font-bold mb-5 text-xl dark:text-white">Services</p>
    </div>
    <div className="flex flex-col md:flex-row md:flex-wrap md:justify-evenly text-center">
      <div className="">
        <ul className="">
          <li className="bg-gray-800 dark:bg-indigo-700 rounded-md text-gray-300 p-2 shadow-l mb-3 hover:scale-105 transition duration-300">
            Process Serving
          </li>
          <li className="bg-gray-800 dark:bg-indigo-700 rounded-md text-gray-300 p-2 shadow-l mb-3 hover:scale-105 transition duration-300">
            Skip Trace and Location
          </li>
        </ul>
      </div>
      <div className="">
        <ul className="">
          <li className="bg-gray-800 dark:bg-indigo-700 rounded-md text-gray-200 p-2 shadow-l mb-3 hover:scale-105 transition duration-300">
            Foreclosure Auctions
          </li>
          <li className="bg-gray-800 dark:bg-indigo-700 rounded-md text-gray-300 p-2 shadow-l hover:scale-105 transition duration-300">
            Foreclosure Posting
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default ServicesComponent;

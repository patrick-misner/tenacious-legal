import countymap from '../images/county-map.png';

const ServiceAreaComponent = () => (
  <>
    <div className="col-span-12 text-black px-3 mr-5">
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300" />
    </div>
    <div className="col-span-12 md:col-span-6 text-black px-3 my-3 mr-5 text-center">
      <p className="font-bold mb-5 text-xl">
        Counties we cover (without forwarding fees)
      </p>
      <ul>
        <li>Blaine</li>
        <li>Camas</li>
        <li>Cassia</li>
        <li>Gooding</li>
        <li>Jerome</li>
        <li>Lincoln</li>
        <li>Minidoka</li>
        <li>Twin Falls</li>
      </ul>
    </div>

    <div className="col-span-12 md:col-span-6 text-black px-3 my-3 mr-5">
      <div className="flex justify-center hover:scale-105 transition duration-300">
        <img
          className="object-contain h-72 w-144"
          src={countymap}
          alt="Idaho County Map"
        />
      </div>
    </div>
  </>
);

export default ServiceAreaComponent;

import React, { useState } from 'react';
import Select from 'react-select';
import venmo from '../images/venmo.png';

const Pricing = () => {
  const cities = [
    {
      id: 1,
      name: 'Twin Falls',
      miles: 5,
      zip: '83301',
      price: 0, // Updated price
    },
    {
      id: 2,
      name: 'Filer',
      miles: 10,
      zip: '83328',
      price: 0, // Updated price
    },
    {
      id: 3,
      name: 'Jerome',
      miles: 6,
      zip: '83338',
      price: 0, // Updated price
    },
    {
      id: 4,
      name: 'Kimberly',
      miles: 8,
      zip: '83341',
      price: 0, // Updated price
    },
    {
      id: 5,
      name: 'Buhl',
      miles: 20,
      zip: '83316',
      price: 500, // Updated price
    },
    {
      id: 6,
      name: 'Castleford',
      miles: 26,
      zip: '83321',
      price: 500, // Updated price
    },
    {
      id: 7,
      name: 'Hansen',
      miles: 12,
      zip: '83334',
      price: 500, // Updated price
    },
    {
      id: 8,
      name: 'Eden',
      miles: 22,
      zip: '83335',
      price: 500, // Updated price
    },
    {
      id: 9,
      name: 'Hollister',
      miles: 23,
      zip: '83301',
      price: 500, // Updated price
    },
    {
      id: 10,
      name: 'Murtaugh',
      miles: 22,
      zip: '83344',
      price: 500, // Updated price
    },
    {
      id: 11,
      name: 'Wendell',
      miles: 22,
      zip: '83355',
      price: 500, // Updated price
    },
    {
      id: 12,
      name: 'Hazelton',
      miles: 30,
      zip: '83314',
      price: 1000, // Updated price
    },
    {
      id: 13,
      name: 'Bliss',
      miles: 39,
      zip: '83314',
      price: 1000, // Updated price
    },
    {
      id: 14,
      name: 'Gooding',
      miles: 34,
      zip: '83330',
      price: 1000, // Updated price
    },
    {
      id: 15,
      name: 'Hagerman',
      miles: 34,
      zip: '83332',
      price: 1000, // Updated price
    },
    {
      id: 16,
      name: 'Rogerson',
      miles: 33,
      zip: '83302',
      price: 1000, // Updated price
    },
    {
      id: 17,
      name: 'Paul',
      miles: 40,
      zip: '83347',
      price: 1500, // Updated price
    },
    {
      id: 18,
      name: 'Burley',
      miles: 41,
      zip: '83318',
      price: 1500, // Updated price
    },
    {
      id: 19,
      name: 'Heyburn',
      miles: 45,
      zip: '83336',
      price: 1500, // Updated price
    },
    {
      id: 20,
      name: 'Rupert city limits/Southside',
      miles: 47,
      zip: '83350',
      price: 1500, // Updated price
    },
    {
      id: 21,
      name: 'Albion',
      miles: 60,
      zip: '83311',
      price: 2000, // Updated price
    },
    {
      id: 22,
      name: 'Declo',
      miles: 51,
      zip: '83323',
      price: 2000, // Updated price
    },
    {
      id: 23,
      name: 'Glenns Ferry',
      miles: 60,
      zip: '83623',
      price: 2000, // Updated price
    },
    {
      id: 24,
      name: 'King Hill/Paradise Valley',
      miles: 55,
      zip: '83633',
      price: 2000, // Updated price
    },
    {
      id: 25,
      name: 'Jackpot, NV',
      miles: 50,
      zip: '89825',
      price: 2000, // Updated price
    },
    {
      id: 26,
      name: 'Rupert Northside/Acequia',
      miles: 55,
      zip: '83350',
      price: 2000, // Updated price
    },
    {
      id: 27,
      name: 'Idahome',
      miles: 67,
      zip: '83323',
      price: 3000, // Updated price
    },
    {
      id: 28,
      name: 'Oakley',
      miles: 63,
      zip: '83346',
      price: 3000, // Updated price
    },
    {
      id: 29,
      name: 'Elba',
      miles: 75,
      zip: '83342',
      price: 4000, // Updated price
    },
    {
      id: 30,
      name: 'Malta',
      miles: 75,
      zip: '83342',
      price: 4000, // Updated price
    },
    {
      id: 31,
      name: 'Almo',
      miles: 86,
      zip: '83312',
      price: 5500, // Updated price
    },
    {
      id: 32,
      name: 'Shoshone',
      miles: 25,
      zip: '83352',
      price: 1500, // Updated price
    },
    {
      id: 33,
      name: 'Dietrich',
      miles: 33,
      zip: '83324',
      price: 1500, // Updated price
    },
    {
      id: 34,
      name: 'Richfield',
      miles: 41,
      zip: '83349',
      price: 2000, // Updated price
    },
    {
      id: 35,
      name: 'Bellevue/Carey/Fairfield',
      miles: 0,
      zip: '',
      price: 3500, // Updated price
    },
    {
      id: 36,
      name: 'Hailey',
      miles: 0,
      zip: '',
      price: 4500, // Updated price
    },
    {
      id: 37,
      name: 'Ketchum/Sun Valley',
      miles: 0,
      zip: '',
      price: 5500, // Updated price
    },
  ];
  // prices are in cents thanks to printers
  const basePrice = 6500;
  const skipTracePrice = 9500;
  const printPagePrice = 16;
  const entityPrice = 2000;
  const locationPrice = 5500;
  const rushPrice = 3000;
  const [_selectedCity, setSelectedCity] = useState(null);
  const [cityPrice, setCityPrice] = useState(basePrice);
  const [optionPrice, setOptionPrice] = useState(0);
  const [printPrice, setPrintPrice] = useState(0);
  const [entityValue, setEntityValue] = useState(1);
  const [printValue, setPrintValue] = useState(0);
  const [showExtraControls, setShowExtraControls] = useState(false);
  const [showPrintFeeControls, setShowPrintFeeControls] = useState(false);
  const handlePersonIncrement = () => {
    setEntityValue(entityValue + 1);
    setOptionPrice(optionPrice + entityPrice);
  };
  const handlePersonDecrement = () => {
    if (entityValue > 1) {
      setEntityValue(entityValue - 1);
      setOptionPrice(optionPrice - entityPrice);
    }
  };
  const handlePersonChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    if (!Number.isNaN(newValue) && newValue > 0 && newValue <= 100) {
      setEntityValue(newValue);
      setOptionPrice((prevOptionPrice) => {
        // Calculate the new optionPrice based on the previous value
        const priceDifference = (newValue - entityValue) * entityPrice;
        return prevOptionPrice + priceDifference;
      });
    }
  };
  const handlePrintFeeIncrement = () => {
    setPrintValue(printValue + 1);
    setPrintPrice(printPrice + printPagePrice);
  };
  const handlePrintFeeDecrement = () => {
    if (printValue > 26) {
      setPrintValue(printValue - 1);
      setPrintPrice(printPrice - printPagePrice);
    }
  };
  const handleExtraPrintFeeChange = (event) => {
    setShowPrintFeeControls(event.target.checked);
    if (event.target.checked && printValue === 0) {
      setPrintValue(26);
      setPrintPrice(26 * printPagePrice);
    } else {
      setPrintPrice(0);
    }
    if (event.target.checked && printValue !== 0 && printValue >= 26) {
      setPrintPrice(printValue * printPagePrice);
    }
  };
  const handlePrintFeeChange = (e) => {
    const newValue = parseInt(e.target.value, 10);

    if (!Number.isNaN(newValue) && newValue <= 5000) {
      setPrintValue(newValue);
      if (newValue >= 26) {
        setPrintPrice(newValue * printPagePrice);
      } else {
        setPrintPrice(0);
      }
    } else {
      setPrintValue('');
      setPrintPrice(0);
    }
  };

  const options = cities
    .map((city) => ({
      value: city.id,
      label: city.name,
    }))
    .sort((a, b) => {
      if (a.label === 'Twin Falls') {
        return -1;
      }
      if (b.label === 'Twin Falls') {
        return 1;
      }
      return a.label.localeCompare(b.label);
    });
  const handleRushChange = (event) => {
    if (event.target.checked) {
      setOptionPrice(optionPrice + rushPrice);
    } else {
      setOptionPrice(optionPrice - rushPrice);
    }
  };
  const handleExtraChange = (event) => {
    setShowExtraControls(event.target.checked);
    if (event.target.checked) {
      setOptionPrice(optionPrice + entityPrice * entityValue);
    } else {
      setOptionPrice(optionPrice - entityPrice * entityValue);
    }
  };
  const handleLocationChange = (event) => {
    if (event.target.checked) {
      setOptionPrice(optionPrice + locationPrice);
    } else {
      setOptionPrice(optionPrice - locationPrice);
    }
  };
  return (
    <div className="col-span-12">
      <div className="">
        <Select
          className="basic-single w-full w-3/4 sm:w-1/2 lg:w-1/4 mx-auto"
          classNamePrefix="select"
          isClearable
          name="city"
          options={options}
          placeholder="Select a city..."
          onChange={(selectedOption) => {
            if (selectedOption === null) {
              setSelectedCity(null);
              setCityPrice(basePrice);
            } else {
              const activeCity = cities.find(
                (city) => city.id === selectedOption.value
              );
              setSelectedCity(activeCity);
              setCityPrice(basePrice + activeCity.price);
            }
          }}
        />
        <div className="flex justify-center mt-8 mx-5">
          <label className="flex items-center space-x-2">
            <span>Rush Service (${(rushPrice / 100).toFixed(2)})</span>
            <input type="checkbox" onChange={handleRushChange} />
          </label>
        </div>
        <div className="">
          <div className="flex justify-center mt-3 mx-5">
            <label className="flex items-center space-x-2">
              <span>
                Extra Entity @ same address (${(entityPrice / 100).toFixed(2)})
              </span>
              <input type="checkbox" onChange={handleExtraChange} />
            </label>
          </div>

          {showExtraControls && (
            <div className="flex justify-center pt-3 space-x-2">
              <button
                className="px-3 rounded-lg bg-blue-500 text-white"
                onClick={handlePersonDecrement}
                type="button"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={entityValue}
                onChange={handlePersonChange}
                className="w-16 text-center border border-gray-300 rounded"
                inputMode="numeric"
              />
              <button
                className="px-3 rounded-lg bg-blue-500 text-white"
                onClick={handlePersonIncrement}
                type="button"
              >
                +
              </button>
            </div>
          )}
        </div>

        <div className="">
          <div className="flex justify-center mt-3 mx-5">
            <label className="flex items-center space-x-2">
              <span>
                Print fees apply above 25 pages ($
                {(printPagePrice / 100).toFixed(2)}/page)
              </span>
              <input type="checkbox" onChange={handleExtraPrintFeeChange} />
            </label>
          </div>

          {showPrintFeeControls && (
            <div className="flex justify-center pt-3 space-x-2">
              <button
                className="px-3 rounded-lg bg-blue-500 text-white"
                onClick={handlePrintFeeDecrement}
                type="button"
              >
                -
              </button>
              <input
                type="number"
                value={printValue}
                onChange={handlePrintFeeChange}
                className="w-16 text-center border border-gray-300 rounded"
                inputMode="numeric"
              />
              <button
                className="px-3 rounded-lg bg-blue-500 text-white"
                onClick={handlePrintFeeIncrement}
                type="button"
              >
                +
              </button>
            </div>
          )}
        </div>

        <div className="flex justify-center mb-10 mt-3 mx-5">
          <label className="flex items-center space-x-2">
            <span>Location w/ service ($55)</span>
            <input type="checkbox" onChange={handleLocationChange} />
          </label>
        </div>
      </div>
      <div className="col-span-12">
        <h2 className="mt-12 text-4xl dark:text-white md:text-6xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">
          ${((cityPrice + optionPrice + printPrice) / 100).toFixed(2)}
        </h2>
        <div className="flex flex-col items-center pt-8">
          <a
            href={`https://venmo.com/SeanCapps?txn=pay&amount=${(
              (cityPrice + optionPrice + printPrice) /
              100
            ).toFixed(2)}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="h-24 hover:scale-105 transition duration-300 cursor-pointer my-5 px-5"
              src={venmo}
              alt="Venmo Icon link"
            />
          </a>
          <p className="text-center text-lg font-bold mb-12">
            Pay ${((cityPrice + optionPrice + printPrice) / 100).toFixed(2)}{' '}
            with Venmo
          </p>
        </div>
      </div>

      <hr className="col-span-12 h-px my-2 bg-gray-200 border-0 dark:bg-gray-300 my-12" />
      <div className="col-span-12">
        {' '}
        <h2 className="mb-4 mt-12   text-4xl dark:text-white md:text-6xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">
          Skip Trace Fee
        </h2>
      </div>
      <h2 className="mt-12 text-4xl dark:text-white md:text-6xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">
        ${(skipTracePrice / 100).toFixed(2)}
      </h2>
      <div className="flex flex-col items-center pt-8">
        <a
          href={`https://venmo.com/SeanCapps?txn=pay&amount=${(
            skipTracePrice / 100
          ).toFixed(2)}`}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="h-24 hover:scale-105 transition duration-300 cursor-pointer my-5 px-5"
            src={venmo}
            alt="Venmo Icon link"
          />
        </a>
        <p className="text-center text-lg font-bold mb-12">
          Pay ${(skipTracePrice / 100).toFixed(2)} with Venmo
        </p>
      </div>
    </div>
  );
};

export default Pricing;

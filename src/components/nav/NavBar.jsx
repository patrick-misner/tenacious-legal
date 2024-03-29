import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../images/logo/png/logo-test3.png';
import logo2 from '../../images/logo/png/small-logo-test1.png';
import Switcher from '../Switcher';

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Frequently Asked Questions', to: '/faq' },
  { name: 'Pricing', to: '/pricing' },
  { name: 'Contact', to: '/contact' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Disclosure as="nav" className="bg-slate-900">
      {({ open }) => (
        <>
          <div className="mx-auto pb-4 max-w-7xl px-2 sm:px-6 lg:px-8 sm:pt-4">
            <div className="p-2 px-4 text-gray-300 dark:text-white flex justify-center">
              <img
                className="hidden h-10 w-auto sm:block px-2"
                src={logo2}
                alt="Tenacious Legal Support"
              />
              <img
                className="hidden h-12 w-auto sm:block px-2"
                src={logo}
                alt="Tenacious Legal Support"
              />
            </div>
            <div className="flex justify-end">
              <div className="absolute sm:px-5 pt-1">
                <Switcher />
              </div>
            </div>
            <div className="flex h-8 items-center justify-between">
              <div className="inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center ">
                <div className="flex-shrink-0 items-center text-gray-300">
                  <img
                    className="block h-6 w-auto sm:hidden px-2"
                    src={logo}
                    alt="Tenacious Legal Support"
                  />

                  {/* <img
                    className="hidden h-8 w-auto lg:block px-2"
                    src={logo}
                    alt="Tenacious Legal Support"
                  /> */}
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) =>
                      item.href ? (
                        <a
                          key={item.name}
                          href={item.href}
                          target={item.target}
                          className={classNames(
                            'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <NavLink
                          key={item.name}
                          to={item.to}
                          onClick={() => navigate(item.to)}
                          className={({ isActive }) =>
                            `${classNames(
                              'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )} ${isActive ? 'bg-slate-800 text-cyan-300' : ''}`
                          }
                          aria-current="page"
                        >
                          {item.name}
                        </NavLink>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 text-gray-300" />
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) =>
                item.href ? (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    target={item.target}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ) : (
                  <Disclosure.Button
                    key={item.name}
                    as={NavLink}
                    to={item.to}
                    onClick={() => navigate(item.to)}
                    className={({ isActive }) =>
                      `${classNames(
                        'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )} ${isActive ? 'bg-gray-900 text-white' : ''}`
                    }
                    aria-current="page"
                  >
                    {item.name}
                  </Disclosure.Button>
                )
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
export default NavBar;

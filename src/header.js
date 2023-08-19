/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable eqeqeq */

/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */

import { Popover, Transition } from '@headlessui/react';

import React, { Fragment, useState } from 'react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
export default function HomeHeader({  title }) {
   let defaultState = 0;
   let [toggleState, setToggleState] = useState(defaultState);
   let toggleTab = (index) => {
    setToggleState(index);
  };
  
let navigation = [
//   { name: 'Company', href: '/aboutUs', current: title == 'Company' },
//   { name: 'Services', href: '/ourServices', current: title == 'Services' },
  // { name: 'Blogs', href: '/blog' },
  { name: 'Products', href: '/home', current: title == 'Products' },
  // { name: 'Carts', href: '/carts', current: title == 'Carts' },
  // { name: 'Portfolio', href: '/prtfolio', current: title == 'Portfolio' },
];
  return (
    <div className="relative bg-green-200 overflow-hidden">
      <div className="">
        <div className="relative z-10 pb-8 bg-gray-100 sm:pb-2 ">
          {/* <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none" 
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg> */}

          <Popover>
            <div className=" pt-2 px-4 sm:px-6 lg:px-3">
              <nav className="relative flex items-center justify-between sm:h-10 " aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 xl:flex-grow-0">
                  <div className="flex ml-2 items-center justify-between w-full xl:w-auto">
                    <div className="flex inline ">
                      <a >
                       
                        <img className="h-5 w-5 rounded-full mt-2 sm:mt-0 sm:h-[40px] sm:w-[40px]" src="/Icon.png" alt="" />
                      </a>
                      <div>
                        <div className="ml-5 text-xl sm:text-2xl mt-1    font-semibold   text-indigo-900">
                          <p> GLIDIX
                        TECHNOLOGIES</p>
                        </div>
                      </div>
                    </div>
                    <div className="-mr-2 flex items-center xl:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                    
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden xl:block  xl:ml-96  lg:space-x-8">
                  {navigation.map((item, tabIdx) => (
                   <a
onClick={() => toggleTab(tabIdx)}
                                   key={item.name}
                      href={item.href}
                      className={classNames(item.current ?
                        ' p-2 no-underline bg-blue-700 text-white' : 'p-2 mr-8  no-underline  text-indigo-900 hover:bg-gray-200 hover-text-white')}
                        aria-current={item.current ? 'page' : undefined}
                    >
                      {/* //  className={classNames(
                      //   tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
                      //   tabIdx === 0 ? 'rounded-l-lg' : '',
                      //   tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
                      //   'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
                      // > */}
                        
                      {item.name}
                    </a>             
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel focus className="p-2 transition transform origin-top-right xl:hidden">
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      {/* <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      /> */}
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>
                       
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md  text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
        </div>
      </div>
    </div>
  );
}

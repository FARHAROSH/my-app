/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable no-restricted-globals */

import { useEffect, useState } from "react";
import HomeHeader from "../header";



/* eslint-disable jsx-a11y/alt-text */



/* eslint-disable no-unused-vars */

//   const res = await fetch('https://dummyjson.com/products/' + url[3] );
// const json = await res.json();
// console.log(json[0]);
  export default function Read() {
    const [json,setjson]=useState(0);
    useEffect(() => {
       
      
        const fetchData = async () => {
          try {  let url = location.pathname.split('/');
            const res = await fetch('https://dummyjson.com/products/' + url[3] );
            setjson( await res.json())
            console.log(json);
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);
    return (
      <div className="bg-white "><HomeHeader/>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="text-5xl font-semibold text-center mt-2  text-gray-300">Products Details</div>
          <div className="bg-white  sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">{json.title}</h2>
          
            <div className="relative mt-10 h-[300px] w-full overflow-hidden rounded-lg">
                   {/* {product?.images.map((image,i) => (  */}
                   <img
                      src={json.thumbnail}
                    //   alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    /> 
                     {/* ))} */}
                  </div>
            {/* {} */}
          
            {/* {} */}
          </div>
          <div className="mx-auto mt-20 grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
          <p className=" text-lg leading-8 col-span-2 text-gray-600">
          {  json.description}
            </p>  <ul role="list" className="m grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 col-span-2">
        
        <li  className="col-span-2 flex rounded-md shadow-sm">
          <div
            className=
              'flex w-16 bg-pink-600 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
          
          >
          B
          </div>
          <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
            <div className="flex-1 truncate px-4 py-2 text-sm">
             
            Brand
           
              <p className="text-gray-500">  {json.brand} Members</p>
            </div>
            <div className="flex-shrink-0 pr-2">
              <button
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Open options</span>
                {/* <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" /> */}
              </button>
            </div>
          </div>
        </li> 
        
        <li  className="col-span-2 flex rounded-md shadow-sm">
          <div
            className=
              'flex w-16 bg-purple-600 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
          
          >
        D
          </div>
          <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
            <div className="flex-1 truncate px-4 py-2 text-sm">
             
              Discount Percentage
           
              <p className="text-gray-500">  {json.discountPercentage} </p>
            </div>
            <div className="flex-shrink-0 pr-2">
              <button
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Open options</span>
                {/* <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" /> */}
              </button>
            </div>
          </div>
        </li>
    
   
        
        <li  className="col-span-2 flex rounded-md shadow-sm">
          <div
            className=
              'flex w-16 bg-yellow-500 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
          
          >
          R
          </div>
          <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
            <div className="flex-1 truncate px-4 py-2 text-sm">
             
              Rating
           
              <p className="text-gray-500">  {json.rating} </p>
            </div>
            <div className="flex-shrink-0 pr-2">
              <button
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Open options</span>
                {/* <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" /> */}
              </button>
            </div>
          </div>
        </li>
    
    
        
        <li  className="col-span-2 flex rounded-md shadow-sm">
          <div
            className=
              'flex w-16 bg-green-500 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
          
          >
         S
          </div>
          <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
            <div className="flex-1 truncate px-4 py-2 text-sm">
             Stock
           
              <p className="text-gray-500">  {json.stock} </p>
            </div>
            <div className="flex-shrink-0 pr-2">
              <button
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Open options</span>
                {/* <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" /> */}
              </button>
            </div>
          </div>
        </li>
    
       
        
        <li  className="col-span-2 flex rounded-md shadow-sm">
          <div
            className=
              'flex w-16 bg-gray-600 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white'
          
          >
            P
          </div>
          <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
            <div className="flex-1 truncate px-4 py-2 text-sm">
             
              price
           
              <p className="text-gray-500">  {json.price} </p>
            </div>
            <div className="flex-shrink-0 pr-2">
              <button
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Open options</span>
                {/* <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" /> */}
              </button>
            </div>
          </div>
        </li>
    
    
    
    </ul> 
          </div>
        </div>
      </div>
    </div>
          
        </div>
      </div>
    )
  }
  
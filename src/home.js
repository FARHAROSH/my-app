/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/alt-text */


import React from "react";
/* eslint-disable no-unused-vars */

  const res = await fetch('https://dummyjson.com/products');
const json = await res.json();
console.log(json);
  export default function Home() {
    return (
      <div className="bg-white ">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
          <div className="text-5xl font-semibold text-center mt-2 mb-8 text-gray-300">Products</div>
  
          <div className="mt-20  grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-6">
            {json?.products.map((product) => (
              <div key={product.id} className='bg-white rounded-lg shadow-xl  '>
                <div className="relative">
                  <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                   {/* {product?.images.map((image,i) => (  */}
                   <img
                      src={product.thumbnail}
                    //   alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    /> 
                     {/* ))} */}
                  </div>
                  <div className="relative h-[200px] mt-4 px-1 ">
                    <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                    <div className="text-center mt-5 ">   <p className="mt-1 text-sm font-medium text-gray-800 text-gray-500">Brand  : {product.brand}</p><p className="mt-1 text-sm font-medium text-gray-800 text-gray-500">Discount : {product.discountPercentage}</p>
                    <p className="mt-1 text-sm font-medium text-gray-800 text-gray-500">Rating : {product.rating}</p>
                    <p className="mt-1 text-sm font-medium text-gray-800 text-gray-500">Stock  : {product.stock}</p>
                 
</div>
                    
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-[300px] items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">price: {product.price}</p>
                  </div>
                </div>
                <div className="mt-6">
                  {/* <a
                    href={`/ReadMore/${product.id}`}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    Read More
                  </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
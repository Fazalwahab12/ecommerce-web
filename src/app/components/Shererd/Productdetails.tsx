'use client'

import { FC } from 'react';

import Image from 'next/image';

import Wreper from '../Wreper';

import Quantity from '../ui/Quantity';
import { oneProductType } from '@/app/utils/Type';
import AddToCart from '../ui/Addtocart';


// import { cartSlice, removeFromCart } from '@/app/store/slice/cartSlice';


import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../../../sanity/lib/client';


const builder: any = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source)
}

const size = ['XS', 'S', 'M', 'L', 'XL'];

const Productdetails: FC<{ item: oneProductType }> = ({ item }) => {
  
  
  return (
    <Wreper>
      
      <main>
        <div className='flex mt-10'>
        <div className='flex gap-2'>
          <div>
          <img src={urlFor(item.image).width(100).height(100).url()} />
              
              </div>
            <div>
            <img src={urlFor(item.image).width(400).height(400).url()} />
                
                 </div>
          </div>
          <div className='mx-10 mt-4'>
            <h1 className='font-bold text-3xl'>{item.name}</h1>
            <p className='font-bold mt-4'>{item.tags}</p>
            <div className='font-bold mt-4'>
              <h2>SELECT SIZE</h2>
              <div className='flex gap-3'>
                {size.map((sizee) => (
                  <div
                    key={sizee}
                    className='h-9 w-9 mt-4 duration-300 border rounded-full hover:shadow-xl flex items-center justify-center'
                  >
                    <span className='text-[15px] font-semibold text-center text-gray-500'>{sizee}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className='flex items-center gap-x-8 mt-4'>
              
<h2 className='font-bold'>Quantity:</h2>
<div className="flex items-center gap-x-2">
<Quantity product={item} />
    </div>
            </div>
            <div className='flex items-center gap-x-8 mt-6'>
            <AddToCart product={item} />
        <h1>{item.price}</h1>
      </div>
          </div>
        </div>
        <div className='mt-10'>
          <div className='relative py-14 px-2 border-b border-gray-400'>
            <h2 className='top-0 absolute text-6xl md:text-[9rem] font-bold text-gray-200 text-center mx-auto -z-50'>
              Overview
            </h2>
            <p className='font-semibold text-xl'>Product Information</p>
          </div>
          <div className='text-gray-600'>
            <div className='flex px-2 py-4'>
              <div className='w-80'>
                <h3 className='font-semibold'>PRODUCT DETAILS</h3>
              </div>
              <p>nLorem ipsum dolor sit amet, consectetur
                 adipiscing elit, sed do eiusmod tempor incididunt 
                 ut labore et dolore magna aliqua. Ut enim ad minim 
                 </p>
            </div>
            <div className='flex px-2 py-8'>
              <div className='w-80'>
                <h3 className='font-semibold'>PRODUCT CARE</h3>
              </div>
              <ul className='pl-3 list-disc font-semibold text-gray-900'>
                <li>Hand wash using cold water.</li>
                <li>Do not use bleach.</li>
                <li>Hang it to dry.</li>
                <li>Iron on low temperature.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Wreper>
  );
};

export default Productdetails;

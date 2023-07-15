
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img from '../.././../public/future/feature.webp'
import Wreper from './Wreper'
function Herobanner() {
  return (



<Wreper>
<section className='mt-16 '>

<div className=' text-4xl font-bold  flex justify-end py-2 px-8 bg-gradient-to-b from-white to-[#FBFCFF]'>
        <h1>Unique and Authentic <br /> Vintage Designer <br /> Jewellery</h1>
      </div>
      <div className='  lg:grid   lg:grid-cols-2  py-4 px-8 bg-[#FBFCFF]  '>

      <div className='lg:grid    lg:grid-cols-2  sm:grid-cols-2 sm:grid  justify-center items-center relative'>
          <div className="leading-110       absolute  font-bold text-6xl opacity-10 leading-110 text-gray-800 opacity-7 z-10">
            Different from others
          </div>
          <div className='w-70 z-20 '>
            <h3 className='font-medium text-base leading-5 tracking-wider text-gray-700 mb-4'>Using Good Quality <br /> Materials</h3>
            <p className='font-light text-sm leading-6 tracking-widest text-gray-700'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3 className='font-medium text-base leading-5 tracking-wider text-gray-700 mb-4'>100% Handmade Products</h3>
            <p className='font-light text-sm leading-6 tracking-widest text-gray-700'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3 className='font-medium text-base leading-5 tracking-wider text-gray-700 mb-4'>Modern Fashion Design</h3>
            <p className='font-light text-sm leading-6 tracking-widest text-gray-700'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3 className='font-medium text-base leading-5 tracking-wider text-gray-700 mb-4'>Discount for Bulk Orders</h3>
            <p className='font-light text-sm leading-6 tracking-widest text-gray-700'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
          </div>

          </div>
          <div className='sm:mt-14  lg:grid   lg:grid-cols-2  md:grid-cols-2 md:grid     justify-center items-center gap-10'>
          <Image className=' sm:px-6 sm:pb-6' src={img} width={300} height={350} alt='img' />
          <div className=' md:gap-5 md:mr-12 '>
            <p className='font-light text-base leading-6 text-justify text-gray-700'>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
            <Link href={'/product'}>
              <button className=' sm:mt-5 text-xs w-2/3 h-8 bg-black text-white  rounded-lg' type='button'>See All Product</button>
            </Link>
          </div>
        </div>
      </div>
</section>
  
  </Wreper>
  
  )
}

export default Herobanner
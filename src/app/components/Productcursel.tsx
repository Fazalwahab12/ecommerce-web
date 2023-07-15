'use client'
import { FC, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { oneProductType } from "../utils/Type";
import Card from '../utils/Card';
import Wreper from './Wreper';
import Allcard from '../utils/Allcard';

const Productcursel: FC = () => {
  const [productData, setProductData] = useState<Array<oneProductType>>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-05-30/data/query/production?query=*%5B_type%20%3D%3D%20%22product%22%20%5D`);
        if (response.ok) {
          const data = await response.json();
          setProductData(data.result);
        } else {
          throw new Error('Failed to fetch products');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Wreper>
      <header className='flex flex-col items-center sm:mt-14'>
        <h1 className='text-2xl font-bold mb-4 text-blue-600'>PRODUCTS</h1>
        <h2 className='text-4xl font-bold mb-4 sm:px-10'>Check What We Have</h2>
      </header>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {productData.map((item: oneProductType, index: number) => (
          <SwiperSlide key={index}>
            <Card singleproductdata={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wreper>
  );
};

export default Productcursel;








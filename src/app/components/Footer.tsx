import React from 'react';
import Link from 'next/link';
import {  FaLinkedinIn, } from 'react-icons/fa';
import {  BsTwitter,  BsWhatsapp } from 'react-icons/bs';
import Image from 'next/image';
import g from '../../../public/Logo5.webp'
import Wreper from './Wreper';
const Footer = () => {
  return (
    <Wreper>
    <footer className="bg-white text-black py-8 sm:mx-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        <div className="flex flex-wrap mb-4">
          <div className="w-full sm:w-1/2 md:w-1/4  ">
            <Image className='mb-8' width={150} height={50} src={g} alt="Logo" />
            <p className="text-sm  font-semibold">Small, artisan label of that  offers a thoughtfully curated collection of high-quality everyday essentials.</p>
            <div className="flex mt-4 gap-4">
            <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/fazal-wahab-738481225/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <BsTwitter />
                    </div>
                  </a>
                  </div>
            <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/fazal-wahab-738481225/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  </div>
                  <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/fazal-wahab-738481225/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <BsWhatsapp />
                    </div>
                  </a>
                  </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
            <h1 className="text-lg font-bold mb-3">Company</h1>
            <ul className="text-sm  font-semibold ">
             
            <li>  <Link href='#' >About</Link></li>
                
               <li><Link href="#">Terms of Use</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">How it Works</Link></li>
              <li><Link href="#">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4">
            <h1 className="text-lg font-bold mb-3">Support</h1>
            <ul className="text-sm font-semibold ">
              <li><Link href="#">Support Carrer</Link></li>
              <li><Link href="#">24h Service</Link></li>
              <li><Link href="#">Quick Chat</Link></li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 mb-4 ">
            <h1 className="text-lg font-bold mb-3">Contact</h1>
            <ul className="text-sm font-semibold ">
              <li><Link href="#">Whatsapp</Link></li>
              <li><Link href="#">Support 24h</Link></li>
            </ul>
          </div> 
        </div>
      </div>
    </footer>
    </Wreper>
  );
};

export default Footer;

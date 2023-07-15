import React from 'react';
import Wreper from './Wreper';

function News() {
  return (
    <Wreper>
      
    <div className="flex justify-center items-center min-h-screen ">
      <div className="  absolute px-2 font-bold text-6xl  opacity-5 leading-110 text-gray-800 opacity-7 z-10 md:text-8xl lg:text-9xl">
        Newsletter
      </div>
      <div className="bg-white p-8 relative w-full max-w-lg ">
        <h1 className="text-3xl text-black pt-10 sm:pt-3  font-bold sm:px-12">Subscribe Our Newsletter</h1>
        <p className="text-black pt-8 sm:px-10">Get the latest information and promo offers directly</p>
        
        <form className="flex gap-4 pt-10">
          <input
            className="bg-white rounded px-4 py-2 mb-4 border"
            type="email"
            placeholder="Enter your email address"
          />
          <button className="bg-blue-700 text-white rounded-lg px-4 h-12 sm:mr-8">
            Get Started
          </button>
        </form>
        
       
      </div>
    </div>
    </Wreper>
  );
}

export default News;

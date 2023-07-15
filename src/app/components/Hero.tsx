import Image from 'next/image';
import hero from '../../../public/header.webp'
import Featured1 from '../../../public/future/Featured1.webp'
import Featured2 from '../../../public/future/Featured2.webp'
import Featured3 from '../../../public/future/Featured3.webp'
import Featured4 from '../../../public/future/Featured4.webp'


import Wreper from './Wreper';
const Hero = () => {
  return (
    
    <Wreper>
    <section className="bg-white flex items-center mt-14 sm:mx-8  md:mx-0 lg:mx-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-12 ">
        <div className="md:w-1/2  ">
          <button className=' bg-blue-100 w-32 h-10 text-blue-500 rounded-lg font-bold mb-10' >Sale 70%</button>
          <h1 className=" text-6xl md:text-6xl font-bold leading-tight">
            An Industrial Take on Streetwear
          </h1>
          <p className="text-gray-600 mt-10 mb-10">
            Anyone can beat you, but no one can<br/> beat your outfit as long as you wear<br/> Dine outfits.
          </p>
          
         <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle  text-white hover:text-gray-200 
          bg-black rounded-lg   h-16 w-36  items-center">
            <a href="#" role="button" className="relative flex ">
             
              <svg className="flex-1 w-8 h-8 fill-current pt-2 " viewBox="0 0 24 24">
                
                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
              </svg>
               <p className='text-1xl font-bold leading-tight pt-3 pr-4  '>Start <br/>Shopping</p>
            </a>
            
          </li>
          <div className=' flex mt-10 gap-4 sm:mr-4 '>
          <Image src={Featured1} alt='' ></Image>   
          <Image src={Featured2} alt=''></Image>
          <Image src={Featured3} alt=''></Image>
          <Image src={Featured4} alt=''></Image>
        </div>
  
        </div>
        
        <div className="  ">
          <div className=" bg-[#ffece3] rounded-full  sm:hidden md:block ">
            <Image src={hero} alt="Product Image" className='' width={700} height={500} />
          </div>
        </div>
        
      </div>
      
    </section>
    
    </Wreper>
    
  );
};

export default Hero;

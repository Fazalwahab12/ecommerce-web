import Image from 'next/image';
import Wreper from './Wreper';


import image1 from '../../../public/pimage/event1.webp'

import image4 from '../../../public/future/event2 (1).webp' 
import image5 from '../../../public/future/event3 (1).webp'

function Main() {
  return (
    <Wreper>
        {/* <header className=" flex flex-col  items-center sm:mt-14 ">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">Promotions</h1>
      <h2 className="text-4xl font-bold mb-4 sm:px-10">Our Promotions  Events</h2>
      </header>
      <div className=' md:flex lg:flex   sm:gap-6  mb-10 '>
      <div className=' md:flex-col lg:flex-col  sm:mx-8  '>


       <div className="  bg-gray-400 text-center mt-4  pb-4  md:w-[26rem]  lg:h-44   sm:h-72 sm:w-[20rem] ">
      <div className="flex ">
      <div className=" pt-8 px-4">
          <p className="font-bold text-2xl ">GET UP TO 60%</p>
          <p className="">For the summer season</p>
        </div>
        <div className=" sm:w-2/3 pb-1 ">
          <Image src={image1} alt="Event Image" layout="responsive" />
        </div>
      </div>
    </div>


    <div className=" bg-black text-center mt-8  pb-10 md:w-[26rem]  lg:h-40 sm:w-[20rem] ">
      <h1 className=' text-cyan-50 text-3xl font-bold pt-8'>GET 30% Off</h1>
      <p className="text-cyan-50  pt-5 ">USE PROMO CODE</p>
      <h1 className=' text-cyan-50 text-2xl font-bold  rounded-lg bg-slate-600  mx-2 '>DINEWEEKENDSALE</h1>
       
      
    </div>
    </div>
   
    <div className=" bg-[#efe1c7] px-2      w-[20rem] h-[[52%]]  sm:mt-6 md:mt-4 lg:mt-4 m-8 sm:w-[20rem] ">
    <div className=' pt-6'>
    <p className=" ">Flex Sweatshirt</p>
    <p className=' font-bold'><del className=' font-normal'>$100.00</del>  $75.00</p>
    </div>
    <div className=' pt-12'>
      <Image src={image4}alt=''></Image>
    </div>
    </div>
    

    <div className=" bg-[#efe1c7] px-2      w-[20rem] h-[[52%]]  sm:mt-6 md:mt-4 lg:mt-4 m-8 sm:w-[20rem]  ">
    <div className=' pt-6'>
    <p className=" ">Flex Push Button Bomber</p>
    <p className=' font-bold'><del className=' font-normal'>$225.00$</del> $190.00</p>
    </div>
    <div className=' pt-12 '>
      <Image src={image5}alt=''></Image>
    </div>
    </div>
    </div> */}

<div className="py-16 px-10 space-y-5">

{/* Heading */}
<div className="text-center space-y-3">
  <p className="text-blue-800 text-sm">PROMOTIONS</p>
  <h3 className="text-3xl text-gray-800 font-bold">Our Promotions Events</h3>
</div>

{/* Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-gray-800 mx-auto">

  {/* first grid */}
  <div className=" bg-gray-400 w-full flex flex-col items-center justify-between sm:flex-row col-span-1 md:col-span-2 bg-cat1 px-12" >
    <div className="max-w-[13rem] py-8">
      <h4 className="text-3xl font-extrabold">GET UP TO 60%</h4>
      <p className="text-xl">For the summer season</p>
    </div>
    <div className="w-64">
      <Image width={1000} height={1000} alt="summer season" src={image1} />
    </div>
  </div>

  {/* second grid */}
  <div className="bg-[#efe1c7]  w-full row-span-1 md:row-span-2 flex flex-col items-center h-full bg-cat3" >

    {/* text */}
    <div className="p-4">
      <p>Flex Sweatshirt</p>
      <p className="text-lg">
        <del>$100.00</del>
        &nbsp;&nbsp;&nbsp;
        <b>
          <ins>$75.00</ins>
        </b>
      </p>
    </div>

    {/* image */}
    <div className="w-64">
      <Image width={1000} height={1000} alt="sweaters" src={image4} />
    </div>
  </div>


  {/* third grid */}
  <div className=" bg-[#efe1c7] w-full row-span-1 md:row-span-2 flex flex-col items-center h-full bg-cat4">
    {/* text */}
    <div className="p-4">
      <p>Flex Sweatshirt</p>
      <p className="text-lg">
        <del>$225.00</del>
        &nbsp;&nbsp;&nbsp;
        <b>
          <ins>$190.00</ins>
        </b>
      </p>
    </div>

    {/* image */}
    <div className="w-64">
      <Image width={1000} height={1000} alt="sweaters" src={image5} />
    </div>
  </div>


  {/* fourth grid */}
  <div className="py-9 bg-black  w-full col-auto md:col-span-2 bg-cat2 flex flex-col justify-center items-center space-y-3">
    <h3 className="font-extrabold text-4xl text-white">GET 30% Off</h3>
    <p className='text-white'>USE PROMO CODE</p>
    <button
      aria-label="Redirect user to Dine Week End Sale"
      className="py-1 px-8  text-lg font-medium bg-[#b7adad] rounded-lg tracking-widest"
    >
      DINEWEEKENDSALE
    </button>
  </div>


</div>
</div>
     
    </Wreper>
  )
}

export default Main
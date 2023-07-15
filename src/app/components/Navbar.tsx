'use client'
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { BsCart4 } from 'react-icons/bs';
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Image from 'next/image';
import logo from '../../../public/Logo5.webp';
import Wreper from './Wreper';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Forsigin from '../components/ui/Forsigin';



function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const cartItems = useSelector((state: RootState) => state.cartSlice.items);
  const totalQuantity = useSelector((state: RootState) => state.cartSlice.totalQuantity);
  
  return (
    <Wreper>

      <nav className="bg-white py-6">
        <div className="container mx-auto flex items-center justify-between sm:hidden lg:block">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-xl font-bold text-gray-800 mr-4">
              <Image src={logo} alt="" />
            </Link>
            <div className="flex gap-3">
              <Link href={'/Female'}> Female</Link>
              <Link href="Male">Male</Link>
              <Link href="kids">Kids</Link>
              <Link href="product">All Products</Link>
            </div>
            <div className="flex mr-4 items-center w-22 h-8 border border-gray-300 rounded-lg px-4">
              <CiSearch />
              <input
                type="text"
                placeholder="what you loking for"
                className="border border-gray-300 h-8 rounded-lg py-2 px-4 mr-3 "
              />
            </div>
            <div>
              <Link href="/cart" className="  ">
              <button className="flex p-4 bg-gray-100 rounded-full border-0 relative transition-transform duration-400 ease-in-out">
      <BsCart4 size={22} />
      {totalQuantity > 0 && (
        <span className="absolute top-0 right-5 text-xs text-white bg-red-500 w-4 h-4 rounded-full text-center font-semibold">
          {totalQuantity}
        </span>
      )}
    </button>
              </Link>
           
            </div>
            <Forsigin/>
          </div>
        
        </div>

        <div className="lg:hidden ">
          <RiMenu3Line
            color="black"
            fontSize={27}
            className="absolute  right-0 m-4"
            onClick={() => setToggleMenu(true)}
          />
          {toggleMenu && (
            <div className="">
              <Link href="/">
                <Image
                  className="text-2xl cursor-pointer absolute left-1/2 transform -translate-x-1/2 -translate-y-2/4"
                  src={logo}
                  width={140}
                  height={25}
                  alt="logo"
                />
              </Link>
              <RiCloseLine
                color="black"
                fontSize={27}
                className="close_icon"
                onClick={() => setToggleMenu(false)}
              />
              <ul className="flex flex-col items-center text-center gap-4">
                <Link href="/cart">
                <button className="flex p-4 bg-gray-100 rounded-full border-0 relative transition-transform duration-400 ease-in-out">
      <BsCart4 size={22} />
      {totalQuantity > 0 && (
        <span className="absolute top-0 right-5 text-xs text-white bg-red-500 w-4 h-4 rounded-full text-center font-semibold">
          {totalQuantity}
        </span>
      )}
    </button>
                </Link>
            
                <Link href="/female">Female</Link>
                <Link href="/product/male">Male</Link>
                <Link href="/kids">Kids</Link>
                <Link href="/product">All Products</Link>
              </ul>
            </div>
          )}
        </div>
      </nav>
      
    </Wreper>
  );
}

export default Navbar;

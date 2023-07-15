'use client'
// import { RiDeleteBinLine } from 'react-icons/ri';
// import empty from '../../../public/empty-cart.jpg';
// import Wreper from './Wreper';
// import { oneProductType } from '../utils/Type';
// import { useDispatch, useSelector } from 'react-redux';


// import { RootState } from '../store/store';


// import { removeFromCart } from '../store/slice/cartSlice';
// import Quantity from './ui/Quantity';
// import Link from 'next/link';

// import imageUrlBuilder from '@sanity/image-url'
// import { client } from '../../../sanity/lib/client';
// import Image from 'next/image';
// import BASE_PATH_FORAPI from './Shererd/Basepath';

// const builder: any = imageUrlBuilder(client);

// function urlFor(source: any) {
//   return builder.image(source)
// }
// function handleprocesechecout(){
//      fetch (`${BASE_PATH_FORAPI}api/checkout`,{
//       method :" POST",
//       body: JSON.stringify(items),
//      })
// }


// function CartPage() {
//   const dispatch = useDispatch();
//   const cart = useSelector((state: RootState) => state.cartSlice.items);
//   const quantity = useSelector((state: RootState) => state.cartSlice.totalQuantity);
//   const totalAmount = useSelector((state: RootState) => state.cartSlice.totalAmount);

//   const handleRemoveFromCart = (productId: string) => {
//     dispatch(removeFromCart(productId));
//   };

//   return (
//     <Wreper>
//       {cart.length > 0 ? (
//         <div>
//           <div className='py-6'>
//             <h1 className='text-5xl font-bold'>Shopping Cart</h1>
//           </div>
//           <div className='flex'>
//             <div className='flex gap-7'></div>
//             <div className=' flex-col'>
//               {cart.map((items: oneProductType) => (
//                 <div className='flex gap-6' key={items._id}>
//                   <div className='mb-1'>
//                     <img src={urlFor(items.image).width(300).height(300).url()} />
//                   </div>
//                   <div>
//                     <div className='gap-8'>
//                       <h2 className='text-3xl font-semibozald'>{items.name}</h2>
//                       <h3 className='text-2xl text-red-300'>{items.tags}</h3>
//                       <h2 className='pb-2'>Delivery Estimation</h2>
//                       <h4 className='text-2xl text-red-300'>5 Working Days</h4>
//                       <h1 className='text-2xl font-bold'>${items.price}</h1>
//                     </div>
//                   </div>

//                   <div className='px-14'>
//                     <button onClick={() => handleRemoveFromCart(items._id)}>
//                       <RiDeleteBinLine size={28} />
//                     </button>
//                     <div className='pt-24'>
//                       <Quantity product={items} />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className='bg-gray-400 h-52 w-60'>
//               <h1 className='px-5 pt-2 text-2xl font-semibold'>Order Summary</h1>
//               <div className='flex justify-between gap-5 p-4'>
//                 <p className='text-lg font-semibold'>{quantity}</p>
//                 <h4 className='text-lg font-semibold'>
//                   <span>{quantity}</span> Product
//                 </h4>
//               </div>
//               <div className='flex justify-between gap-5 p-4'>
//                 <h4 className='text-lg font-semibold'>Sub Total</h4>
//                 <h2 className='text-lg font-semibold'>${totalAmount}</h2>
//               </div>
//               <div className='bg-black text-white w-40 mx-8 h-10 rounded-lg'>
//                 <button onClick={handleprocesechecout}
//                   className='px-4 pt-1'>procese checkout
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className='flex-[2] flex flex-col items-center pb-[50px] md:-mt-14 '>
//           <Image
//             src={empty}
//             alt=''
//             width={300}
//             height={300}
//             className='w-[300px] md:w-[400px] mt-10' />
//           <span className='text-3xl font-bold'>Your cart is empty</span>
//           <span className='text-center mt-4'>
//             Looks like you have not added anything to your cart.
//             <br />
//             Go ahead and explore top categories.
//           </span>
//           <Link
//             href='/'
//             className='py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8'
//           >
//             Continue Shopping
//           </Link>
//         </div>
//       )}
//     </Wreper>
//   );
// }
// export default CartPage;

import { RiDeleteBinLine } from 'react-icons/ri';
import empty from '../../../public/empty-cart.jpg';
import Wreper from './Wreper';
import { ImageType, oneProductType } from '../utils/Type';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromCart } from '../store/slice/cartSlice';
import Quantity from './ui/Quantity';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../../../sanity/lib/client';
import Image from 'next/image';
import BASE_PATH_FORAPI from './Shererd/Basepath';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import getStipePromise from '../../../sanity/lib/stripy';
import Checkout from './ui/checkout';
const builder = imageUrlBuilder(client);

function urlFor(source: ImageType[] | SanityImageSource) {
  return builder.image(source);
}

function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cartSlice.items);
  const quantity = useSelector((state: RootState) => state.cartSlice.totalQuantity);
  const totalAmount = useSelector((state: RootState) => state.cartSlice.totalAmount);

  const handleRemoveFromCart = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

 

  return (
    <Wreper>
      {cart.length > 0 ? (
        <div>
          <div className='py-6'>
            <h1 className='text-5xl font-bold'>Shopping Cart</h1>
          </div>
          <div className='flex'>
            <div className='flex gap-7'></div>
            <div className='flex-col'>
              {cart.map((items) => (
                <div className='flex gap-6' key={items._id}>
                  <div className='mb-1'>
                    <img src={urlFor(items.image).width(300).height(300).url()} />
                  </div>
                  <div>
                    <div className='gap-8'>
                      <h2 className='text-3xl font-semibozald'>{items.name}</h2>
                      <h3 className='text-2xl text-red-300'>{items.tags}</h3>
                      <h2 className='pb-2'>Delivery Estimation</h2>
                      <h4 className='text-2xl text-red-300'>5 Working Days</h4>
                      <h1 className='text-2xl font-bold'>${items.price}</h1>
                    </div>
                  </div>

                  <div className='px-14'>
                    <button onClick={() => handleRemoveFromCart(items._id)}>
                      <RiDeleteBinLine size={28} />
                    </button>
                    <div className='pt-24'>
                      <Quantity product={items} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='bg-gray-400 h-52 w-60'>
              <h1 className='px-5 pt-2 text-2xl font-semibold'>Order Summary</h1>
              <div className='flex justify-between gap-5 p-4'>
                <p className='text-lg font-semibold'>{quantity}</p>
                <h4 className='text-lg font-semibold'>
                  <span>{quantity}</span> Product
                </h4>
              </div>
              <div className='flex justify-between gap-5 p-4'>
                <h4 className='text-lg font-semibold'>Sub Total</h4>
                <h2 className='text-lg font-semibold'>${totalAmount}</h2>
              </div>
              <Checkout/>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex-[2] flex flex-col items-center pb-[50px] md:-mt-14 '>
          <Image
            src={empty}
            alt=''
            width={300}
            height={300}
            className='w-[300px] md:w-[400px] mt-10'
          />
          <span className='text-3xl font-bold'>Your cart is empty</span>
          <span className='text-center mt-4'>
            Looks like you have not added anything to your cart.
            <br />
            Go ahead and explore top categories.
          </span>
          <Link
            href='/'
            className='py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8'
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </Wreper>
  );
}

export default CartPage;



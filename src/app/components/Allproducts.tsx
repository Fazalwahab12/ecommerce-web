



"use client"


import { FC } from 'react';
import { oneProductType } from '../utils/Type';
import Allcard from '../utils/Allcard';
import Wreper from '../components/Wreper';

const AllProduct: FC<{ productData: Array<oneProductType> }> = ({ productData }) => {
  return (
    <Wreper>
      
    <div className=' flex flex-wrap gap-8  '>
      {productData.map((item: oneProductType, index: number) => (
        <Allcard key={index} alleproductdata={item} />
      ))}
    </div>
    </Wreper>
  );
}

export default AllProduct;

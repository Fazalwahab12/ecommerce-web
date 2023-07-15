
// //https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-05-30/data/query/production?query=*%5B_type%20%3D%3D%20%22product%22%20%26%26%20slug.current%20%3D%3D'raglan-sweatshirt'%5D

// import Productdetails from '@/app/components/Shererd/Productdetails';
// import { responseType } from '@/app/utils/Type';
// import { client } from '../../../../sanity/lib/client';

// async function fetchDataBySlug(slug: string) {
//   let res = await client.fetch(`*[_type == "product" && slug.current ==${slug}]{
//     name,
//     "image": image[0],
//     category,
//     tags,
//     "slug": slug.current,
//     price,
//     productCare,
//     productCare
//   }`)
//   return res[0]
// }
// const Catalog = async ({ params }: { params: { slug: string } }) => {
//   let data: responseType = await fetchDataBySlug(params.slug);
  
    
//   return (
//     <div>
//        <Productdetails item={data} />
//     </div>
//   );
// };

// export default Catalog;





'use client'
import { FC, useEffect, useState } from 'react';
import { responseType, oneProductType } from '@/app/utils/Type';
import { client } from '../../../../sanity/lib/client';

import Productdetails from '../../components/Shererd/Productdetails';

import Wreper from '@/app/components/Wreper';

// export async function generateStaticParams() {
   
//   let res = await client.fetch(
//     '*[_type == "product"')
//   console.log(res);
//   return   res.result.map((item :oneProductType)=>{slug : item.slug})
  
  
// }


async function fetchDataBySlug(slug: string) {
  let res = await client.fetch(
    `*[_type == "product" && slug.current == "${slug}"]{
      name,
      "image": image[0],
      category,
      tags,
      "slug": slug.current,
      price,
      productCare
    }`
  );
  return res[0]; // Return the first item from the response array
}

const Catalog: FC<{ params: { sluq: string } }> = ({ params }) => {
  const [data, setData] = useState<oneProductType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const productData = await fetchDataBySlug(params.sluq);
      setData(productData);
    };

    fetchData();
  }, [params.sluq]);

  if (!data) {
    return <div>Loading...</div>; // Optional loading state
  }

  return (
    <Wreper>
 
    <div>
      <Productdetails item={data} />
    </div>
  
    </Wreper>
  );
};

export default Catalog;

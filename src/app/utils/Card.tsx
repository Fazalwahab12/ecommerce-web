import {FC } from 'react'
import {urlForImage} from '../../../sanity/lib/image'


import {oneProductType} from "../utils/Type"
import Image from 'next/image'
import Link from 'next/link'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../../sanity/lib/client';



const builder: any = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source)
}
const Card: FC<{singleproductdata :oneProductType} > =({singleproductdata})=>{
  
    
  return (
    <Link href={`/Cataloge/${singleproductdata.slug.current}`}>
    <div className=''>
        <div className=''>
        <Image width={1000} height={1000} src={urlFor(singleproductdata.image[0]).width(1000).height(1000).url()} alt={singleproductdata.name} />
        </div>

        <div>
        <p>Category: {singleproductdata.category}</p>
            <p>Price: {singleproductdata.price}</p>
        </div>
    </div>
    </Link>
  )
}

export default Card
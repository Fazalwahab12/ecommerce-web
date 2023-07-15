// import type { Image as IImage } from 'sanity'


// export type Product = {
//   name: string;
//   image: IImage;
//   tags:string
//   price: number;
//   _id: string;
//   slug:{
//     current:string
//   }
//   productDetails: string;
//   productCare: string;
//   Category:{} {
//     name: string
//   }
// }






// export interface ImageType{
//     asset: Asset;
//     _type: string;
//     _key: string;
//   }
  
//     export  interface Asset {
//     _ref: string;
//     _type: string;
//   }
  
//   export  interface Slugtype {
//     current: string;
//     _type: string;
//   }
  
//   export type oneProductType= {
//     _createdAt: string;
//     _id: string;
//     slug: any ;
//     productDetails: string;
//     price: number;
//     _type: string;
//     productCare: string;
//     tags: string;
//     name: string;
//     category: string;
//     _updatedAt: string;
//     image: Array<ImageType>
//     _rev: string;
//     totalAmount: number;
//     totalQuantity: number;
//     totalPrice:number
//     quantity:number
//   }
//   export interface responseType {
//     result: Array<oneProductType>
// }




export interface Asset {
  _ref: string;
  _type: string;
}

export interface Slugtype {
  current: string;
  _type: string;
}

export interface ImageType {
  asset: Asset;
  _type: string;
  _key: string;
}

export interface oneProductType {
  _createdAt: string;
  _id: string;
  slug: Slugtype;
  productDetails: string;
  price: number;
  _type: string;
  productCare: string;
  tags: string;
  name: string;
  category: string;
  _updatedAt: string;
  image: ImageType[];
  _rev: string;
  totalAmount: number;
  totalQuantity: number;
  totalPrice: number;
  quantity: number;
 
}

export interface responseType {
  result: oneProductType[];
}

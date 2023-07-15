import { client } from "../../../sanity/lib/client";
import { oneProductType } from '../utils/Type';

export const getProductData = async (): Promise<oneProductType[]> => {
  const res = await client.fetch<oneProductType[]>(`*[_type=="product"]{
    title,
    name,
    price,
    _id,
    image,
    productDetails,
    productCare,
    Category->{
      name
    }
  }`);
  return res;
};

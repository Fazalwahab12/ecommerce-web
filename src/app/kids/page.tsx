import AllProduct from "../components/Allproducts";
import Wreper from "../components/Wreper";

async function featchdataallproduct(){
  let res = await  fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-05-30/data/query/production?query=*%5B_type%20%3D%3D%20%22product%22%20%26%26%20category%20%3D%3D%20%22Kids%22%5D%0A`)
  if(!res.ok){
     throw  new Error('failed to fetch')
  }
 return res.json()
 }
 
 export default async function page() {
         let {result} =await featchdataallproduct()
   
     
     return (
      <Wreper>
         <div className="mt-10  mb-10">
           {result && result.length > 0 ? (
             <AllProduct productData={result} />
           ) : (
             <div>No products list.</div>
           )}
         </div>
         </Wreper>
       );
           }
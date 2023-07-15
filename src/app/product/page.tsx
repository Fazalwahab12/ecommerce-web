
// import Allproduct from "../components/Allproducts";
// import BASE_PATH_FORAPI from "../components/Shererd/Basepath";
// async function featchaallproductdata(){
//     let res = await  fetch(`${BASE_PATH_FORAPI}/api/sanity?start=1&end=20`)
//     if(!res.ok){
//         throw  new Error('failed to fetch')
//      }
//     return res.json()
//     }

import AllProduct from "../components/Allproducts";
import Wreper from "../components/Wreper";

    
//     export default async function product() {
//             let productdata =await featchaallproductdata()
       
        
//         return (
          
//             <div>
//               <Allproduct productdata={productdata} />
//             </div>
//           );
//               }











async function featchdataallproduct(){
  let res = await  fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2023-05-30/data/query/production?query=*%5B_type%20%3D%3D%20%22product%22%20%5D`)
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
             <div>No products found.</div>
           )}
         </div>
         </Wreper>
       );
           }
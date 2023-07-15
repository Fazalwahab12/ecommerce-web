// import { oneProductType } from "@/app/utils/Type";
// import { NextRequest, NextResponse } from "next/server";
// import Stripe from 'stripe';

// interface typedata {
//   price: string;
//   name: string;
//   quantity: number;
// }

// let origindata: Array<typedata> = [
//   {
//     price: 'price_1NTmZcEzE7zEowamRrJpOM1K',
//     name: 'Brushed Raglan Sweatshirt',
//     quantity: 1,
//   },
//   {
//     price: 'price_1NTmYaEzE7zEowamHW8zhzG5',
//     name: 'Flex Push Button Bomber',
//     quantity: 1,
//   },
//   {
//     price: 'price_1NTmXREzE7zEowamOQC4OMHT',
//     name: 'Muscle Tank',
//     quantity: 1,
//   },
//   {
//     price: 'price_1NTmVgEzE7zEowamTIMd42SX',
//     name: 'Cameryn Sash Tie Dress',
//     quantity: 1,
//   },
//   {
//     price: 'price_1NTmU9EzE7zEowamQdMeHtAh',
//     name: 'Flex Sweatshirt',
//     quantity: 1,
//   },
//   {
//     price: 'price_1NTmSVEzE7zEowamqPCMF8LX',
//     name: 'Flex Sweatpants',
//     quantity: 1,
//   },
//   {
//     price: 'price_1NTmPzEzE7zEowamhCz6GM7Y',
//     name: 'Raglan Sweatshirt',
//     quantity: 1,
//   },
// ];

// // @ts-ignore
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export async function POST(request: NextRequest) {
//   try {
//     const cartItemsArray: oneProductType[] = []; // Initialize with actual cart items

//     const matchingItems = origindata.filter((item: typedata) => {
//       for (let index = 0; index < cartItemsArray.length; index++) {
//         const element: oneProductType = cartItemsArray[index];
//         if (element.name === item.name) {
//           return true;
//         }
//       }
//     });


//     const lineItemsToSend: any = matchingItems.map((item: typedata) => {
//       for (let index = 0; index < cartItemsArray.length; index++) {
//         const element: oneProductType = cartItemsArray[index];
//         if (element.name === item.name) {
//           return {
//             price: item.price,
//             quantity: element.quantity,
//           };
//         }
//       }
//     });


//     if (lineItemsToSend.length === 0) {
//       return NextResponse.json({ error: "No matching items found" });
//     }

//     const session = await stripe.checkout.sessions.create({
//       line_items: lineItemsToSend,
//       mode: "payment",
//       success_url: `${request.nextUrl.origin}/?success=true`,
//       cancel_url: `${request.nextUrl.origin}/?success=false`,
//     });

//     return NextResponse.json({ link: session.url });
//   } catch (error) {
//     console.log((error as { message: string }).message);
//     return NextResponse.json({ error });
//   }
// }



import { NextRequest, NextResponse } from "next/server";
import Stripe from  'stripe';

const key =process.env.STRIPE_SECRET_KEY || '';

const stripe =new Stripe (key,{

    apiVersion:"2022-11-15"
}) 


 export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  try {
    if (body.length > 0) {
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        
        invoice_creation: {
          enabled: true,
        },
        line_items: body.map((item: any) => {
          return {
            price_data: {
              currency: "pkr",
              product_data: {
                name: item.name,
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 10,
            },
          };
        }),
        phone_number_collection: {
          enabled: true,
        },
        success_url: `${request.headers.get("origin")}/success`,
        cancel_url: `${request.headers.get("origin")}/?canceled=true`,
      });
      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ message: "No Data Found" });
    }
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(err.message);
  }
}
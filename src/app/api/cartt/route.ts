
import { NextRequest, NextResponse } from "next/server";
import { db, maketable } from "../../../../sanity/lib/drizzle";
import { InferModel, eq, sql } from 'drizzle-orm';


export async function GET() {

  try {
   
    const res = await db.select().from(maketable)

    
    return NextResponse.json(res)
  } catch (error) {
    console.log("error", ( error as {message : string }).message);
    return NextResponse.json({ message: "Something went wrong" });
  }
}



export async function POST( req : NextRequest){
  let request = await req.json()
  console.log(request);
  
  try {
    if (request.user_Id && request.product_Id && request.quantity && request.price) {
      let respo = await db.insert(maketable).values(request).returning()
             return NextResponse.json(respo)
    }
            else{
             throw Error ('plese put product_id user_id and quantity')
              
            } 
  } 
  catch (error) {
    console.log("error", ( error as {message : string }).message);
    return NextResponse.json({ message: "Something went wrong" });
  }
}


export async function PUT( req : NextRequest){
  let request = await req.json()
  console.log(request);
  
  try {

      
      let respo = await db.update(maketable).set(request).where(eq(maketable. product_Id, request.product_Id)).returning()
             console.log('put',respo);
             
      return NextResponse.json(respo)
    
           
  } 
  catch (error) {
    console.log("error", ( error as {message : string }).message);
    return NextResponse.json({ message: "Something went wrong" });
  }
}


export async function DELETE( req : NextRequest){
  let url =  req.nextUrl.searchParams
  console.log(url);
  
  try {
if (url.has("product_Id"  ) && url.has("user_Id" )) {
  
  let respo = await db.delete(maketable).where
  (eq(maketable.product_Id,(url.get("product_Id") as string))
  && eq(maketable.product_Id,(url.get("user_Id") as string))
  ).returning()
  console.log('put',respo);
  
return NextResponse.json(respo)
}
      
    
           
  } 
  catch (error) {
    console.log("error", ( error as {message : string }).message);
    return NextResponse.json({ message: "Something went wrong" });
  }
}
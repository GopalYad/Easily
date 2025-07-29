// app/api/test/route.js
import { connectDB } from "../../../lib/connectDb";
import { NextRequest,NextResponse } from "next/server";
import { ImageUpload } from "../../../lib/image-upload";
import { ImageModel } from "../../../models/image.model";

await connectDB(); 
export async function GET(NextResponse) {
 const Images = await ImageModel.find({});
 return NextResponse.json({Images:Image,total:Images.length},{status:200})
}

export const POST = async (request) => {
  const formData = await request.formData();
  const image = formData.get("image");
   console.log({image})
   const data = await ImageUpload(image,'easily-images')

   await ImageModel.create({
    image_url:data?.secure_url,
    public_id:data?.public_id
   })
  return NextResponse.json({ msg: image.name }, {
    status: 200,
  });
};


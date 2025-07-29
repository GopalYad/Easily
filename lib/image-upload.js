import cloudinary from "./cloudinary";

export const ImageUpload=async(File,folder)=>{
    const buffer = await File.arrayBuffer()
    const byte = Buffer.from(buffer)
   return new Promise(async(resolve,reject)=>{
       await cloudinary.uploader.upload_stream({
            resource_type:'auto',
            folder:folder
        },async(err,result)=>{
            if(err)reject(err.message)
            resolve(result)
        }).end(byte)
    })
}
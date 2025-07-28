import mongoose from "mongoose"

//mongodb connection
export async function connectDB(){
    try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log(`connected`)
    }catch(error){
     console.log(error)
    }
}
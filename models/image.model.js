import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    image_url:{
        type:String,
        required:true
    },
    public_id:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

export const ImageModel = mongoose.model('images',ImageSchema)
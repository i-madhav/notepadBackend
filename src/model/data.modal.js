import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    data:{
        type:String,
        required:true
    }
} , {timestamps:true});

export const Data = mongoose.model("Data" , dataSchema);
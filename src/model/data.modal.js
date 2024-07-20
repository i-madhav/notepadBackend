import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    data:{
        type:String,
    }
} , {timestamps:true});

export const Data = mongoose.model("Data" , dataSchema);
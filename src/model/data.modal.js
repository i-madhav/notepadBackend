import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    text:{
        type:String,
    }
} , {timestamps:true});

export const Data = mongoose.model("Data" , dataSchema);
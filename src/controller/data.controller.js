import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";
import { Data } from "../model/data.modal.js";

const generateDocument = asyncHandler(async(req , res) => {
    console.log("I am running");
    const {id,content} = req.body;

    if(id){
        const dataContent = await Data.findById(id);
        if(!dataContent) throw new ApiError(404 , "data is not found");
        dataContent.data = content;
        await dataContent.save({validateBeforeSave:false}); 
       return res.status(200).json(new ApiResponse(200 , dataContent , "Content Updated"));
    }

    const dataContent = await Data.create({
        data:content || ""
    });

    const createdData = await Data.findById(dataContent._id);
    if(!createdData) throw new ApiError(500 , "data was not created");

    return res.status(200)
                .json(new ApiResponse(200 , createdData , "Data created successfully"));

});

export {generateDocument};
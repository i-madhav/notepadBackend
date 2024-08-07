import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/apiResponse.js";
import ApiError from "../utils/apiError.js";
import { Data } from "../model/data.modal.js";

const generateDocumentAndSaveDocument = asyncHandler(async (req, res) => {
    const { id, content } = req.body;
    if (id) {
        const dataContent = await Data.findById(id);
        if (!dataContent) throw new ApiError(404, "data is not found");
        dataContent.text = content;
        await dataContent.save({ validateBeforeSave: false });
        console.log(dataContent.text);
        return res.status(200).json(new ApiResponse(200, dataContent, "Content Updated"));

    } else {
        const dataContent = await Data.create({
            text: content || ""
        });

        const createdData = await Data.findById(dataContent._id);
        if (!createdData) throw new ApiError(500, "data was not created");

        return res.status(200)
            .json(new ApiResponse(200, createdData, "Data created successfully"));
    }

});

const fetchDocument = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const dataRes = await Data.findById(id);
    if (!dataRes) throw new ApiError(404, "Data not found");

    return res.status(200)
        .json(new ApiResponse(200, dataRes, "data fetched"));
});

export { generateDocumentAndSaveDocument, fetchDocument };
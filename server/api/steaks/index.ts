import SteakModel from "~~/server/models/Steak.model";

export default defineEventHandler(async(event) => {
    return await SteakModel.find().populate("imported");
});
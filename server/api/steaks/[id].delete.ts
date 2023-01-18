import SteakModel from "~~/server/models/Steak.model";

export default defineEventHandler(async(event) => {
    // get id from params
    const id = event.context.params.id;

    // remove steak
    try{
        await SteakModel.findByIdAndDelete(id);
        return {
            message: "Steak Removed"
        };
    }catch(e) {
        throw createError({
            message: e.message
        })
    }
});
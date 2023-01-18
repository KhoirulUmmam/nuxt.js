import SteakModel from "~~/server/models/Steak.model";
import { SteakSchema } from "~~/server/validation";

export default defineEventHandler(async(event) => {
    const body = await useBody(event);
    
    // get id from params
    const id = event.context.params.id;

    // validate
    let { error } = SteakSchema.validate(body, { abortEarly: true, allowUnknown: true });
    if (error) {
        throw createError({
            message: error.message.replace(/"/g, ""),
            statusCode: 400,
            fatal: false,
        });
    }

    // Update steak
    try{
        await SteakModel.findByIdAndUpdate(id, body);
        return { message: "Steak updated"};
    } catch (e) {
        throw createError({
            message: e.message,
        });
    }
});
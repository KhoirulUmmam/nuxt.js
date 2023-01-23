import SteakModel from "~~/server/models/Steak.model";
import { SteakSchema } from "~~/server/validation";

export default defineEventHandler(async(event) => {
    // get data form body
    const body = await readBody(event);

    // validate
    let { error } = SteakSchema.validate(body);
    if (error) {
        throw createError({
            message: error.message.replace(/"/g, ""),
            statusCode: 400,
            fatal: false,
        });
    }

    // create steak
    try {
        await SteakModel.create(body);
        return {
            message: "Steak created"
        };
    }catch(e){
        throw createError({
            message: e.message,
        });
    }
});
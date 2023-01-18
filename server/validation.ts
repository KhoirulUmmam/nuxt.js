import Joi from "joi";

// import validation
export const ImportSchema = Joi.object({
    name: Joi.string().min(3).required(),
});

// steak validation
export const SteakSchema = Joi.object({
    name: Joi.string().min(3).required(),
    quality: Joi.string().min(3).required(),
    imported: Joi.array(),
    shipment: Joi.date().required(),
    pageCount: Joi.number()
});
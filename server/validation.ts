import Joi from "joi";

// steak validation
export const SteakSchema = Joi.object({
	nama: Joi.string().min(3).required(),
	kualitas: Joi.string().max(10).required(),
	kelurahan: Joi.string().min(3).required(),
	kecamatan: Joi.string().min(3).required(),
	kota: Joi.string().min(3).required(),
	pengiriman: Joi.date().required(),
});
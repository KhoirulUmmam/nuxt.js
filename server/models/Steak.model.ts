import mongoose from "mongoose";

// Steak schema
const schema: mongoose.Schema = new mongoose.Schema(
    {
        nama: {
            type: String,
            required: true,
        },
        pengiriman: {
            type: Date,
            required: true,
        },
        kelurahan: {
            type: String,
            required: true,
        },
        kecamatan: {
            type: String,
            required: true,
        },
        kota: {
            type: String,
            required: true,
        },
        kualitas: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true
    }
);

// Steak model
export default mongoose.model("Steak", schema);
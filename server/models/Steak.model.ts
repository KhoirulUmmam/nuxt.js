import mongoose from "mongoose";

// import schema
const schema: mongoose.Schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        shipment: {
            type: Date,
            required: true,
        },
        quality: String,
        imported: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Import",            
            },
        ],
        pageCount: Number,
    },
    {
        timestamps: true
    }
);

// Import model
export default mongoose.model("Import", schema);
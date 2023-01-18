import mongoose from "mongoose";

// import schema
const schema: mongoose.Schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

// Import model
export default mongoose.model("Import", schema);
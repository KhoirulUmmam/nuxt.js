import mongoose from "mongoose";

export default async(_nitroApp) => {
    // run your connetc code here
    const config = useRuntimeConfig();
    // connect to mongodb
    mongoose
        .connect(config.MONGO_URI)
        .then(() => console.log(`Connected to DB`))
        .catch((e) => console.log(e))
}
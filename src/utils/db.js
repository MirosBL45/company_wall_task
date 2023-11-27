import mongoose from "mongoose";

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
    } catch (error) {
        throw new Error('Connection failed!');
    }
}

export default connectToDB
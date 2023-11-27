import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    role_name: {
        type: String,
        required: true,
    },
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model('User', userSchema);
// it makes User collection in DB
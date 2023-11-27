import mongoose from "mongoose";

const { Schema } = mongoose;

const roleSchema = new Schema({
    role_name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
}, { timestamps: true });

mongoose.models = {}
export default mongoose.model('Role', roleSchema);
// it makes Role collection in jovicData (name of DB)
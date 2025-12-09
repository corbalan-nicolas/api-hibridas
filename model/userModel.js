import mongoose from "mongoose";

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        required: true,
        default: 'user',
        lowercase: true,
        trim: true,
    },
    allergy: {
        type: Schema.Types.ObjectId,
        // A que tabla está referenciando
        ref: "intolerances",
        required: true
    },
    created_at: Date,
    updated_at: Date,
});

const model = mongoose.model('User', mySchema);

export default model;
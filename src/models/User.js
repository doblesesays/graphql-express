import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    lastname: String,
    age: Number,
})

export default model('User', UserSchema);
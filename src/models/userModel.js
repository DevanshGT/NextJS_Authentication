import mongoose, { Schema, mongo } from "mongoose";
import { ObjectId } from "mongoose";
const UserSchema = new mongoose.Schema({
    name: {type:String},
    email: {type:String},
    text: {type:String},
    movie_id: {type: ObjectId},
    // password:{type:String},
    forgetPasswordToken: String,
    forgetPasswordTokenExpiry:Date,
    verifyToken: String,
    verifyTokenExpiry: Date,  
})
const Users = mongoose.models.comments || mongoose.model("comments",UserSchema)
export default Users;
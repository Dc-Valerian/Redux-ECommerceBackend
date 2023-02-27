import mongoose from "mongoose";
import { IUser } from "../AllInterfaces/AllInterfaces";

interface UserData extends IUser,mongoose.Document{}

const UserSchema = new mongoose.Schema<IUser>({
    name:{
        type:String,
        unique:true,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
    },
    cart:[]
},{timestamps:true})

export default mongoose.model<UserData>("users",UserSchema)
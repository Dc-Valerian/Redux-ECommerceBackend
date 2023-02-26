import mongoose from "mongoose";
import { IUser } from "../AllInterfaces/AllInterfaces";

interface UserData extends IUser,mongoose.Document{}

const UserSchema = new mongoose.Schema<IUser>({
    name:{
        type:String
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
    isAdmin:{
        type:Boolean,
    },
    cart:[]
},{timestamps:true})

export default mongoose.model<UserData>("users",UserSchema)
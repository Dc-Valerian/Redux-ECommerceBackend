import mongoose from "mongoose";
import { IProduct } from "../AllInterfaces/AllInterfaces";

interface ProductData extends IProduct,mongoose.Document{}

const ProductSchema = new mongoose.Schema<IProduct>({
    title:{
        type:String
    },
    desc:{
        type:String,
    },
    price:{
        type:Number,
    },
    quantity:{
        type:Number,
    },
    category:{
        type:String,
    },
    status:{
        type:Boolean
    }
},{timestamps:true})

export default mongoose.model<[ProductData]>("products",ProductSchema)
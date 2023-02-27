import UserModel from "../Model/User.Model";
import ProductsModel from "../Model/Products.Model";
import express,{Request,Response} from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const router = express.Router()

// TO GET ALL USERS

router.get("/users",async(req:Request,res:Response)=>{
    try {
        const data = await UserModel.find()
        return res.status(200).json({
            message:`Successfully Got all ${data.length} Users`
        })
        
    } catch (error) {
        res.status(404).json({
			message: "an error occured {couldn't get all users}",
            error
		});
    }
})

// REGISTER A USER
router.post(()=>{
    
})
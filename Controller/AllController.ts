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
            message:`Successfully Got all ${data.length} Users`,
            data:data
        })
        
    } catch (error) {
        res.status(404).json({
			message: "an error occured {couldn't get all users}",
            error
		});
    }
})

// REGISTER A USER
router.post("/register",async(req:Request,res:Response)=>{
    try {
        const {name,email,password} = req.body;
     
        const salt: string = await bcrypt.genSalt(12);
        const hashed: string = await bcrypt.hash(password, salt);

        const data = await UserModel.create({
            name,
            email,
            password:hashed,
            isAdmin:false
        });
        return res.status(200).json({
			message:`Successfully Regsitered ${data.name}`,
			data: data,
            token: jwt.sign(
				{ _id: data._id },
				"Ths-57aenrn-53q4yhnae-05q3ujn",
				{ expiresIn: "1d" },
			),
        });
    } catch (error) {
        res.status(404).json({
			message: "an error occured{couldn't register user}",
            error
		});
    }
})


// TO LOGIN
router.post("/login",async(req:Request,res:Response)=>{
    try {
        const {name,email} = req.body;

        const data = await UserModel.findOne({email:email})

        if(data){
            return res.status(200).json({
                message:`${data.name},you have successfully login`,
                data:data
            })
        }else{
            return res.status(200).json({
				message: "user not found",
			});
        }
    } catch (error) {
        res.status(404).json({
			message: "an error occured",
		});
    }
})

export default router;
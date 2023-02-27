import UserModel from "../Model/User.Model";
import ProductsModel from "../Model/Products.Model";
import express,{Request,Response} from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const router = express.Router()


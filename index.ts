import express, { Application } from "express"
import cors from "cors"
import mongoose from "mongoose"


const PORT:number = 3020;

const url ="mongodb://0.0.0.0:27017/EcommercePractice"

const app:Application = express()

app.use(express.json())
app.use(cors())

mongoose.connect(url).then(()=>{
    console.log("DataBase is Connected")
})

app.listen(PORT,()=>{
    console.log(`Listening to Port: ${PORT}`);
})
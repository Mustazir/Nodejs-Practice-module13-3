import { Request, Response } from "express";
import User from "./user.model";



export const registerUser =async(req:Request,res:Response)=>{


    const payload = req.body; //payload and data are same, just its a posh name
    const user =new User(payload);


    const data=await user.save()

    res.send({
        success:true,
        message:"User registered successfully",
        data
    })
}
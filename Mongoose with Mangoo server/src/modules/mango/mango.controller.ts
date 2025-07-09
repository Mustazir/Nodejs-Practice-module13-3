import { Request, Response } from "express";
import Mango from "./mango.model";


export const createMango =async (req:Request,res:Response)=>{

    const payload =req.body
    const mango= new Mango(payload);

    const data =await mango.save()
        res.send({
        success:true,
        message:"Mango Create successfully",
        data
    })
}
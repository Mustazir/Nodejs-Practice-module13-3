import { model, Schema } from "mongoose";


const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["ADMIN","CUSTOMER"],
        default:"CUSTOMER"
    }
})


const User=model<IUser>("User",userSchema);
export default User;
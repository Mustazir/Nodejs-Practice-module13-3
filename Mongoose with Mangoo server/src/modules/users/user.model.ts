import { model, Schema } from "mongoose";


const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate :{
            validator:function(value:string){
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
            },
            message:"Please provide a valid email address"
        },
        immutable:true // This will prevent email from being changed once set
    },
    phone:{
        type:Number,
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
},{
    timestamps:true, // This will add createdAt and updatedAt fields
    versionKey:false // This will remove the __v field from the schema
},

)


const User=model<IUser>("User",userSchema);
export default User;
import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interfaces";

const userSchema = new Schema<IUser>({

    firstName:{
        type: String,
        required: true,
        trim: true,
        minlength: [4,'First name must be at least 4 characters long {VALUE}'],
    },
    lastName:{
        type: String,
        required: true,
        trim: true 
    },
    age:{
        type:Number,
        required: true,
        min: [18, 'Age must be at least 18 years {VALUE}'],
    },
    password:{
        type: String,
        required: true,
   
    },
    email:{
        type: String,
        required: true,
        unique: true, //this will make sure that email is unique
        trim: true ,
        lowercase: true, //this will make sure that email is always in lowercase
    },
    role:{
        type: String,
        enum: ['user', 'admin'], //this will make sure that role is either user or admin
        default: 'user', //default role is user,
        lowercase: true, //this will make sure that role is always in lowercase
    }
},{
    versionKey: false, //this will remove __v field from the schema
    timestamps: true, //this will add createdAt and updatedAt fields to the schema
})

export const User =model<IUser>("User", userSchema); //here User is the name of the model and userSchema is the schema we created above. This will create a collection called users in the database.
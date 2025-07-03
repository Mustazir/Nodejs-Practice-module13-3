import { model, Schema } from "mongoose";
import { IAddress, IUser } from "../interfaces/user.interfaces";
import validator from "validator";

// sub schema for address 
const addressSchema = new Schema<IAddress>(
  {
    street:{
      type:String,
    },
    city:{
      type:String,
    },

    zipCode:{
      type:Number,
    },
  },{
    _id: false, //this will remove _id field from the address schema
  }
)

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minlength: [4, "First name must be at least 4 characters long {VALUE}"],
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
      min: [18, "Age must be at least 18 years {VALUE}"],
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,

    //   Custom validation for email using Libreary

    validate:[validator.isEmail,`{VALUE} is not valid email` ],

      // Custom validation for email

      /*  validate:{
            validator: function(value){
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); //this will check if the email is valid or not
            },
            message: '{VALUE} is not a valid email address', //this will show the error message if email is not valid
        },
    */

      required: true,
      unique: true, //this will make sure that email is unique
      trim: true,
      lowercase: true, //this will make sure that email is always in lowercase
    },
    role: {
      type: String,
      enum: {
        values: ["user", "admin"], //this will make sure that role is either user or admin
        message: "{VALUE} is not a valid role, must be either user or admin", //this will show the error message if role is not user or admin
      },
      default: "user", //default role is user,
      lowercase: true, //this will make sure that role is always in lowercase
    },
    address:{
      type : addressSchema,
    }
  },
  {
    versionKey: false, //this will remove __v field from the schema
    timestamps: true, //this will add createdAt and updatedAt fields to the schema
  }
);

export const User = model<IUser>("User", userSchema); //here User is the name of the model and userSchema is the schema we created above. This will create a collection called users in the database.

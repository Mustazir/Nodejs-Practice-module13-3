import { Model, model, Schema } from "mongoose";
import { IAddress, IUser, UserInstanceMethod, UserStaticMethod, } from "../interfaces/user.interfaces";
import validator from "validator";
import bcrypt from "bcryptjs"; 
import { Note } from "./note.model";


// sub schema for address 
const addressSchema = new Schema<IAddress> (
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

const userSchema = new Schema<IUser ,UserStaticMethod,UserInstanceMethod  > ( // its the stracture for create custom Instance Method -----  ====> new Schema<IUser , Model<IUser>,UserInstanceMethod  <== & its for create custom Static Method ----- ===> new Schema<IUser ,UserStaticMethod,UserInstanceMethod <====
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

    /*
      ----Custom validation for email----

        validate:{
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
    },
    
  },
  {
    versionKey: false, //this will remove __v field from the schema
    timestamps: true, //this will add createdAt and updatedAt fields to the schema
  }
);


// ---- it use when we use Instance Method ----
userSchema.method("hasPassword", async function (plainPassword: string){
  const password = await bcrypt.hash(plainPassword, 10); //here 10 is the salt rounds, it will hash the password with 10 rounds of salt
  console.log("password", password);
  return password
});


// ---- it use when we use Static Method ----

userSchema.static("hasPassword", async function (plainPassword: string){
  const password = await bcrypt.hash(plainPassword, 10); //here 10 is the salt rounds, it will hash the password with 10 rounds of salt
  console.log("static password", password);
  return password
});

// -----Pre Save Hook(document Middle Wire)----


userSchema.pre("save",async function(next){
  this.password= await bcrypt.hash(this.password, 10); //when we use it no need the static or instance method
  next(); 
})

// ----Post Save Hook(document Middle Wire)----

userSchema.post("save",async function(docs,next){
  console.log(`${docs.email} has been saved successfully`);
  next();
})
//  -----Post Hook(Query Middle Wire)-----

userSchema.post("findOneAndDelete",async function(doc,next){

  if(doc){
      await Note.deleteMany({user:doc._id})
  }
  next();
})




/*
    -----when use just INstance Method-----

export const User = model("User", userSchema);

*/


// -----when use just Static Method-----
export const User = model<IUser,UserStaticMethod>("User", userSchema); //here User is the name of the model and userSchema is the schema we created above. This will create a collection called users in the database.

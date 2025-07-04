import express, { Request, Response } from "express";
import { User } from "../models/user.model";

import z from "zod";
import bcrypt from "bcryptjs";
export const userRoutes = express.Router();

const zodUserSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
  password: z.string(),
  email: z.string(),
  role: z.string().optional(),
});

// in app.ts file this app.use(" ",userRoutes) use for the /note route

// Create a new note
userRoutes.post("/create-user", async (req: Request, res: Response) => {
  try {
    /*
   ------its use for zod validation------
   const zodbody = await zodUserSchema.parseAsync(req.body);  

   console.log("zod",body);
   */

    const body = req.body;

    /*
  ------Password Bcrypting without Instance Method ------

    const password = await bcrypt.hash(body.password, 10); //here 10 is the salt rounds, it will hash the password with 10 rounds of salt
   body.password = password; //here we are replacing the password with the hashed password

    */

    /*
  ------Static method to create user------
  const users = await User.create(body);

  */

    /*

     ------Custom Instance method to create user with passwor bcrypting ------
    const user = new User(body);

    const password = await user.hasPassword(body.password); //here we are hashing the password using the instance method hasPassword
    user.password = password;
    await user.save(); //here we are saving the user to the database

  */

    // ----Custom Static Methods----
/*
    const password = await User.hasPassword(body.password);
    body.password = password;
    */
  //  --we use pre save hook so that just this works now 
    const user = await User.create(body);

    res.status(201).json({
      message: "user created successfully",
      user,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      error,
    });
    console.log(error);
  }
});
// Get a single note by ID
userRoutes.get("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const user = await User.findById(userId);
  res.status(201).json({
    message: "user fetched successfully",
    user,
  });
});
// Get all users
userRoutes.get("/", async (req: Request, res: Response) => {
  const body = req.body;
  const user = await User.find();

  res.status(201).json({
    massage: "All users fetched successfully",
    user,
  });
});
// Update a note by ID

userRoutes.patch("/:userId", async (req: Request, res: Response) => {
  const updateBody = req.body;
  const userId = req.params.userId;
  const user = await User.findByIdAndUpdate(userId, updateBody, { new: true }); // hre new:true will return the updated note imidiatly

  /*
  --same another userRoutes aproach here we can update using title or some other field as well nut better the first userRoutesroach
  
  const note = await User.updateOne({ _id: noteId}, updateBody, { new: true });
  const note = await User.findOneAndUpdate({ _id: noteId}, updateBody, { new: true });
  */

  res.status(201).json({
    massage: "user updated successfully",
    user,
  });
});
userRoutes.delete("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const deleteuser = await User.findByIdAndDelete(userId);

  /*
  -----same another userRoutesroach here we can delete using title or some other field as well nut better the first userRoutesroach----
  const note = await User.delteOne({ _id: noteId});
  const note = await User.findOneAndDelete({ _id: noteId});

  */

  res.status(201).json({
    massage: "user deleted successfully",
    deleteuser,
  });
});

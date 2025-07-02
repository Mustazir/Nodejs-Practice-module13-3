import express, { Request, Response } from "express";
import { User } from "../models/user.model";

export const userRoutes= express.Router();


// in app.ts file this app.use(" ",userRoutes) use for the /note route

// Create a new note
userRoutes.post("/create-user", async (req: Request, res: Response) => {
  // ---- userRoutesroach 2 ------
  const body = req.body;
  const users = await User.create(body);

  // ---- userRoutesroach 1------

  // const myNote=new Note({
  //     title:'learn express',
  //     content:'learn express with typescript',
  // })
  // await myUser.save();

  res.status(201).json({
    message: "user created successfully",
    users,
  });
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

  // const note = await User.updateOne({ _id: noteId}, updateBody, { new: true });
  // const note = await User.findOneAndUpdate({ _id: noteId}, updateBody, { new: true });
  //--same another userRoutesroach here we can update using title or some other field as well nut better the first userRoutesroach

  res.status(201).json({
    massage: "user updated successfully",
    user,
  });
});
userRoutes.delete("/:userId", async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const deleteuser = await User.findByIdAndDelete(userId);

  // const note = await User.delteOne({ _id: noteId});
  // const note = await User.findOneAndDelete({ _id: noteId});
  //--same another userRoutesroach here we can delete using title or some other field as well nut better the first userRoutesroach

  res.status(201).json({
    massage: "user deleted successfully",
    deleteuser,
  });
});

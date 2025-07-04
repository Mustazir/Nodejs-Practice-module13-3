import express, { Request, Response } from "express";
import { Note } from "../models/note.model";


export const noteRoutes= express.Router();


// in app.ts file this app.use(" ",noteRoutes) use for the /note route

// Create a new note
noteRoutes.post("/create-note", async (req: Request, res: Response) => {
  // ---- noteRoutesroach 2 ------
  const body = req.body;
  const notes = await Note.create(body);


  /*
  ---- noteRoutesroach 1------

  const myNote=new Note({
  title:'learn express',
  content:'learn express with typescript',
  })
  await myNote.save();

 */


  res.status(201).json({
    message: "Note created successfully",
    notes,
  });
});
// Get a single note by ID
noteRoutes.get("/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const note = await Note.findById(noteId);
  res.status(201).json({
    message: "Note created successfully",
    note,
  });
});
// Get all notes
noteRoutes.get("/", async (req: Request, res: Response) => {
  const body = req.body;
  const note = await Note.find().populate("user"); // this will populate the user field with the user data

  res.status(201).json({
    note,
  });
});
// Update a note by ID

noteRoutes.patch("/:noteID", async (req: Request, res: Response) => {
  const updateBody = req.body;
  const noteId = req.params.noteID;
  const note = await Note.findByIdAndUpdate(noteId, updateBody, { new: true }); // hre new:true will return the updated note imidiatly

  /*
  -----same another noteRoutesroach here we can update using title or some other field as well nut better the first noteRoutesroach----

  const note = await Note.updateOne({ _id: noteId}, updateBody, { new: true });
  const note = await Note.findOneAndUpdate({ _id: noteId}, updateBody, { new: true });
  

  */
  
  res.status(201).json({
    note,
  });
});
noteRoutes.delete("/:noteID", async (req: Request, res: Response) => {
  const noteId = req.params.noteID;
  const deletenote = await Note.findByIdAndDelete(noteId);


  /*
  ----same another noteRoutesroach here we can delete using title or some other field as well nut better the first noteRoutesroach----

  const note = await Note.delteOne({ _id: noteId});
  const note = await Note.findOneAndDelete({ _id: noteId});

  */
  

  res.status(201).json({
    deletenote,
  });
});

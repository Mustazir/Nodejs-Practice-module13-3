import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";
import { title } from "process";

const app: Application = express();

app.use(express.json()); //to parse json data from request body

// create note schema
const noteSchema = new Schema({
  title: { type: String, required: true, trim: true }, //here required use if heres no title then give error and trim is used to remove extra white spaces.For example "   hello world   " will be converted to "hello world"
  content: { type: String, default: "" }, //default is used to give default value if no value is given then here it will blank

  category: {
    type: String,
    enum: ["work", "personal", "other"], //enum used for this fixed values only
    default: "other", //default value if no value is given
  },
  pinned: {
    type: Boolean,
    default: false,
  },

  tags: {
    label: { type: String, required: true },
    color: { type: String, default: "blue" }, //default color is blue if no color is given,
  },
},
{
    versionKey: false, //this will remove __v field from the schema
    timestamps: true, //this will add createdAt and updatedAt fields to the schema
});

const Note = model("Note", noteSchema); ///here Note is the name of the model and noteSchema is the schema we created above. This will create a collection called notes in the database.

// Create a new note
app.post("/notes/create-note", async (req: Request, res: Response) => {
  // ---- Approach 2 ------
  const body = req.body;
  const notes = await Note.create(body);

  // ---- Approach 1------

  // const myNote=new Note({
  //     title:'learn express',
  //     content:'learn express with typescript',
  // })
  // await myNote.save();

  res.status(201).json({
    message: "Note created successfully",
    notes,
  });
});
// Get a single note by ID
app.get("/notes/:noteId", async (req: Request, res: Response) => {
  const noteId = req.params.noteId;
  const note = await Note.findById(noteId);
  res.status(201).json({
    message: "Note created successfully",
    note,
  });
});
// Get all notes
app.get("/notes", async (req: Request, res: Response) => {
  const body = req.body;
  const note = await Note.find();

  res.status(201).json({
    note,
  });
});
// Update a note by ID

app.patch("/notes/:noteID", async (req: Request, res: Response) => {
  const updateBody = req.body;
  const noteId = req.params.noteID;
  const note = await Note.findByIdAndUpdate(noteId, updateBody, { new: true }); // hre new:true will return the updated note imidiatly

  // const note = await Note.updateOne({ _id: noteId}, updateBody, { new: true });
  // const note = await Note.findOneAndUpdate({ _id: noteId}, updateBody, { new: true });
  //--same another approach here we can update using title or some other field as well nut better the first approach

  res.status(201).json({
    note,
  });
});
app.delete("/notes/:noteID", async (req: Request, res: Response) => {
  const noteId = req.params.noteID;
  const deletenote = await Note.findByIdAndDelete(noteId);

  // const note = await Note.delteOne({ _id: noteId});
  // const note = await Note.findOneAndDelete({ _id: noteId});
  //--same another approach here we can delete using title or some other field as well nut better the first approach

  res.status(201).json({
    deletenote,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Note App!");
});

export default app;

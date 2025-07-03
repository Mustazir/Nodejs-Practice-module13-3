import { model, Schema } from "mongoose";
import { INote } from "../interfaces/notes.interface";

// create note schema
const noteSchema = new Schema<INote>(
  {
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
    user: { type: Schema.Types.ObjectId, 
      ref: "User", 
      required: true }, //this will create a reference to the User model and required is used to make sure that user is required for every note

    tags: {
      label: { type: String, required: true },
      color: { type: String, default: "blue" }, //default color is blue if no color is given,
    },
  },
  {
    versionKey: false, //this will remove __v field from the schema
    timestamps: true, //this will add createdAt and updatedAt fields to the schema
  }
);

export const Note = model<INote>("Note", noteSchema); ///here Note is the name of the model and noteSchema is the schema we created above. This will create a collection called notes in the database.

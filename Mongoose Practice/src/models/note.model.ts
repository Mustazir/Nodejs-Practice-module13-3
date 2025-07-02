import { model, Schema } from "mongoose";

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

export const Note = model("Note", noteSchema); ///here Note is the name of the model and noteSchema is the schema we created above. This will create a collection called notes in the database.

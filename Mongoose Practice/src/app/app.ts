import express, { Application, Request, Response } from 'express';
import { model, Schema } from 'mongoose';
import { title } from 'process';

const app :Application = express();

app.use(express.json()); //to parse json data from request body

const noteSchema = new Schema({
    title: {type: String, required: true  , trim:true }, //here required use if heres no title then give error and trim is used to remove extra white spaces.For example "   hello world   " will be converted to "hello world"
    content: {type : String, default: "" },  //default is used to give default value if no value is given then here it will blank

    category :{
        type: String,
        enum: ['work', 'personal', 'other'], //enum used for this fixed values only
        default: 'other' //default value if no value is given

    },
    pinned:{
        type: Boolean,
        default: false 
    },

    tags:{
        label: {type : String, required: true},
        color : {type: String, default: 'blue'} //default color is blue if no color is given,

    }


})
const Note=model('Note', noteSchema);

app.post('/notes/create-note',async(req :Request, res: Response) => {
    

    // ---- Approach 2 ------

    const body = req.body;
    const notes=await Note.create(body);


    
    // ---- Approach 1------
    
    // const myNote=new Note({
    //     title:'learn express',
    //     content:'learn express with typescript',
    // })
    // await myNote.save();

    res.status(201).json({
        message: 'Note created successfully',
        notes
    });


})



app.get('/notes/:noteId',async(req :Request, res: Response) => {
    
    const noteId = req.params.noteId;;
    const note=await Note.findById(noteId);

    res.status(201).json({
        message: 'Note created successfully',
        note
    });


})


app.get('/notes',async(req :Request, res: Response) => {
    const body = req.body;
    const note=await Note.find();



    res.status(201).json({
        note
    });


})


app.get('/',(req: Request, res: Response) => {
    res.send('Welcome to Note App!');
});

export default app;
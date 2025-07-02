import express, { Application, Request, Response } from 'express';
import { model, Schema } from 'mongoose';
import { title } from 'process';

const app :Application = express();


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
    }

})
const Note=model('Note', noteSchema);

app.post('/create-note',async(req :Request, res: Response) => {
    const myNote=new Note({
        title:'learn express',
        content:'learn express with typescript',
    })
    await myNote.save();
    res.status(201).json({
        message: 'Note created successfully',
        note: myNote
    });
})


app.get('/',(req: Request, res: Response) => {
    res.send('Welcome to Note App!');
});

export default app;
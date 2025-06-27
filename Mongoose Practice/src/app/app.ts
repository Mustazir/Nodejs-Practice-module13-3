import express, { Application, Request, Response } from 'express';
import { model, Schema } from 'mongoose';
import { title } from 'process';

const app :Application = express();


const noteSchema = new Schema({
    title: String,
    content: String,
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
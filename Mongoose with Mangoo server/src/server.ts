import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import config from './config';
import userRoute from './modules/users/user.routes';
import mangoRoute from './modules/mango/mango.route';
import routes from './modules/routes';

const app=express()
app.use(cors());
app.use(express.json());

app.use(routes)


app.listen(config.port, () => {

    console.log(`Server is running on port ${config.port} `);
})


async function server(){
try {

     await mongoose.connect(config.database_url!);

     console.log('Connected to MongoDB');

} catch (error) {
    console.error('Error connecting to MongoDB:', error);
}
}

server();
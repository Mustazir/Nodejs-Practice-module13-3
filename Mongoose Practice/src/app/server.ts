import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";

let server: Server;

const port = 5000;

async function main() {
  try {

    // Connect to MongoDB
    // await mongoose.connect("mongodb+srv://todosexpress:todosexpress@cluster0.w81iv.mongodb.net/todosDB?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Connected to MongoDB");
    server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

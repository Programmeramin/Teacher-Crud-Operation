import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import teacherRouter from "./routes/teacher.js"
import { mongodbconnection } from "./configs/mongodb.js";
import ejs from "ejs";
import expressEjsLayouts from "express-ejs-layouts";

// inittialize var
dotenv.config();
const PORT = process.env.PORT || 6060;


// express app
const app = express();
app.use(express.json());

// ejs 
app.set("view engine", "ejs");


//static folder 
app.use(express.static("public"));


//router
app.use(teacherRouter);

//listen port
app.listen(PORT , () =>{
    mongodbconnection();
    console.log(`Server is running on Port${PORT}`.bgGreen.white);
}); 
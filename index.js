// import packages
import  express  from "express";
import cors from "cors";  
import helmet from "helmet"; 

// import API
import Todo from "./API/TodoList/index.js"
import User from "./API/User/index.js"

// server variable
const app=express();

// use packages
app.use(express.json());
app.use(cors());
app.use(helmet());


// use API
app.use("/api",Todo);
app.use("/api",User);


// creating server on port 4000
app.listen(process.env.port || 4000);


console.log('Web Server is listening at port '+ (process.env.port || 4000));
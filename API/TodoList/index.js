// import 
import express from "express";
import fetch from "node-fetch"


// Router
const Router = express.Router();

// function to remove userId from fetch data
const removeUserID = (data) => {
    data.forEach(element => {
        delete element.userId

    });

    return data;
}


// get request to get all the Todos
// http://localhost:4000/api/todos/1
Router.get("/todos", async (req, res) => {
    try {

        const data = await fetch("https://jsonplaceholder.typicode.com/todos");
        const items = await data.json();


        const updatedData = removeUserID(items);
        return res.json(updatedData);
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
})



// get Request to get Todos on the base of 'userId'
// http://localhost:4000/api/todos/<user id>
Router.get("/todos/:id", async (req, res) => {
    try {

        const {id}=req.params;
        const data = await fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${id}`);
        const items = await data.json();


        
        return res.json(items);
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

export default Router;
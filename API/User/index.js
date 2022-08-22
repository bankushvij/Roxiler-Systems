// import
import express from "express";
import fetch from "node-fetch"

// Router
const Router = express.Router();



// get Request to get user data on the base of 'id'
// http://localhost:4000/api/User/< ID >
Router.get("/user/:id", async (req, res) => {
    try {
        const {id}=req.params;
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/?id=${id}`);
        const items = await data.json();

        const userData = await fetch(`https://jsonplaceholder.typicode.com/todos/?userId=${id}`);
        const userItems = await userData.json();

        
        
        return res.json({items,"todos":userItems});
    }
    catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

export default Router;

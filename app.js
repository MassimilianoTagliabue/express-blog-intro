const express = require("express");
const app = express();
const port = 3001;

const posts = require("./post");




app.get("/", (req, res) =>{

    res.send("Server del mio blog"); 

});


app.get("/bacheca", (req, res) =>{

    const postObj ={
        posts,
        cont : posts.length
    }

    res.json(postObj);
    
    
    
});


app.listen(port, ()=>{

    console.log("server online");
    
})

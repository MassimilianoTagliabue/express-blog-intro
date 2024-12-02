const express = require("express");
const app = express();
const port = 3000;

const posts = require("./post");

console.log(posts);



app.get("/", (req, res) =>{

    res.send("Server del mio blog");
    

});


app.listen(port, ()=>{

    console.log("server online");
    
})

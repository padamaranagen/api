const express = require('express');
const app = express();
const personalData = require("./database/person/person.json");
let port = process.env.port || 1337;

app.get("/", (req, res)=>{
    res.send("Hello World");
});

app.get("/api/person", (req, res)=>{   
    res.send( JSON.stringify(personalData));
});

app.listen(port, ()=>{
    console.log(`Listening on port http://localhost:${port}`);
});
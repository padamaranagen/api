const express = require('express');
const app = express();
const personalData = require("./database/person/person.json");
const courseDB = require("./database/course/db-data.json");

let port = process.env.PORT  || 1337;

app.get("/", (req, res)=>{
    res.send("Hello World");
});

/*
* Personal data API
*/
app.get("/api/person", (req, res)=>{   
    res.send(JSON.stringify(personalData));
});
/*
* Course data API
*/
app.get("/api/course", (req, res)=>{   
    res.send(JSON.stringify(courseDB));
});

app.listen(port, ()=>{
    console.log(`Listening on port http://localhost:${port}`);
});
const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send({ bye: "buddy"});
})


// The process.env tell heroku which environment it should declare the port on
// The boolean statement is used so that we in PRODUCTION we can use process.env but in DEVELOPMENT we can use 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT);
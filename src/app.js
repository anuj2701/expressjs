const express = require("express");
const path = require("path");

const app = express();

port = 8000;
console.log(path.join(__dirname));
const staticPath = path.join(__dirname,"../public")
app.use(express.static(staticPath));
app.get("/" , (req,res) => {
    res.send("hello")
})

app.listen(port , () => {
    console.log("listening port 8000")
})
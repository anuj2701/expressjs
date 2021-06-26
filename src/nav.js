const express = require("express");
// const path = require("path"
const port = 3000;
const app = express();

app.get("/" , (req,res) => {
    res.write("hello")
    res.send();
});
app.get("/about" , (req,res) => {
    res.send("hello about")
});

app.get("/contact" , (req,res) => {
    res.send("hello contact")
});

app.get("/temp" , (req,res) => {
    res.send("hello temp")
});
app.listen(port , () => {
    console.log("listening port 8000")
})
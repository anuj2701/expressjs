const express = require("express");
const path = require("path");

const app = express();

port = 8000;
console.log(path.join(__dirname));
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates");
app.set("view engine", "hbs");
app.set("views", templatePath);

app.get("/", (req, res) => {
  res.render("index");
});
app.use(express.static(staticPath));
// app.use(express.static(viewPath));
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log("listening port 8000");
});

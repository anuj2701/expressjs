const express = require("express");
const path = require("path");
const hbs = require("hbs")
const app = express();

port = 8000;
console.log(path.join(__dirname));
const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath)
app.get("/", (req, res) => {
  res.render("index");
});
app.use(express.static(staticPath));
// app.use(express.static(viewPath));
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("*", (req, res) => {
  res.render("404",{
    errorcomment:"opps page couldn't found "
  });
});

app.listen(port, () => {
  console.log("listening port 8000");
});

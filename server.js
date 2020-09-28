const express = require("express");
const app = express();
const routes = require("./routes");
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(3000, () => console.log("Server on"));

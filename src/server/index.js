const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
var mongoose = require("mongoose");
const Portfolio = require("./models/Portfolio");
mongoose.connect("mongodb://localhost:27017/Test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use("/static", express.static(path.join(__dirname, "../../build/static")));
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/admin", express.static(path.join(__dirname, "public")));
console.log();
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: "12132",
    })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile("index.html", {
        root: path.join(__dirname, "../../build"),
        baseUrl: req.headers.host,
    });
});
app.get("/api", (req, res) => {
    Portfolio.find()
        .then((portfolios) => res.send(portfolios))
        .catch(console.log);
});
app.use("/admin", require("./routes/admin"));
app.use("/admin/portfolios", require("./routes/portfolios"));
app.use("/admin/pages", require("./routes/pages"));
app.listen(3000, () => {
    console.log("server running");
});
const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fileupload = require("express-fileupload");
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileupload());

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use("/static", express.static(path.join(__dirname, "../../build/static")));
app.use("/", express.static(path.join(__dirname, "/public")));
app.use("/admin", express.static(path.join(__dirname, "/public")));

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: process.env.SESSION_SECRET,
    })
);
app.get("/", (req, res) => {
    console.log("request to  /");
    res.sendFile("index.html", {
        root: path.join(__dirname, "../../build"),
        baseUrl: req.headers.host,
    });
});

app.use("/admin", require("./routes/admin"));
app.use("/admin/portfolios", require("./routes/portfolios"));
app.use("/admin/pages", require("./routes/pages"));
app.use("/api", require("./routes/api"));
app.listen(3000, () => {
    console.log("server running");
});
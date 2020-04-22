const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const fileupload = require("express-fileupload");
const initializePassport = require("./passport_config");
const passport = require("passport");
const auth = require("./middleware/auth");
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});

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

initializePassport(passport);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    console.log("request to  /");
    res.sendFile("index.html", {
        root: path.join(__dirname, "../../build"),
        baseUrl: req.headers.host,
    });
});
app.get("/login", (req, res) => {
    res.render("login");
});
app.post(
    "/login",
    passport.authenticate("local", {
        failureRedirect: "/login",
    }),
    (req, res) => {
        console.log("login");
        res.redirect("/admin");
    }
);
app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});
app.use("/admin", auth, require("./routes/admin"));
app.use("/admin/portfolios", auth, require("./routes/portfolios"));
app.use("/admin/pages", auth, require("./routes/pages"));
app.use("/api", require("./routes/api"));
app.listen(process.env.PORT, () => {
    console.log("server running on " + process.env.PORT);
});
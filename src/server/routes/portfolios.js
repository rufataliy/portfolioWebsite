const router = new require("express").Router();
const path = require("path");
const Portfolio = require("../models/Portfolio");

router.get("/", (req, res) => {
    Portfolio.findAll().then(res.send).catch(console.log);
});

router.post("/", (req, res) => {
    if (req.files) {
        req.body.image = req.files.image.nae;
        req.files.image
            .mv(path.join(__dirname, "../public/img/" + req.files.image.name))
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }
    res.send(req.body);
    Portfolio.create(req.body)
        .then(() => res.redirect("/admin"))
        .catch(console.log);
});
router.get("/edit/:portfolioId", (req, res) => {
    Portfolio.findById(req.params.portfolioId)
        .then((portfolio) => res.render("editPortfolio", { portfolio }))
        .catch(console.log);
});
router.post("/edit/:portfolioId", (req, res) => {
    if (req.files) {
        req.body.image = req.files.image.name;
        req.files.image
            .mv(path.join(__dirname, "../public/img/" + req.files.image.name))
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }
    Portfolio.findByIdAndUpdate(req.params.portfolioId, req.body)
        .then((item) => {
            res.redirect("/admin");
            console.log(item);
        })
        .catch(console.log);
});
router.get("/delete/:portfolioId", (req, res) => {
    Portfolio.deleteOne({ _id: req.params.portfolioId })
        .then(() => res.redirect("/"))
        .catch(console.log);
});

module.exports = router;
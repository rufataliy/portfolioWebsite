const router = new require("express").Router();
const fileUpload = require("../middleware/fileUpload")
const Portfolio = require("../models/Portfolio");

router.get("/", (req, res) => {
    Portfolio.findAll().then(res.send).catch(console.log);
});
router.get("/newPortfolio", (req, res) => {
    res.render("newPortfolio");
});
router.post("/", fileUpload, (req, res) => {
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
router.post("/edit/:portfolioId", fileUpload, (req, res) => {
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
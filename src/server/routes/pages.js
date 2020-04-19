const router = new require("express").Router();
const Page = require("../models/Page");

router.get("/", (req, res) => {
    Page.find().then(res.send).catch(console.log);
});
router.post("/", (req, res) => {
    Page.create(req.body)
        .then(() => res.redirect("/"))
        .catch(console.log);
});
router.get("/:portfolioId", (req, res) => {
    Page.create(req.body)
        .then(() => res.redirect("/"))
        .catch(console.log);
});
router.put("/:portfolioId", (req, res) => {
    Page.create(req.body)
        .then(() => res.redirect("/"))
        .catch(console.log);
});
router.delete("/:portfolioId", (req, res) => {
    Page.create(req.body)
        .then(() => res.redirect("/"))
        .catch(console.log);
});

module.exports = router;
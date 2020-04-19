const router = new require("express").Router();
const Portfolio = require("../models/Portfolio");
const Page = require("../models/Page");
router.get("/portfolios", async(req, res) => {
    Portfolio.find()
        .then((portfolios) => res.send(portfolios))
        .catch((err) => console.log(err));
});
router.get("/pages", (req, res) => {
    Page.find()
        .then((pages) => res.send(pages))
        .catch((err) => console.log(err));
});

module.exports = router;
const router = new require("express").Router();
const Portfolio = require("../models/Portfolio");
const Page = require("../models/Page");
router.get("/", async(req, res) => {
    const portfoliosPromise = Portfolio.find();
    const pagesPromise = Page.find();
    const [portfolios, pages] = await Promise.all([
            portfoliosPromise,
            pagesPromise,
        ])
        .then((responses) => responses)
        .catch(console.log);

    res.render("admin", { portfolios, pages });
});


module.exports = router;
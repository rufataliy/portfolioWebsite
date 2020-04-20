const router = new require("express").Router();
const Page = require("../models/Page");
const fileUpload = require("../middleware/fileUpload")
router.get("/", (req, res) => {
    Page.find().then(res.send).catch(console.log);
});
router.get("/newPage", (req, res) => {
    res.render("newPage")
});
router.post("/newPage", fileUpload, (req, res) => {
    Page.create(req.body)
        .then(() => res.redirect("/admin"))
        .catch(console.log);
});
router.get("/:pageId", (req, res) => {
    Page.findById(req.params.pageId)
        .then((page) => res.render("editPage", { page }))
        .catch(console.log);
});
router.get("/edit/:pageId", (req, res) => {
    Page.findById(req.params.pageId)
        .then((page) => res.render("editPage", { page }))
        .catch(console.log);
});
router.post("/edit/:pageId", (req, res) => {
    Page.findByIdAndUpdate(req.params.pageId, req.body)
        .then((item) => {
            res.redirect("/admin");
            console.log(item);
        })
        .catch(console.log);
});
router.get("/delete/:pageId", (req, res) => {
    Page.deleteOne({ _id: req.params.pageId })
        .then(() => res.redirect("/admin"))
        .catch(console.log);
});

module.exports = router;
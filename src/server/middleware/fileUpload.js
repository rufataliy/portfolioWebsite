const path = require("path");
module.exports = (req, res, next) => {
    if (req.files) {
        req.body.image = req.files.image.name;
        req.files.image
            .mv(path.join(__dirname, "../public/img/" + req.files.image.name))
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }
    next()
}
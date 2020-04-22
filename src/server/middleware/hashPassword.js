const bcrypt = require("bcrypt");

const hashPassword = async(req, res, next) => {
    const reg = /^(?=.*[a-zA-z])(?=.*\d).{8,10}$/;
    console.log(reg.test(req.body.password));
    if (reg.test(req.body.password)) {
        const hashedPassword = await bcrypt.hash(req.body.password, 8);
        req.body.password = hashedPassword;
        next();
    } else {
        res.redirect("/login");
    }
};

module.exports = hashPassword;
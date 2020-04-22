const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("./models/User");

function initialize(passport, getUserByEmail) {
    const authUser = async function(username, password, done) {
        const user = await User.findOne({ username });

        if (user == null) {
            return done(null, false, { message: "No user" });
        }
        try {
            if (await bcrypt.compare(password, user.password)) {
                done(null, user);
            } else {
                return done(null, false, { message: "incorrect password" });
            }
        } catch (e) {
            return done(e);
        }
    };

    passport.use(
        new LocalStrategy({
                usernameField: "username",
            },
            authUser
        )
    );

    passport.serializeUser((user, done) => done(null, user._id));
    passport.deserializeUser(async(_id, done) => {
        const user = await User.findOne({ _id });
        done(null, user);
    });
}

module.exports = initialize;
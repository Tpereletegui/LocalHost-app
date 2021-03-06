const passport = require("passport");
const localStrategy = require('passport-local').Strategy;
const User = require("../../../models/User");
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;


passport.use('register', new localStrategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}, async (req, email, password, done) => {
    try {
        const { fristName, lastName } = req.body;
        
        const user = await User.create({ fristName, lastName, email, password });
        console.log('usuario', user)
    return done(null, user);
        
    } catch (e) {
        return done(e);
    }
}));

passport.use("login", new localStrategy({
    usernameField: "email",
    passwordField: "password"
}, async (email, password, done) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return done(null, false, { message: "No se econtro el usuario" });
        }

        const validate = await user.isValidContraseña(password);
        if (!validate) {
            return done(null, false, { message: "No se econtro la validacion" });
        }

    return done(null, user, { message: "Se logueo Correctamente" });
        
    } catch (e) {
        return done(e);
    }
}));

passport.use(new JWTStrategy({
    secretOrKey: 'top_secret',
    jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
}, async (token, done) => {
    try {
        return done(null, token.user);
    } catch (e) {
        done(e);
    }
}));

const verificacionId = async (id) => {
    try {
        let find = await User.findById(id);
        let obj = { bool: false };
        if(find !== null) return obj = { bool: true, user: find };
        return obj;
    } catch(error) {
        console.log(error);
    }
};


module.exports = {
    verificacionId
}
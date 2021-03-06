const express = require('express');
const passport = require('passport');



const route = express.Router();

// @disc Auth with google
// @route Get /auth/google

route.get('/google', passport.authenticate('google', {scope: ['profile']}));

// @disc Google auth callback
// @route Get /auth/gooole/callback
route.get('/google/callback',passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/dashboard');
    });

//logout

route.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

module.exports = route;
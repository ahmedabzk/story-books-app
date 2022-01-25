const express = require('express');

const route = express.Router();

const Story = require('../models/story');

// const { ensureAuth, ensureGuest } = require('../middleware/auth');

// @disc login/landing page

route.get('/', (req, res) => {
    res.render('login', {
        layout: 'login'
    });
});

// @disc dashboard

route.get('/dashboard', async (req, res) => {
    try {
        const stories = await Story.find({ user: req.user.id }).lean();
        res.render('dashboard', {
        name: req.user.firstName,
        stories
    })
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }
    
});

module.exports = route;
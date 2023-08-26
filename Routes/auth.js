const express = require('express');
const router = express.Router();
let users = require('../db/users.json')
const fs = require('fs');

router.get("/register", (req, res) => {
    res.render('register');
});

router.post("/register", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = {email, password};
    fs.readFileSync('users.json', 'utf-8')
    users.push(user);
    fs.writeFileSync('users.json', JSON.stringify(user))
    console.log(users)

    res.redirect("/");
});

router.get("/login", (req, res) => {
    res.render('login');
});

router.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    users.find((i) => {
        if(i.email === email && i.password === password){
            res.redirect("/Dashboard")
        } else {console.log('error')}
        console.log(i.email)
        console.log(email)
        console.log(i.password)
        console.log(password)
    })
})

module.exports = router
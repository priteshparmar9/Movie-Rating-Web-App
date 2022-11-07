const express = require('express');
const router = express.Router();


const User = require('../models/user');

router.get('/', async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    }
    catch (err) {
        res.send("Error: " + err);
    }
})

router.post('/signup', async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        // await User.find({ username: user.username.toString() }).toArray(function (err, result) {
        //     if (err) throw err;
        //     console.log(result);
        // });
        // if (us) {
        //     res.send('failure');
        // }

        let us = user.save();
        // constx u1 = await user.save();
        res.json("success");
    }
    catch (error) {
        console.log(error);
        res.json("error");
    }
})

router.put('/changePassword/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        user.password = req.body.password;
        const u1 = await user.save();
        res.send("Password updated to : " + u1.password);
    }
    catch (error) {
        res.send("Error : " + error);
    }
    }
)

router.put('/changeUsername/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        user.username = req.body.username;
        const u1 = await user.save();
        res.send("Username updated to : " + u1.username);
    }
    catch (error) {
        res.send("Error : " + error);
    }
})

router.put('/changeEmail/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        user.email = req.body.email;
        const u1 = await user.save();
        res.send("Email updated to : " + u1.email);
    }
    catch (error) {
        res.send("Error : " + error);
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        await user.delete();
        res.send("Account deleted successfully!");
    }
    catch (error) {
        res.send("Error : " + error);
    }
})

router.post('/login', async (req, res) => {
    try {
        var user = await User.find(
            {
                $or: [
                    { username: req.body.username },
                    { email: req.body.username },
                ]
            }
        );
        console.log(user);
        if (user[0]) {
            user = user[0];
            if (user.password.toString() == req.body.password.toString()) {
                // req.session.username = user.username;
                res.send("Login Successful!");
            }
            else {
                res.send("Password is incorrect!!");
            }
        }
        else {
            res.send("No account found with given username/email")
        }
    }
    catch (error) {
        res.send("Error : " + error);
    }
})

module.exports = router;

router.get("/:username", async (req, res) => {
    try {
        var user = await User.find(
            { username: req.params.username },
        )
        res.send(user + 'fail');
    }
    catch (error) {
        res.send(error.message)
    }
})

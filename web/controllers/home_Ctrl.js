const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    //console.log("estoy en session");
    //console.log(req.session);
    res.render("home", {
        user: req.session.userLogged
    });
});

module.exports = router;
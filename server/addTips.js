const express = require("express");
const router = express.Router();
const mongo = require("../DB/addTips")

//write your code here 

router.get('/test', (req, res) => {
    mongo.readData((result) => {
        res.json(result);
    })
});

router.post("/", (req, res) => {
    // console.log("req.body", req.body);
    mongo.addTips(req.body, result => {
        // console.log("result", result);
        res.json(result);
    });
});


module.exports = router;
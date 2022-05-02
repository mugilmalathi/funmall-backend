const express = require("express");

const Shop = require("../model/shop.model");

const router = express.Router();


router.get("/shops", async(req, res)=>{
    const shop = await Shop.find().lean().exec();
    return res.status(201).send(shop);
})

router.post("/shops", async(req, res)=>{
        const shop = await Shop.create(req.body);
        return res.status(201).send(shop);
})


module.exports = router;
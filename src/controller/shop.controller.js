const express = require("express");

const Shop = require("../model/shop.model");

const router = express.Router();

router.post("/shop", async(req, res)=>{
    try{
        const shop = await Shop.create(req.body);
        return res.status(201).send({shop});
    }catch(err)
    {
        return res.status(500).send({message:err.message})
    }
})


router.get("/shop", async(req, res)=>{
    try{
        const shop = await Shop.find().lean().exec();
        return res.status(201).send({shop});
    }catch(err)
    {
        return res.status(500).send({message:err.message})
    }
})

module.exports = router;
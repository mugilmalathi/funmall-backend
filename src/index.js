const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
const connect = require("./config/db")

const PORT = process.env.PORT;

const shopController = require("./controller/shop.controller");

app.use("/", shopController);

app.listen(PORT, async()=>{
    try{
        await connect();
        console.log("Connected DB..!")
    }catch(err){
        console.log(err);
    }
})
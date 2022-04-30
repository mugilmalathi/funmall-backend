const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();
const connect = require("./config/db")

const PORT = process.env.PORT;

app.listen(PORT, async(req, res)=>{
    try{
        await connect();
        console.log("Connected DB..!")
    }catch(err){
        console.log(err);
    }
})
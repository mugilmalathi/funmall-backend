const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({

    name: {type:String},
    price: {type:Number},
    image: {type:String}
},{
    Versionkey: false,
    timestamps: true
})

module.exports = mongoose.model("shop", shopSchema)

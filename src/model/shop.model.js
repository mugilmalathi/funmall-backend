const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
    id:{type: Number},
    name: {type:String},
    price: {type:Number},
    image: {type:String}
},{
    versionkey: false,
    timestamps: true
})

module.exports = mongoose.model("shops", shopSchema)

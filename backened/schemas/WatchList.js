const {Schema} = require("mongoose")
const watchList = new Schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
})
module.exports ={watchList}
const mongoose = require('mongoose')
const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "can't be blank"]
    },
    trademark: {
        type: String,
        require: [true, "can't be blank"]
    },
    price: {
        type: String,
        required: [true, "can't be blank"]
    },
    category: {
        type: String,
        required: [true, "can't be blank"]
    },
    pictures: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: [true, "can't be blank"]
    },

})

const Product = mongoose.model('product', ProductSchema)

module.exports = Product
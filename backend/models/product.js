const {default: mongoose} = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: { type: String, required: true, unique: true, index: true },
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true }, 
});

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;
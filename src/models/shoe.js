import { default as mongoose } from 'mongoose';

const shoeSchema = new mongoose.Schema({
    productId: { type: String, required: true },
    productName: { type: String, required: true },
    ImageLink: { type: String, required: true },
    brand: { type: String, required: true },
    size: { type: Array, required: true },
    price: { type: Number, required: true },
    description:{ type: String, required: true },
});

const shoeModel = mongoose.model('shoe', shoeSchema);

export default shoeModel;

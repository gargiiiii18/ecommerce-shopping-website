import { model, models, Schema } from 'mongoose';

const ProductSchema = new Schema({
    name: String,
    description: String,
    gender: String,
    price: Number,
    category: String,
    picture: String,
}, {collection: "products"});

const Product = models.Product || model('Product', ProductSchema);

export default Product;
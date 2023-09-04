import mongoose, { model, Schema, models } from 'mongoose'

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    price: {
        type: Number,
        required: true,
    },
    imgSrc: String,
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'category',
    }, 
    properties: {
        type: Object,
    }

}, {
    timestamps: true,
})

export const Product = models?.Product || model('Product', ProductSchema)
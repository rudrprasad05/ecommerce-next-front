import { Product } from "@/models/Product"
import mongoose from "mongoose"
import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
const stripe = require('stripe')('sk_test_...')

export default async function handle(req, res){
    await mongooseConnect()
    if(req.method != "POST"){
        res.json("should be post")
        return
    }
    const {name, email, address, contact, products} = req.body

    const productIds = products.split(',')

    const uniqueId = [...new Set(productIds)]
    const productInfo = await Product.find({_id: uniqueId})

    let items = []
    for(const productId of uniqueId){
        const info = productInfo.find(p => p._id.toString() == productId)
        const quantity = productIds.filter(id=> id == productId)?.length || 0
        
        if(quantity > 0 && info){

            items.push({
                quantity,
                price_data: {
                    currency: 'USD',
                    product_data: {name: info.title},
                    unit_amount: quantity * info.price
                }
            })

        }
        
        
    }
    const orderDoc = await Order.create({
        line_items,
        name,
        email,
        address,
        contact,
        paid: false
    })

    res.json(orderDoc)
}
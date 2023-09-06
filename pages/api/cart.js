import { mongooseConnect } from '@/lib/mongoose'
import { Product } from '@/models/Product'
import React from 'react'

export default async function handle(req, res){
    await mongooseConnect()
    const id = req.body._id

    res.json(await Product.find({_id:id}))
}


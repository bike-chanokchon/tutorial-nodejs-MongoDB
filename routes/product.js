const express = require('express');
const Product = require('../models/product')

const router = express.Router();

router.get('/', async (req, res, next) => {
    // ค้นหาข้อมูลทั้งหมดในฐานข้อมูล
    const prods = await Product.find({}).catch((err) => console.error(err))

    return res.json(prods)
})

router.get('/:id', async (req, res, next) => {
    const { id } = req.params

    // ค้นหาข้อมูลทั้งหมดในฐานข้อมูล
    const prods = await Product.findById(id, 'prod_name prod_desc').catch((err) => console.error(err))

    return res.json(prods)
})

router.post('/', async (req, res, next) => {
    const { prod_name, prod_desc, prod_price } = req.body

    const prod = await Product.create({
        prod_name: prod_name,
        prod_desc: prod_desc,
        prod_price: prod_price
    })

    return res.json(prod)
})

router.put('/:id', async (req, res, next) => {
    const { id } = req.params
    const { prod_name, prod_desc, prod_price } = req.body

    const prod = await Product.findByIdAndUpdate(id, {
        prod_name: prod_name,
        prod_desc: prod_desc,
        prod_price: prod_price
    });

    return res.json(prod)
})

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params
    const prod = await Product.findByIdAndDelete(id)

    return res.json(prod)
})

module.exports = router;
const express = require('express');
const router = express.Router();

const Product = require('../models/product');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /products' 
    });
})

router.post('/', (req, res, next) => {
    let product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product
        .save()
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
    res.status(201).json({
        message: 'Handling POST request to /products',
        createdProduct: product
    });
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
        .exec()
        .then(doc => {
            console.log('Form database:', doc);
            res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
})

router.patch('/:productId', (req, res, next) => {
   res.status(200).json({
       message: 'Updated product'
   })
})

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    })
 })


module.exports = router;
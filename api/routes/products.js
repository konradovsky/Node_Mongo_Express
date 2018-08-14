const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET request to /products' 
    });
})

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(200).json({
        message: 'Handling POST request to /products',
        createdProduct: product
    });
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if(id >= 'special'){
        res.status(200).json({
            message: 'You found a special route',
            id: id
        })
    } else {
        res.status(404).json({
            message: 'Not found: 404'
        })
    }
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
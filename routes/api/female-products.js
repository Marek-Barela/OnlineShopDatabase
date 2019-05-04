const express = require('express');
const router = express.Router();
const FemaleProduct = require('../../models/femaleProduct');

// @route GET api/female/products
// @desc get all products
// @access Public 

router.get('/', (req, res) => {
  FemaleProduct.find()
    .then(products => res.json(products))
});

// @route GET api/female/products/dress
// @desc get dress products
// @access Public 

router.get('/dress', (req, res) => {
  FemaleProduct.find({
      productType: "dress",
      productGroup: "clothes"
    })
    .then(products => res.json(products))
});

// @route GET api/female/products/:id
// @desc get single product
// @access Public 

router.get('/:id', (req, res) => {
  FemaleProduct.findById(req.params.id)
    .then(products => res.json(products))
});

// @route POST api/female/products
// @desc set product in database
// @access Public 

router.post('/', (req, res) => {
  const newProduct = new FemaleProduct({
    name: req.body.name,
    price: req.body.price,
    color: req.body.color,
    description: req.body.description,
    fabric: req.body.fabric,
    materials: req.body.materials,
    images: req.body.images,
    productGroup: req.body.productGroup,
    productType: req.body.productType
  });
  newProduct.save().then(item => res.json(item));
});

module.exports = router;
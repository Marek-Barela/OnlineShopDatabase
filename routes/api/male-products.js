const express = require('express');
const router = express.Router();
const MaleProduct = require('../../models/MaleProduct');

// @route GET api/male/products
// @desc get all products
// @access Public 

router.get('/', (req, res) => {
  MaleProduct.find()
    .then(products => res.json(products))
});

// @route GET api/male/products/shirts
// @desc get shirts products
// @access Public 

router.get('/shirts', (req, res) => {
  MaleProduct.find({
      productType: "shirt",
      productGroup: "clothes"
    })
    .then(products => res.json(products))
});

// @route GET api/male/products/jeans
// @desc get jeans products
// @access Public

router.get('/jeans', (req, res) => {
  MaleProduct.find({
      productType: "jeans",
      productGroup: "clothes"
    })
    .then(products => res.json(products))
});

// @route GET api/male/products/jacket
// @desc get jacket products
// @access Public

router.get('/jacket', (req, res) => {
  MaleProduct.find({
      productType: "jacket",
      productGroup: "clothes"
    })
    .then(products => res.json(products))
});

// @route GET api/male/products/trousers
// @desc get trousers products
// @access Public

router.get('/trousers', (req, res) => {
  MaleProduct.find({
      productType: "trousers",
      productGroup: "clothes"
    })
    .then(products => res.json(products))
});

// @route GET api/male/products/elasticsides
// @desc get elasticsides products
// @access Public

router.get('/elasticsides', (req, res) => {
  MaleProduct.find({
      productType: "elasticsides",
      productGroup: "boots"
    })
    .then(products => res.json(products))
});

// @route GET api/male/products/moccasins
// @desc get moccasins products
// @access Public

router.get('/moccasins', (req, res) => {
  MaleProduct.find({
      productType: "moccasins",
      productGroup: "boots"
    })
    .then(products => res.json(products))
});

// @route GET api/male/products/:id
// @desc get single product
// @access Public 

router.get('/:id', (req, res) => {
  MaleProduct.findById(req.params.id)
    .then(products => res.json(products))
});

// @route POST api/male/products
// @desc set product in database
// @access Public 

router.post('/', (req, res) => {
  const newProduct = new MaleProduct({
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
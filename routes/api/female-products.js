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

// @route GET api/female/products/tunic
// @desc get tunic products
// @access Public 

router.get('/tunic', (req, res) => {
  FemaleProduct.find({
      productType: "tunic",
      productGroup: "clothes"
    })
    .then(products => res.json(products))
});

// @route GET api/female/products/blouses
// @desc get blouses products
// @access Public 

router.get('/blouses', (req, res) => {
  FemaleProduct.find({
      productType: "blouses",
      productGroup: "clothes"
    })
    .then(products => res.json(products))
});

// @route GET api/female/products/skirt
// @desc get skirt products
// @access Public 

router.get('/skirt', (req, res) => {
  FemaleProduct.find({
      productType: "skirt",
      productGroup: "clothes"
    })
    .then(products => res.json(products))
});

// @route GET api/female/products/pins
// @desc get pins products
// @access Public 

router.get('/pins', (req, res) => {
  FemaleProduct.find({
      productType: "pins",
      productGroup: "boots"
    })
    .then(products => res.json(products))
});

// @route GET api/female/products/booties
// @desc get booties products
// @access Public 

router.get('/booties', (req, res) => {
  FemaleProduct.find({
      productType: "booties",
      productGroup: "boots"
    })
    .then(products => res.json(products))
});

// @route GET api/female/products/ballerina
// @desc get ballerina products
// @access Public 

router.get('/ballerina', (req, res) => {
  FemaleProduct.find({
      productType: "ballerina",
      productGroup: "boots"
    })
    .then(products => res.json(products))
});

// @route GET api/female/products/tracksuit
// @desc get tracksuit products
// @access Public 

router.get('/tracksuit', (req, res) => {
  FemaleProduct.find({
      productType: "tracksuit",
      productGroup: "sport"
    })
    .then(products => res.json(products))
});

// @route GET api/female/products/tshirt
// @desc get tshirt products
// @access Public 

router.get('/tshirt', (req, res) => {
  FemaleProduct.find({
      productType: "tshirt",
      productGroup: "sport"
    })
    .then(products => res.json(products))
});

// @route GET api/female/products/bags
// @desc get bags products
// @access Public 

router.get('/bags', (req, res) => {
  FemaleProduct.find({
      productType: "bags",
      productGroup: "accesories"
    })
    .then(products => res.json(products))
});

// @route GET api/female/products/watches
// @desc get watches products
// @access Public 

router.get('/watches', (req, res) => {
  FemaleProduct.find({
      productType: "watches",
      productGroup: "accesories"
    })
    .then(products => res.json(products))
});

// @route GET api/female/products/jewelry
// @desc get jewelry products
// @access Public 

router.get('/jewelry', (req, res) => {
  FemaleProduct.find({
      productType: "jewelry",
      productGroup: "accesories"
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
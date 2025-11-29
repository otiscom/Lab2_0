const path = require('path');
const express = require('express');
const router = express.Router();
const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    prods: products,
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,

    
    activeAddProduct: true,
  });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  const price = Math.floor(Math.random() * 90)+10;
  const desc = "awesome product" + req.body.title;
  products.push({ title: req.body.title, price: price, desc: desc });
  //console.log(req.body);
  res.redirect('/');
});

//const desc = "awesome product" + req.body.title;
//products.push({ title: req.body.title, price: price, desc: desc });

exports.routes = router;
exports.products = products;


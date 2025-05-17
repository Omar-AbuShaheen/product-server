// routes/products.js
import express from 'express';
const router = express.Router();

let products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Phone', price: 800 }
];

// GET all products
router.get('/', (req, res) => {
  res.json(products);
});

// GET a product by ID
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

// POST a new product
router.post('/', (req, res) => {
  const { name, price } = req.body;
  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name,
    price
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update product
router.put('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });

  const { name, price } = req.body;
  if (name) product.name = name;
  if (price) product.price = price;

  res.json(product);
});

// DELETE product
router.delete('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Product not found' });

  const deleted = products.splice(index, 1);
  res.json(deleted[0]);
});

export default router;

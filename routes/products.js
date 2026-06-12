const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();

let products = [
  { id: uuidv4(), name: 'Laptop Dell XPS 13', category: 'Elektronik', stock: 12, price: 15000000, updatedAt: new Date().toISOString() },
  { id: uuidv4(), name: 'Meja Kantor Kayu', category: 'Furnitur', stock: 5, price: 1200000, updatedAt: new Date().toISOString() },
  { id: uuidv4(), name: 'Kursi Ergonomis', category: 'Furnitur', stock: 8, price: 2500000, updatedAt: new Date().toISOString() },
  { id: uuidv4(), name: 'Mouse Wireless Logitech', category: 'Elektronik', stock: 30, price: 350000, updatedAt: new Date().toISOString() },
  { id: uuidv4(), name: 'Kertas A4 500 lembar', category: 'ATK', stock: 2, price: 65000, updatedAt: new Date().toISOString() },
];

// GET all products
router.get('/', (req, res) => {
  const { search, category } = req.query;
  let result = [...products];
  if (search) result = result.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  if (category && category !== 'all') result = result.filter(p => p.category === category);
  res.json(result);
});

// GET single product
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: 'Produk tidak ditemukan' });
  res.json(product);
});

// POST create product
router.post('/', (req, res) => {
  const { name, category, stock, price } = req.body;
  if (!name || !category || stock == null || price == null) {
    return res.status(400).json({ error: 'Semua field wajib diisi' });
  }
  const product = { id: uuidv4(), name, category, stock: Number(stock), price: Number(price), updatedAt: new Date().toISOString() };
  products.push(product);
  res.status(201).json(product);
});

// PUT update product
router.put('/:id', (req, res) => {
  const idx = products.findIndex(p => p.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Produk tidak ditemukan' });
  const { name, category, stock, price } = req.body;
  products[idx] = { ...products[idx], name, category, stock: Number(stock), price: Number(price), updatedAt: new Date().toISOString() };
  res.json(products[idx]);
});

// DELETE product
router.delete('/:id', (req, res) => {
  const idx = products.findIndex(p => p.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Produk tidak ditemukan' });
  products.splice(idx, 1);
  res.json({ message: 'Produk berhasil dihapus' });
});

module.exports = router;

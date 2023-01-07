const { Router } = require('express');
const File = require('../container/File');
const Product = require('../models/product.model');

const router = Router();
const container = new File('Products');

router.get('/', (req, res) => {
  res.json(container.getAll());
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(container.getById(Number(id)));
});

router.post('/', async (req, res) => {
  const { name, price, stock, thumbnail } = req.body;

  // if(!name) throw new Error('Name is required');

  const product = new Product(name, price, stock, thumbnail);

  const response = await container.save(product);

  res.json(response)
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  
  const product = req.body

  const response = await container.update(Number(id), product);
  res.json(response);
  // if(Object.keys(product) !== 'name') console.log('Name is required');
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await container.deleteById(Number(id));
  res.json(response)
});

module.exports = router;
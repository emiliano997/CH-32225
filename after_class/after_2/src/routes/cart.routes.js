const { Router } = require('express');
const Cart = require('../models/cart.model');
const File = require('../container/File')

const router = Router();
const container = new File('Cart');
const containerProducts = new File('Products');

router.get('/', (req, res) => {
  res.json(container.getAll());
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(container.getById(Number(id)));
})

router.get('/:id/products', (req, res) => {
  const { id } = req.params;
  const cart = container.getById(Number(id));

  res.json({cartId: id, products: cart.products } );
})

router.get('/:id/products/:id_prod', (req, res) => {
  const { id, id_prod } = req.params;
  const cart = container.getById(Number(id));

  const product = cart.products.find((product) => product.id === Number(id_prod));

  res.json({cartId: id, product });
})

router.post('/', async (req, res) => {
  const cart = new Cart();
  const response = await container.save(cart);

  res.json(response);
})

router.post('/:id/products', async (req, res) => {
  const { id } = req.params;
  const { id_prod } = req.body;

  const cart = container.getById(Number(id));

  // if(typeof id_prod !== 'Array') throw new Error('id_prod must be an array');
  let response = '';

  await id_prod.forEach(async (id) => {
    const product = containerProducts.getById(Number(id));

    if(product) {
      console.log(product)
      let existe = false;
      if(cart.products) {
        existe = cart.products.find((product) => product.id === Number(id));
        if(!existe) {
          cart.products.push({ quantity: 1, id })
        } else {
          const index = cart.products.findIndex((product) => product.id === Number(id));
          cart.products[index].quantity += 1;
        }

        response = await container.update(Number(id), cart);

      } else {
        cart.products = [{ quantity: 1, id }];
        response = await container.update(Number(id), cart);
      }
    } else {
      response = 'Product not found';
    }
  });
  

  res.json(response);
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await container.delete(id);

  res.json(response);
})

router.delete('/:id/products/:id_prod', async (req, res) => {
  const { id, id_prod } = req.params;
  const cart = container.getById(Number(id));

  const newProducts = cart.products.filter((product) => product.id !== Number(id_prod));

  cart.products = newProducts;
  const response = await container.update(Number(id), cart);
  res.json(response);
})

module.exports = router;
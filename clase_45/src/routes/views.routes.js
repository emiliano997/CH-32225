import { Router } from "express";
import productsDao from "../daos/dbManager/products.dao.js";

const router = Router();

router.get('/', async (req, res) => {
  res.redirect('/products');
})

router.get('/products', async (req, res) => {
  const products = await productsDao.getAll();
  res.render('index', { title: 'Home', products });
})

router.get('/edit/:id', async (req, res) => {
  const product = await productsDao.getById(req.params.id);
  res.render('edit', { title: 'Edit', product });
})

router.get('/register', (req, res) => {
  res.render('register', { title: 'Register' });
})

router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
})

export default router;
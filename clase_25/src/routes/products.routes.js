import productsDao from "../daos/dbManager/products.dao.js";
import { Router } from 'express';
import passport from "passport";

const router = Router();

router.get('/', passport.authenticate('jwt', {session: false}), async (req, res) => {
  try {
    const products = await productsDao.getAll();
    res.json({ user: req.user, products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

router.get('/:id', async (req, res) => {
  try {
    const product = await productsDao.getById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

router.post('/', async (req, res) => {
  try {
    const product = await productsDao.create(req.body);
    // res.json(product);
    res.redirect('/products')
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

router.put('/:id', async (req, res) => {
  try {
    const product = await productsDao.update(req.params.id, req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const product = await productsDao.delete(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

export default router;
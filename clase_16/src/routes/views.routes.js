import { Router } from "express";
import productsDao from "../daos/dbManager/products.dao.js";

const router = Router();

router.get('/', async (req, res) => {
  const products = await productsDao.getAll();
  res.render('index', { title: 'Home', products });
})

router.get('/edit/:id', async (req, res) => {
  const product = await productsDao.getById(req.params.id);
  res.render('edit', { title: 'Edit', product });
})

export default router;
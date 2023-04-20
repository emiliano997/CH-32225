import productsDao from "../daos/dbManager/products.dao.js";
import ProductDto from "../daos/dtos/products.dto.js";

class ProductController {
  async getProducts(req, res) {
    try {
      const products = await productsDao.getAll();
      res.json({ user: req.user, products });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getProduct(req, res) {
    try {
      const product = await productsDao.getById(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createProduct(req, res) {
    try {
      const product = new ProductDto(req.body); 
      await productsDao.create(product);
      // res.json(product);
      res.redirect("/products");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateProduct(req, res) {
    try {
      const product = await productsDao.update(req.params.id, req.body);
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteProduct(req, res) {
    try {
      const product = await productsDao.delete(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new ProductController();

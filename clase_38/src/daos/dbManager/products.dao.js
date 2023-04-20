import { productModel } from "../../models/product.model.js";

class ProductDao { 
  async getAll() {
    return await productModel.find();
  }
  async getById(id) {
    return await productModel.findById(id);
  }

  async create(data) {
    return await productModel.create(data);
  }

  async update(id, data) {
    return await productModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await productModel.findByIdAndDelete(id);
  }
}

export default new ProductDao();
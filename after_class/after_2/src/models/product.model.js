class Product {
  constructor(name, price, stock, thumbnail) {
    this.name = name || '';
    this.price = price || 0;
    this.stock = stock || 0;
    this.thumbnail = thumbnail || [];
  }
}

module.exports = Product;
// export default Product;
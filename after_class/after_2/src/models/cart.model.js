class Cart {
  constructor() {
    this.timestamp = new Date().toLocaleString();
    this.products = [];
  }
}

module.exports = Cart;
// export default Cart;
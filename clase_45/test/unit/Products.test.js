import chai from "chai";
import productsDao from "../../src/daos/dbManager/products.dao.js";

const expect = chai.expect;

describe("Products Dao", () => {
  let productId;

  it("Should get all products", async () => {
    productsDao.getAll().then((products) => {
      productId = products[0].id;
      expect(products).to.be.an("array");
    });
  });

  it("Should get a product by id", async () => {
    productsDao.getById(productId).then((product) => {
      expect(product).to.be.an("object");
    });
  });

  it("Should create a product", async () => {
    const productMock = {
      title: "Test Product",
      description: "Test Product Description",
      price: 100,
      stock: 50,
    };

    productsDao.create(productMock).then((product) => {
      expect(product).to.be.an("object");
      expect(product).to.have.property("_id");
    });
  });
});

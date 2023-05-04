import mongoose from "mongoose";
import User from "../src/dao/Users.dao.js";
import chai from "chai";

mongoose.connect("mongodb://localhost:27017/adoptme");

const expect = chai.expect;

describe("Testing User Dao", async () => {
  before(function () {
    this.userDao = new User();
  });

  beforeEach(async function () {
    await mongoose.connection.collections.users.drop();
    this.timeout(5000);
  });

  it("Create a new user", async function () {
    const user = {
      first_name: "Juan",
      last_name: "Perez",
      email: "juan@gmail.com",
      password: "123456",
    };

    const result = await this.userDao.save(user);
    expect(result).to.be.ok;
  });

  it("Create user with pets empty array", async function () {
    const user = {
      first_name: "Juan",
      last_name: "Perez",
      email: "juan@gmail.com",
      password: "123456",
    };

    const result = await this.userDao.save(user);
    // assert.deepStrictEqual(result.pets, []);
    expect(result.pets).to.be.deep.equal([]);
  });

  it("Find user by email", async function () {
    const user = {
      first_name: "Juan",
      last_name: "Perez",
      email: "juan@gmail.com",
      password: "123456",
    };

    const result = await this.userDao.save(user);
    const resultUser = await this.userDao.getBy({ email: user.email });
    // assert.strictEqual(typeof resultUser, "object");
    expect(typeof resultUser).to.be.equal("object");
  });
});

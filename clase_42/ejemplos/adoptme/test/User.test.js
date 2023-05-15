import mongoose from "mongoose";
import User from "../src/dao/Users.dao.js";
import Assert from "assert";

mongoose.connect("mongodb://localhost:27017/adoptme");

const assert = Assert.strict;

describe("Testing User Dao", async () => {
  before(function () {
    this.userDao = new User();
  });

  beforeEach(async function () {
    await mongoose.connection.collections.users.drop();
    this.timeout(5000);
  });

  // it('Return list of users', async function () {
  //   const result = await this.userDao.get();
  //   assert.strictEqual(Array.isArray(result), true);
  // });

  it("Create a new user", async function () {
    const user = {
      first_name: "Juan",
      last_name: "Perez",
      email: "juan@gmail.com",
      password: "123456",
    };

    const result = await this.userDao.save(user);
    assert.ok(result._id);
  });

  it("Create user with pets empty array", async function () {
    const user = {
      first_name: "Juan",
      last_name: "Perez",
      email: "juan@gmail.com",
      password: "123456",
    };

    const result = await this.userDao.save(user);
    assert.deepStrictEqual(result.pets, []);
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
    assert.strictEqual(typeof resultUser, "object");
  });
});

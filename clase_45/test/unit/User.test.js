import chai from "chai";
import usersDao from "../../src/daos/dbManager/users.dao.js";

const expect = chai.expect;

describe("Users Dao", () => {
  let userId;

  it("Should get all users", async () => {
    usersDao.getAll().then((users) => {
      userId = users[0].id;
      expect(users).to.be.an("array");
    });
  });

  it("Should get an user by id", async () => {
    usersDao.getById(userId).then((user) => {
      expect(user).to.be.an("object");
    });
  });

  it("Should create an user", async () => {
    const userMock = {
      username: "test",
      email: "test@gmail.com",
      password: "123456",
    };

    usersDao.create(userMock).then((user) => {
      expect(user).to.be.an("object");
      expect(user).to.have.property("_id");
    });
  });

  it("Should return an error", async () => {
    const userMock = {
      username: "test",
      password: "123456",
    };

    usersDao
      .create(userMock)
      .then((user) => {
        expect(user).to.be.an("object");
      })
      .catch((error) => {
        expect(error._message).to.be.equal("user validation failed");
        expect(error).to.be.an("object");
      });
  });
});

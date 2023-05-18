import chai from "chai";
import request from "supertest";

const expect = chai.expect;

describe("Users API", async () => {
  let usuarioId;
  it("Should get all users", async () => {
    const res = await request("http://localhost:3000").get("/api/users");
    usuarioId = res.body[0]._id;
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("Should get an user by id", async () => {
    const res = await request("http://localhost:3000").get(
      "/api/users/" + usuarioId
    );
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("object");
  });
});

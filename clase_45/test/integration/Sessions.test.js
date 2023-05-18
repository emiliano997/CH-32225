import chai from "chai";
import request from "supertest";

const expect = chai.expect;

describe("Sessions API", async () => {
  it("Should login an user", async () => {
    const res = await request("http://localhost:3000")
      .post("/api/sessions/login")
      .send({
        email: "german@gmail.com",
        password: "123456",
      });
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("object");
  });
});

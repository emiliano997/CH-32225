import chai from "chai";
import request from "supertest";

const expect = chai.expect;

describe("Products API", async () => {
  it("Should get all products", async () => {
    const resSession = await request("http://localhost:3000")
      .post("/api/sessions/login")
      .send({
        email: "german@gmail.com",
        password: "123456",
      });

    const res = await request("http://localhost:3000")
      .get("/api/products")
      .set("Authorization", resSession.body.token);
    // console.log(res.body);
    expect(res.status).to.equal(200);
    expect(res.body.products).to.be.an("array");
  });
});

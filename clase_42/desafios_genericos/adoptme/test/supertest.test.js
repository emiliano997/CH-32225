import chai from "chai";
import supertest from "supertest";

const expect = chai.expect;
const request = supertest("http://localhost:8080");

// Test de la ruta /api/pets
// describe("Test de la ruta /api/pets", () => {
//   it("POST /api/pets Most create a new pet with property adopted: false", async () => {
//     const petMock = {
//       name: "Firulais",
//       specie: "dog",
//       birthDate: "01-19-1997",
//     };

//     const { body, statusCode, ok } = await request
//       .post("/api/pets")
//       .send(petMock);

//     expect(body.payload).to.have.property("adopted");
//     expect(body.payload.adopted).to.be.false;
//   });

//   it("POST /api/pets most return 400", async () => {
//     const petMock = {
//       specie: "dog",
//       birthDate: "01-19-1997",
//     };

//     const { body, statusCode, ok } = await request
//       .post("/api/pets")
//       .send(petMock);

//     expect(statusCode).to.equal(400);
//   });

//   it("GET /api/pets most return an array of pets", async () => {
//     const { body, statusCode, ok } = await request.get("/api/pets");

//     expect(body).to.have.property("payload");
//     expect(body).to.have.property("status");
//     expect(body.payload).to.be.an("array");
//   });

//   it("PUT /api/pets/:pid most return 200", async () => {
//     const petMock = {
//       name: "Felipe",
//       specie: "cat",
//       birthDate: "01-19-2019",
//     };

//     const { body, statusCode, ok } = await request
//       .post("/api/pets")
//       .send(petMock);

//     const {
//       body: bodyPut,
//       statusCode: statusCodePut,
//       ok: okPut,
//     } = await request
//       .put(`/api/pets/${body.payload._id}`)
//       .send({ name: "Firulais" });

//     expect(bodyPut.name).to.not.be.equal(petMock.name);
//   });

//   it("DELETE /api/pets/:pid most return 200", async () => {
//     const petMock = {
//       name: "Felipe",
//       specie: "cat",
//       birthDate: "01-19-2019",
//     };

//     const { body, statusCode, ok } = await request
//       .post("/api/pets")
//       .send(petMock);

//     const result = await request.delete(`/api/pets/${body.payload._id}`);

//     const {
//       body: getBody,
//       statusCode: getStatusCode,
//       ok: getOk,
//     } = await request.get(`/api/pets/${body.payload._id}`);

//     expect(getBody.payload).to.be.equal(undefined);
//   });
// });

// Test unprotected routes

describe("Test avanzado", () => {
  let cookie;

  it("Most create a new User", async () => {
    const mockUser = {
      first_name: "Augusto",
      last_name: "Olivarez",
      email: "agus@gmail.com",
      password: "123456",
    };

    const { body } = await request
      .post("/api/sessions/register")
      .send(mockUser);

    expect(body).to.be.ok;
  });

  it("Most login a user", async () => {
    const mockUser = {
      email: "agus@gmail.com",
      password: "123456",
    };

    const result = await request
      .post("/api/sessions/unprotectedLogin")
      .send(mockUser);

    console.log(result.headers);
    console.log(result.header);
    const cookieResult = result.headers["set-cookie"][0];
    expect(cookieResult).to.be.ok;

    cookie = {
      name: cookieResult.split("=")[0],
      value: cookieResult.split("=")[1],
    };

    expect(cookie.name).to.be.eql("unprotectedCookie");
  });

  it("Most return the current user", async () => {
    const result = await request
      .get("/api/sessions/unprotectedCurrent")
      .set("Cookie", [`${cookie.name}=${cookie.value}`]);

    expect(result.body.payload.email).to.be.equal("agus@gmail.com");
  });
});

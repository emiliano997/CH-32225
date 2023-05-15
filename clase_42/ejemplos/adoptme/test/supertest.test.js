import chai from "chai";
import supertest from "supertest";

const expect = chai.expect;
const request = supertest("http://localhost:8080");

// Test de la ruta /api/pets
// describe("Test de la ruta /api/pets", () => {
//   it("POST /api/pets", async () => {
//     const petMock = {
//       name: "Firulais",
//       specie: "dog",
//       birthDate: "01-19-1997",
//     };

//     const { body, statusCode, ok } = await request
//       .post("/api/pets")
//       .send(petMock);
//     console.log(body.payload);
//     // console.log(statusCode);
//     // console.log(ok);
//     expect(statusCode).to.equal(200);
//     expect(ok).to.be.true;
//     expect(body.payload).to.have.property("adopted");
//     expect(body.payload.adopted).to.be.false;
//     expect(body.status).to.be.equal("success");
//   });
// });

// Test avanzado
// describe("Test avanzado", () => {
//   let cookie;

//   it("Most create a new User", async () => {
//     const mockUser = {
//       first_name: "Juan",
//       last_name: "Perez",
//       email: "juan@gmail.com",
//       password: "123456",
//     };

//     const { body } = await request
//       .post("/api/sessions/register")
//       .send(mockUser);

//     expect(body).to.be.ok;
//   });

//   it("Most login a user and get a cookie", async () => {
//     const mockUser = {
//       email: "juan@gmail.com",
//       password: "123456",
//     };

//     const result = await request.post("/api/sessions/login").send(mockUser);
//     const cookieResult = result.headers["set-cookie"][0];
//     expect(cookieResult).to.be.ok;

//     cookie = {
//       name: cookieResult.split("=")[0],
//       value: cookieResult.split("=")[1],
//     };

//     expect(cookie.name).to.be.ok.and.eql("coderCookie");
//     expect(cookie.value).to.be.ok;
//   });

//   it("Most send a cookie and get a user", async () => {
//     const { body } = await request
//       .get("/api/sessions/current")
//       .set("Cookie", [`${cookie.name}=${cookie.value}`]);

//     expect(body.payload.email).to.be.eql("juan@gmail.com");
//   });
// });

// Test upload
describe("Test upload", () => {
  it("Most create a pet with a picture", async () => {
    const petMock = {
      name: "Firulais",
      specie: "dog",
      birthDate: "01-19-2018",
    };

    const { body, statusCode } = await request
      .post("/api/pets/withimage")
      .field("name", petMock.name)
      .field("specie", petMock.specie)
      .field("birthDate", petMock.birthDate)
      .attach("image", "./test/assets/perrito.jpg");

    expect(statusCode).to.be.equal(200);
    expect(body.payload).to.have.property("image");
    expect(body.payload).to.be.ok;
  });
});

import { faker } from "@faker-js/faker";

faker.locale = "es";

export const generateUser = () => {
  const numberOfProducts = parseInt(
    faker.random.numeric(1, { bannedDigits: [0] })
  );

  const products = [];

  for (let i = 0; i < numberOfProducts; i++) {
    products.push(generateProduct());
  }

  return {
    name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    role: faker.datatype.boolean() ? "vendedor" : "cliente",
    premium: faker.datatype.boolean(),
    sex: faker.name.sex(),
    birthDate: faker.date.birthdate(),
    phone: faker.phone.number(),
    ocupacion: faker.name.jobTitle(),
    products,
    image: faker.internet.avatar(),
    id: faker.database.mongodbObjectId(),
    email: faker.internet.email(),
  }
};

const generateProduct = () => {
  return {
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
    code: faker.random.alphaNumeric(5),
    department: faker.commerce.department(),
    stock: faker.random.numeric(1),
    id: faker.database.mongodbObjectId(),
    image: faker.image.image()
  }
};

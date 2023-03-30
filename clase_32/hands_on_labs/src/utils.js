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
    sex: faker.name.sex(),
    birthDate: faker.date.birthdate(),
    phone: faker.phone.number(),
    products,
    image: faker.internet.avatar(),
    id: faker.database.mongodbObjectId(),
    email: faker.internet.email(),
  }
};

const generateProduct = () => {
  return {
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    department: faker.commerce.department(),
    stock: faker.random.numeric(1),
    id: faker.database.mongodbObjectId(),
    image: faker.image.image()
  }
};

import mongoose from "mongoose";
import User from "../src/dto/User.dto.js";
import { createHash, passwordValidation } from '../src/utils/index.js'
import chai from "chai";

mongoose.connect("mongodb://localhost:27017/adoptme");

const expect = chai.expect;

describe("Testing User Dto", async () => {
  it('Check if userDto unified name and last name', () => {
    const user = {
      first_name: "Juan",
      last_name: "Perez",
      email: "juan@gmail.com",
      password: "123456",
    }

    const result = User.getUserTokenFrom(user);
    expect(result.name).to.be.equal(`${user.first_name} ${user.last_name}`);
  });

  it('Check if userDTO delete unnecessary fields', () => {
    const user = {
      first_name: "Juan",
      last_name: "Perez",
      email: "juan@gmail.com",
      password: "123456",
      role: 'admin',
      pets: []
    }

    const result = User.getUserTokenFrom(user);
    expect(result.first_name).to.be.undefined;
    expect(result.last_name).to.be.undefined;
    expect(result.password).to.be.undefined;
    expect(result.email).to.be.equal('juan@gmail.com');
    expect(result.role).to.be.equal('admin');
  });
});

describe('Testing Hash Password', () => {
  it('Should create a hash password', async () => {
    const password = '123456';
    const hash = await createHash(password);
    expect(hash).to.be.a('string');
    expect(hash).to.not.be.equal(password);
  })

  it('Should validate a password', async () => {
    const user = {
      password: '123456'
    }
    user.password = await createHash(user.password);
    const result = await passwordValidation(user, '123456');
    expect(result).to.be.true;
  })
});

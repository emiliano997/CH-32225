import * as dotenv from 'dotenv';
dotenv.config({ path: './.env.test' });

console.log(process.env.PORT)
console.log(process.env.TEST_PORT)
import { Command } from "commander";
import dotenv from "dotenv";

const program = new Command();

program
  .option('-m, --mode <mode>', 'Mode to run in', 'development')
  // .requiredOption('-m, --mode <mode>', 'Mode to run in')

program.parse()

dotenv.config({
  path: program.opts().mode === 'development' ? './.env.development' : './.env.production'
})

export default {
  PORT: process.env.PORT,
}